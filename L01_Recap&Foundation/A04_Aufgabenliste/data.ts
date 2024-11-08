namespace aufgabenlisteSpeicher {
export interface Task {
taskInput: string;
timeInput: string;
dateInput: Date; 
commentsInput: string;
checkInput: boolean;
checkTask: boolean;
}
   export let savedTasks: Task[] = [
    {
    taskInput: "Bad Aufräumen",
    timeInput: "23:04",
    dateInput: "08-11-2024",
    commentsInput: "",
    checkInput: true,
    checkTask: false
    }
   ];

   export let savedTaskTitle: string = "";





} 