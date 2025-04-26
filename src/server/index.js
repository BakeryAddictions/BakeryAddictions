const express = require('express');
const { exec } = require('child_process'); // Import child_process for executing Git commands

const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies

// Endpoint to commit and push changes to GitHub
app.post('/api/git-commit', (req, res) => {
  const { message } = req.body;

  // Run Git commands to commit and push changes
  exec('git add orders.json && git commit -m "' + message + '" && git push', (err, stdout, stderr) => {
    if (err) {
      console.error('Git error:', stderr);
      return res.status(500).json({ error: 'Failed to commit and push changes' });
    }
    res.status(200).json({ message: 'Changes committed and pushed successfully' });
  });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});