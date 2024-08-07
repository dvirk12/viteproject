import React, { useState } from 'react';
import { Button } from '@material-tailwind/react';

function Comment() {
  const [comment, setComment] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    // Handle comment submission logic here
    console.log('Comment:', comment);
    console.log('File:', file);
    // Clear fields after submission
    setComment('');
    setFile(null);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Add a Comment</h2>
      <textarea
        className="w-full h-32 p-2 border border-gray-300 rounded-md mb-4"
        placeholder="Write your comment here..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Attach a file (optional):</label>
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:border-gray-300 file:rounded-md file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
        />
      </div>
      <Button
        className="w-full bg-blue-500 text-white hover:bg-blue-600"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </div>
  );
}

export default Comment;
