class wellcome extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.innerHTML = `<h1>Wellcome ${currentUser.displayname}</h1>`
    }
}
window.customElements.define('wellcome-screen', wellcome);