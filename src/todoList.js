// Application logic
class Dashboard {
    static projects = [];

    addProject(project) {
        projects.push(project);
    }

    deleteProject(index) {
        projects.splice(index, 1);
    }
}

// project
// name (string)
// due date (string)
// todo list (array)
// add a todo list item (method)
// delete a todo list item (method)

class Project {
    constructor(name, dueDate) {
        this.name = name;
        this.dueDate = dueDate;
        this.todoList = [];
    }

    get name() {
        return this.name;
    }

    set name(value) {
        this.name = value;
    }

    get dueDate() {
        return this.dueDate;
    }

    set dueDate(date) {
        this.dueDate = date;
    }

    addTodo(todoItem) {
        this.todoList.push(todoItem);
    }

    deleteToDo(index) {
        this.todoList.splice(index, 1);
    }
}

// todo list item
// name (string)
// description (string)
// due date (string)
// priority (number? or string?)
// notes (string)
// complete (boolean)
// update todo list item completion (method) changing between true/false

class TodoItem {
    constructor(name, description, dueDate, priority, notes, complete) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.complete = complete;
    }

    get name() {
        return this.name;
    }

    set name(value) {
        this.name = value;
    }

    get description() {
        return this.description;
    }

    set description(desc) {
        this.description = desc;
    }

    get dueDate() {
        return this.dueDate
    }

    set dueDate(date) {
        this.dueDate = date;
    }

    get priority() {
        return this.priority;
    }

    set priority(value) {
        this.priority = value;
    }

    get notes() {
        return this.notes;
    }

    set notes(value) {
        this.notes = value;
    }

    get complete() {
        return this.complete;
    }

    updateCompleteStatus() {
        this.complete = !this.complete;
    }
}

export { Dashboard, Project, TodoItem }