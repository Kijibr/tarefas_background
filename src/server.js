import 'dotenv/config';
import express from 'express';
import BullBoard from 'bull-board';

import UserController from './app/controllers/UserController';


const app = express();
BullBoard.setQueues(Queue.queues.map(queue => queue.bull));

app.use(express.json()) //pro server aceitar requisições json

app.post('/users', UserController.store)

app.use('/admin/queues', BullBoard.UI);

app.listen(process.env.PORT, () => {
  console.log(`Server running on the ${process.env.PORT}`)
});