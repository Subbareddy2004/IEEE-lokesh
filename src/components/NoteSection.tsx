import React, { useState } from 'react';

const NoteSection: React.FC = () => {
  const [notes, setNotes] = useState<string>('');

  const handleNotesChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(event.target.value);
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg md:text-xl font-semibold mb-4">Note Section</h3>
      <textarea
        value={notes}
        onChange={handleNotesChange}
        className="w-full h-24 md:h-32 p-2 border rounded"
        placeholder="Write your notes here..."
      />
    </div>
  );
};

export default NoteSection;