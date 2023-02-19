import Reminder from "../models/reminders";
import CreateReminderDto from "../dtos/create-reminder";
import UpdateReminderDto from "../dtos/update-reminder";

const remindersModel: Reminder[] = []

export const createReminder = ({title, message}: CreateReminderDto) => {
    try {
        const reminder = new Reminder(title, message)
        remindersModel.push(reminder)
        return reminder
    } catch (e) {
        throw new Error("Database Reminder creation not successful")
    }
}

export const getReminders = () => {
    try {
        return remindersModel
    } catch (e) {
        throw new Error("Database Reminders retrieval errors")
    }
}



export const updateReminder = (id: string, {title, message}: UpdateReminderDto) => {
    try {

    } catch (e) {
        throw new Error("Database Reminder updating errors")
    }
}


export const deleteReminder = (id: string) => {
    try {

    } catch (e) {
        throw new Error("Database Reminder deleting errors")
    }
}