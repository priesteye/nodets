export default class Reminder {
  id: string;
  isComplete: boolean;

  constructor(public title: string, public message: string) {
    this.id = (Math.floor(Math.random() * Date.now()) + 1).toString();
    this.isComplete = false;
  }
}
