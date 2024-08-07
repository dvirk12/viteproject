import React, { useState, useEffect } from 'react';

function Nopage() {
  const [projectName, setProjectName] = useState('');
  const [baseUrl, setBaseUrl] = useState('');
  const [file, setFile] = useState(null);
  const [recording, setRecording] = useState(false);
  const [commands, setCommands] = useState([]);
  const [results, setResults] = useState(null);
  const [log, setLog] = useState([]);
  const [newCommand, setNewCommand] = useState('');

  useEffect(() => {
    const handleEvent = (event) => {
      if (recording) {
        const { type, target } = event;
        const command = {
          command: type,
          target: target.tagName + (target.id ? `#${target.id}` : ''),
          value: target.value || '',
          description: '',
        };
        setCommands(prevCommands => [command, ...prevCommands]); // Add new command at the top
        setLog(prevLog => [...prevLog, `Recorded event: ${type}, target: ${command.target}, value: ${command.value}`]);
      }
    };

    document.addEventListener('click', handleEvent);
    document.addEventListener('input', handleEvent);

    return () => {
      document.removeEventListener('click', handleEvent);
      document.removeEventListener('input', handleEvent);
    };
  }, [recording]);

  const handleProjectCreation = () => {
    if ((projectName && baseUrl) || file) {
      setRecording(true);
      setLog([...log, 'Recording started. Perform actions on your application.']);
    } else {
      setLog([...log, 'Error: Please enter a project name and base URL or upload a file.']);
    }
  };

  const handleCommandChange = (index, field, value) => {
    const newCommands = [...commands];
    newCommands[index][field] = value;
    setCommands(newCommands);
    setLog([...log, `Updated command at index ${index}: ${field} set to ${value}`]);
  };

  const handleAddCommand = () => {
    if (newCommand) {
      const command = {
        command: newCommand,
        target: '', // You can add more fields if needed
        value: '',
        description: '',
      };
      setCommands(prevCommands => [command, ...prevCommands]); // Add new command at the top
      setLog([...log, `Added command: ${newCommand}`]);
      setNewCommand('');
    } else {
      setLog([...log, 'Error: Command cannot be empty.']);
    }
  };

  const handleSubmit = async () => {
    if (commands.length === 0) {
      setLog([...log, 'Error: Please record some commands.']);
      return;
    }

    const formData = new FormData();
    formData.append('projectName', projectName);
    formData.append('baseUrl', baseUrl);
    formData.append('commands', JSON.stringify(commands));

    if (file) {
      formData.append('file', file);
    }

    try {
      const response = await fetch('/api/test-code', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (result.error) {
        setLog([...log, `Test failed: ${result.error}`]);
      } else {
        setResults(result);
        setLog([...log, 'Test completed successfully.']);
      }
    } catch (error) {
      setLog([...log, `Error testing code: ${error.message}`]);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="p-6">
      {!recording ? (
        <>
          <h1 className="text-2xl font-bold mb-4">Create New Project</h1>
          <input
            type="text"
            placeholder="Project Name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="border p-2 mb-4"
            disabled={file}
          />
          <input
            type="text"
            placeholder="Base URL"
            value={baseUrl}
            onChange={(e) => setBaseUrl(e.target.value)}
            className="border p-2 mb-4"
            disabled={file}
          />
          <p className="mb-4">or</p>
          <input
            type="file"
            onChange={handleFileChange}
            className="mb-4"
            disabled={projectName || baseUrl}
          />
          <button onClick={handleProjectCreation} className="bg-blue-500 text-white px-4 py-2 rounded">Create Project & Start Recording</button>
        </>
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-4">Recording Interactions</h1>
          <div>
            {commands.map((command, index) => (
              <div key={index} className="mb-2">
                <input
                  type="text"
                  placeholder="Command"
                  value={command.command}
                  onChange={(e) => handleCommandChange(index, 'command', e.target.value)}
                  className="border p-2 mr-2"
                />
                <input
                  type="text"
                  placeholder="Target"
                  value={command.target}
                  onChange={(e) => handleCommandChange(index, 'target', e.target.value)}
                  className="border p-2 mr-2"
                />
                <input
                  type="text"
                  placeholder="Value"
                  value={command.value}
                  onChange={(e) => handleCommandChange(index, 'value', e.target.value)}
                  className="border p-2 mr-2"
                />
                <input
                  type="text"
                  placeholder="Description"
                  value={command.description}
                  onChange={(e) => handleCommandChange(index, 'description', e.target.value)}
                  className="border p-2"
                />
              </div>
            ))}
          </div>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Enter command"
              value={newCommand}
              onChange={(e) => setNewCommand(e.target.value)}
              className="border p-2 mr-2 highlight-input"
            />
            <button onClick={handleAddCommand} className="bg-orange-500 text-white px-4 py-2 rounded">Add Command</button>
          </div>
          <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded mt-4">Run Current Test</button>
        </>
      )}

      {results && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Test Results</h2>
          <pre>{JSON.stringify(results, null, 2)}</pre>
        </div>
      )}

      {log.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Log</h2>
          <pre>{log.join('\n')}</pre>
        </div>
      )}
    </div>
  );
}

export default Nopage;
