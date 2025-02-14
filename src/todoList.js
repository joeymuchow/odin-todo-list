// Application logic
class Dashboard {
    static projects = [];

    addProject() {
        // add project to projects
    }

    deleteProject() {
        // delete project from projects array
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

    addTodo() {
        // instantiate new todo list item
        // add it to todo list
    }

    deleteToDo() {
        // delete the to do item from todoList
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

    updateCompleteStatus() {
        // swap between true and false
    }
}

export { Dashboard, Project, TodoItem }