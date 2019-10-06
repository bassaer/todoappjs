import { element } from "./util.js";

export class TodoItemView {
    create(item, { onUpdate, onDelete }) {
        const itemElement = this.createBase(item);
        const inputCheckboxElement = itemElement.querySelector(".checkbox");
        inputCheckboxElement.addEventListener("change", () => {
            onUpdate({
                id: item.id,
                completed: !item.completed
            });
        });
        const deleteButtonElement = itemElement.querySelector(".delete");
        deleteButtonElement.addEventListener("click", () => {
            onDelete({
                id: item.id
            });
        });
        return itemElement;
    }

    createBase(item) {
        if (item.completed) {
            return element `
            <li>
            <input type="checkbox" class="checkbox" checked>
            <s>${item.title}</s>
            <button class="delete">x</button>
            </input>
            </li>`;
        } else {
            return element `
            <li>
            <input type="checkbox" class="checkbox">
            ${item.title}
            <button class="delete">x</button>
            </input>
            </li>
            `;
        }
    }
}