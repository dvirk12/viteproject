const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.post('/api/test-code', (req, res) => {
  const { projectName, baseUrl, commands } = req.body;

  if (!projectName || !baseUrl || !commands) {
    return res.status(400).json({ error: 'Invalid input data.' });
  }

  const parsedCommands = JSON.parse(commands);
  const cypressCommands = parsedCommands.map(cmd => {
    return `cy.${cmd.command}('${cmd.target}', '${cmd.value}')`;
  }).join('\n');

  const cypressTest = `
    describe('${projectName}', () => {
      it('should run the recorded commands', () => {
        cy.visit('${baseUrl}');
        ${cypressCommands}
      });
    });
  `;

  // Write Cypress test to a file
  const testFilePath = path.join(__dirname, 'tests', `${projectName}.spec.js`);
  fs.writeFileSync(testFilePath, cypressTest);

  // Run Cypress test
  exec(`npx cypress run --spec ${testFilePath}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing Cypress: ${error.message}`);
      return res.status(500).json({ error: 'Error running Cypress tests.' });
    }

    res.json({ output: stdout });
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
