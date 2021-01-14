class inputWraper extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this.type = this.getAttribute('type');
        this.placeholder = this.getAttribute('placeholder');
        this.err = this.getAttribute('err');
        console.log(this.err);
        this._shadowRoot.innerHTML = `
        <div><input type="${this.type}" placeholder="${this.placeholder}" name="" id="">
                <div class="error">Lỗi sẽ hiện ở đây</div>
            </div>
        `
    }

    // đăng ký lắng nghe thay đổi những atribute nào
    static get observedAttributes(){
        return ['err']
    }

    // se duoi goi khi attribute thay doi
    attributeChangedCallback(name, oldvalue, newvalue) {
        if(name === 'err'){
            this._shadowRoot.querySelector('.error').innerText = newvalue;
        }
        console.log(name);
        console.log(oldvalue);
        console.log(newvalue);
    }


    // cách hiện đại hơn getter, setter
    get value() {
        return this._shadowRoot.querySelector('input').value;
    }

    set value(value) {
        return this._shadowRoot.querySelector('input').value = value;
    }
}
window.customElements.define('input-wraper', inputWraper);