import '../screen/login-screen.js';

const style = ` <style>
input{
    padding:10px;
    margin: 15px 0 5px 0;
    border-radius: 5px;
    border: none;
    outline: none;
}
p{
    padding: 0 10px;
    font-size: 14px;
}

</style>`;

class input extends HTMLElement {
    constructor() {
        super();
        this._shadowDOM = this.attachShadow({ mode: 'open' });
        this._placeholder = this.getAttribute('placeholder');
        this._type = this.getAttribute('type');
        this._shadowDOM.innerHTML = `
        ${style}
            <div>
                <input type="${this._type}" placeholder="${this._placeholder}" name="name" id="name">
                <p class="error"></p>
            </div>
        `;
    }

    get value() {
        return this._shadowDOM.querySelector('input').value
    }

    set value(value) {
        return this._shadowDOM.querySelector('input').value = value;
    }

    static get observedAttributes() {
        return ['err']
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name == 'err') {
            this._shadowDOM.querySelector('.error').innerText = newValue;
        }
    }
}
window.customElements.define('input-wrap', input)