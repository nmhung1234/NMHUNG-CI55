class inputWraper extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this.type = this.getAttribute('type');
        this.placeholder = this.getAttribute('placeholder');
        this._shadowRoot.innerHTML = `
        <div><input type="${this.type}" placeholder="${this.placeholder}" name="" id="">
                <div class="error">Lỗi sẽ hiện ở đây</div>
            </div>
        `
    }
    // cách truyền thống lấy value
    // getValue() {
    //     return this._shadowRoot.querySelector('input').value;
    // }

    // cách hiện đại hơn getter, setter
    get value() {
        return this._shadowRoot.querySelector('input').value;
    }

    set value(value) {
        return this._shadowRoot.querySelector('input').value = value;
    }
}
window.customElements.define('input-wraper', inputWraper);