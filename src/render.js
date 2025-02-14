// DOM
// dashboard to display projects
// one project can be expanded to show full todo list and other info
// opening another project will close the already opened one
// create new projects
// delete a project

// DOM logic goes here


const createDashboard = () => {
    // create dashboard html
    const body = document.querySelector("body");

    const title = document.createElement("h1");
    title.textContent = "Todo Projects";

    const content = document.createElement("div");
    content.id = "content";

    const navigation = document.createElement("nav");

    const container = document.createElement("div");
    container.classList.add("projects-container");

    content.append(navigation, container);

    body.append(title, content);
}


// attach to event listeners
const expandProjectElement = () => {
    // close any other open projects

    // expand a project to show all todo items
}

const deleteProjectElement = () => {
    // delete a project
}

const createProjectElement = (project) => {
    // create a project
    const projectContainer = document.createElement("div");
    projectContainer.classList.add("project");

    const name = document.createElement("h3");
    name.textContent = project.name;

    const dueDate = document.createElement("p");
    dueDate.textContent = project.dueDate;

    const todoList = document.createElement("ul");
    for (const todoItem of project.todoList) {
        const li = document.createElement("li");

        const name = document.createElement("p");
        name.textContent = todoItem.name;

        const desc = document.createElement("p");
        desc.textContent = todoItem.description;

        li.append(name, desc);
        todoList.append(li);
    }

    projectContainer.append(name, dueDate, todoList);
}

const editProjectElement = () => {
    // edit a project
}

export { createDashboard, expandProjectElement, deleteProjectElement, createProjectElement, editProjectElement }