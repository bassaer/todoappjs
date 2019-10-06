import { element, render } from "./view/util.js";
import { TodoItemModel } from "./model/TodoItemModel.js";
import { TodoListModel } from "./model/TodoListModel.js";
import { TodoListView } from "./view/TodoListView.js";

export class App {
    constructor() {
        this.todoListModel = new TodoListModel();
        this.todoListView = new TodoListView();
    }
    add(title) {
        this.todoListModel.add(new TodoItemModel({
            title,
            completed: false
        }));
    }

    update({ id, completed }) {
        this.todoListModel.update({ id, completed });
    }

    delete({ id }) {
        this.todoListModel.delete({ id });
    }

    mount() {
        const formElement = document.querySelector("#js-form");
        const inputElement = document.querySelector("#js-form-input");
        const containerElement = document.querySelector("#js-todo-list");
        const counterElement = document.querySelector("#js-todo-count");
        this.todoListModel.onChange(() => {
            const todoItems = this.todoListModel.getTodoItems();
            const todoListElement = this.todoListView.create(todoItems, {
                onUpdate: ({ id, completed }) => {
                    this.update({ id, completed });
                },
                onDelete: ({ id }) => {
                    this.delete({ id });
                }
            });
            render(todoListElement, containerElement);
            counterElement.textContent = `TODO items : ${this.todoListModel.getTotalCount()}`;
        });
        formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            this.add(inputElement.value);
            inputElement.value = "";
        });
    }
}