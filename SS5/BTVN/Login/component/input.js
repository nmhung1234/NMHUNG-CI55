const style = `input{padding:15px 25px;text-align: center; border-radius:20px; outline: none; margin: 10px; border: none; width: 100px;background-color:#e9e65c; transition:  all 1s;}
input:focus, input:hover{padding:15px 25px; text-align: center; border-radius:10px; outline: none; margin: 10px; border: none; width: 200px; background-color:#fed330; transition: all 1s;}
`
class inputWraper extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this.type = this.getAttribute('type');
        this.placeholder = this.getAttribute('placeholder');
        this._shadowRoot.innerHTML = `
        <style>
            ${style}
        </style>
            <input type="${this.type}" placeholder="${this.placeholder}">
        `
    }
    get value() {
        return this._shadowRoot.querySelector('input').value;
    }
    set value(value) {
        return this._shadowRoot.querySelector('input').value = value;
    }

}
window.customElements.define('input-wraper', inputWraper);