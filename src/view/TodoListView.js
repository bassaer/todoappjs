import { TodoItemView } from "./TodoItemView.js";
import { element } from "./util.js";

export class TodoListView {
    create(items, { onUpdate, onDelete }) {
        const todoListElement = element `<ul/>`;
        items.forEach(item => {
            const itemView = new TodoItemView();
            const itemElement = itemView.create(item, {
                onDelete,
                onUpdate
            });
            todoListElement.appendChild(itemElement);


        });
        return todoListElement;
    }
}