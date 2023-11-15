/**
 * Filename: complexCode.js
 * Description: This code demonstrates a complex implementation of a task management system.
 */

class Task {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.completed = false;
    this.createdAt = new Date();
  }

  complete() {
    this.completed = true;
  }
}

class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(title, description) {
    const newTask = new Task(title, description);
    this.tasks.push(newTask);
  }

  getTask(title) {
    return this.tasks.find(task => task.title === title);
  }

  deleteTask(title) {
    const index = this.tasks.findIndex(task => task.title === title);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  completeTask(title) {
    const task = this.getTask(title);
    if (task) {
      task.complete();
    }
  }

  getCompletedTasks() {
    return this.tasks.filter(task => task.completed);
  }

  getPendingTasks() {
    return this.tasks.filter(task => !task.completed);
  }

  getTasksByCreationDate() {
    return [...this.tasks].sort((a, b) => a.createdAt - b.createdAt);
  }
}

// Usage example:
const taskManager = new TaskManager();

taskManager.addTask("Implement login feature", "Login functionality using encrypted passwords");
taskManager.addTask("Design homepage UI", "Responsive design, modern look and feel");
taskManager.addTask("Write API documentation", "Detailed documentation for all endpoints");

taskManager.completeTask("Implement login feature");

console.log(taskManager.getTasksByCreationDate());
console.log(taskManager.getCompletedTasks());
console.log(taskManager.getPendingTasks());
console.log(taskManager.getTask("Design homepage UI"));

taskManager.deleteTask("Implement login feature");

console.log(taskManager.getTask("Implement login feature"));