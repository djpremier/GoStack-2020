import { Router } from 'express';
import { v4 as uuid } from 'uuid';

const appointmentsRouter = Router();

const appointments = [];

appointmentsRouter.get('/', (req, res) => {
  //TODO
});

appointmentsRouter.post('/', (req, res) => {
  const { provider, date } = req.body;

  const appointment = {
    id: uuid(),
    provider,
    date,
  };

  appointments.push(appointment);

  return res.json(appointment);
});

export default appointmentsRouter;
