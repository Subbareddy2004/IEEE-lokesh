import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let db;

async function openDb() {
  if (!db) {
    db = await open({
      filename: join(__dirname, '..', 'stress_levels.db'),
      driver: sqlite3.Database
    });
  }
  return db;
}

export async function getLatestStressLevel() {
  const db = await openDb();
  const result = await db.get('SELECT level FROM stress_levels ORDER BY timestamp DESC LIMIT 1');
  return result ? result.level : null;
}

export async function getStressLevels(limit = 30) {
  const db = await openDb();
  const results = await db.all('SELECT level, timestamp FROM stress_levels ORDER BY timestamp DESC LIMIT ?', limit);
  return results;
}

export async function addStressLevel(level) {
  const db = await openDb();
  await db.run('INSERT INTO stress_levels (level) VALUES (?)', level);
}