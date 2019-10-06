import { EventEmitter } from '../EventEmitter.js';

export class TodoListModel extends EventEmitter {
    constructor(items = []) {
        super();
        this.items = items;
    }

    getTotalCount() {
        return this.items.length;
    }

    getTodoItems() {
        return this.items;
    }

    onChange(listener) {
        this.addEventListener("change", listener);
    }

    emitChange() {
        this.emit("change");
    }

    add(todoItem) {
        this.items.push(todoItem);
        this.emitChange();
    }

    update({ id, completed }) {
        const todoItem = this.items.find(todo => todo.id === id);
        if (!todoItem) {
            return;
        }
        todoItem.completed = completed;
        this.emitChange();
    }

    delete({ id }) {
        this.items = this.items.filter(todo => {
            return todo.id !== id;
        });
        this.emitChange();
    }
}