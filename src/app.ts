import express from 'express';
import itemsRouter from './routes/items'; // Import the new items router

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies from incoming requests
app.use(express.json());

// Mount the items router under the /api/items path
app.use('/api/items', itemsRouter);

// Basic root route for health check or general info
app.get('/', (req, res) => {
  res.send('Hello from the backend! API documentation coming soon.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
