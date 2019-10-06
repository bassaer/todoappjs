import { element } from "./view/util.js";

export class App {
    mount() {
        const formElement = document.querySelector("#js-form");
        const inputElement = document.querySelector("#js-form-input");
        const containerElement = document.querySelector("#js-todo-list");
        const counterElement = document.querySelector("#js-todo-count");
        let counter = 0;
        formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            const itemElement = element `<li>${inputElement.value}</li>`;
            containerElement.appendChild(itemElement);
            counter++;
            counterElement.textContent = `TODO items : ${counter}`;
            inputElement.value = '';
        });
    }
}