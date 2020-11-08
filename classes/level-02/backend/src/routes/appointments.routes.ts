import { Router } from 'express';
import { v4 as uuid } from 'uuid';
import { startOfHour, parseISO, isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

const appointmentsRouter = Router();

const appointments: Appointment[] = [];

appointmentsRouter.get('/', (req, res) => {
  // TODO
});

appointmentsRouter.post('/', (req, res) => {
  const { provider, date } = req.body;

  const parsedDate = startOfHour(parseISO(date));
  const findAppointmentInSameDate = appointments.find(appointment =>
    isEqual(parsedDate, appointment.date),
  );

  if (findAppointmentInSameDate) {
    return res
      .status(400)
      .json({ error: 'This appointment is already booked' });
  }

  const appointment = new Appointment(provider, parsedDate);

  appointments.push(appointment);

  return res.json(appointment);
});

export default appointmentsRouter;
