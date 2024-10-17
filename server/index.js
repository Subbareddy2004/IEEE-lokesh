import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { getLatestStressLevel, addStressLevel, getStressLevels } from './database.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(join(__dirname, '../dist')));
app.use(express.json());

// Store connected clients
const clients = new Set();

// SSE endpoint
app.get('/api/stress-level-stream', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });

  const client = res;
  clients.add(client);

  req.on('close', () => {
    clients.delete(client);
  });
});

// Endpoint to receive stress level from Google Colab
app.post('/api/update-stress-level', async (req, res) => {
  try {
    const { level } = req.body;
    if (typeof level !== 'number' || level < 0 || level > 10) {
      return res.status(400).json({ error: 'Invalid stress level' });
    }
    await addStressLevel(level);
    
    // Send update to all connected clients
    const message = JSON.stringify({ level, timestamp: new Date().toISOString() });
    clients.forEach(client => client.write(`data: ${message}\n\n`));
    
    res.json({ message: 'Stress level updated successfully' });
  } catch (error) {
    console.error('Error updating stress level:', error);
    res.status(500).json({ error: 'Failed to update stress level' });
  }
});

// Existing routes...

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});