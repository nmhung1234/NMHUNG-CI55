
class home extends HTMLElement {
    constructor(){
        super();
        this._shadowDOM = this.attachShadow({mode: 'open'});
        this._shadowDOM.innerHTML = `<story-header></story-header>
                                    <create-post></create-post>
                                    <list-post></list-post>
        `;
    }
}
window.customElements.define('home-screen', home);