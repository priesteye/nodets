import {Request, Response} from "express";
import {createReminder, getReminders} from "../services/reminder.service";
import CreateReminderDto from "../dtos/create-reminder";
import UpdateReminderDto from "../dtos/update-reminder";

export const getRemindersHandler = (req: Request, res: Response) => {
    console.log('List of reminders');

    try {
        const reminders = getReminders();
        console.log(reminders)
        return res.status(200).json({data: reminders})
    } catch (e: any) {
        console.log(e.message)
        return res.status(500).send(e.message)
    }

}

export const createReminderHandler = (req: Request, res: Response) => {
    try {
        // const { title } = req.body as CreateReminderDto;
        const { title, message } = <CreateReminderDto>req.body;

        // validation
        if (!title || !message) {
            res.status(400).send({
                details: 'Invalid request: No title or message property',
            });
            return;
        }

        const reminder = createReminder({title, message})
        console.log(JSON.stringify(reminder));

        res.status(201).json({data: reminder});
    } catch (e: any) {
        console.log(e.message)
        return res.status(409).send(e.message)
    }
}

export const updateReminderHandler = (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, message } = req.body as UpdateReminderDto;
}

export const deleteReminderHandler = (req: Request, res: Response) => {
    const { id } = req.params;
    if (!id) {
        res.status(400).send({
            details: 'Invalid request: No id in url',
        });
        return;
    }
    // @ts-ignore
    remindersRouteDatabase = remindersRouteDatabase.filter((reminder) => reminder.id !== id);

    //res.json(remindersRouteDatabase);
}