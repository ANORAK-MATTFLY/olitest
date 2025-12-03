import { Router, Request, Response } from 'express';

const itemsRouter = Router();

/**
 * @route POST /
 * @description Create a new item
 * @access Public
 */
itemsRouter.post('/', (req: Request, res: Response) => {
  const newItem = req.body; // Assuming the item data is in the request body
  console.log('Received new item:', newItem);
  // In a real application, you would typically save this to a database
  // and assign an ID, then return the saved item.
  // For now, we'll simulate a successful creation.
  res.status(201).json({ message: 'Item created successfully', item: { id: Date.now(), ...newItem } });
});

/**
 * @route GET /
 * @description Get all items (example route)
 * @access Public
 */
itemsRouter.get('/', (req: Request, res: Response) => {
  res.status(200).json([{ id: 1, name: 'Sample Item 1' }, { id: 2, name: 'Sample Item 2' }]);
});

export default itemsRouter;
