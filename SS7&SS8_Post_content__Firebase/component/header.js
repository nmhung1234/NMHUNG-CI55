const style = `<style>
*{
    box-sizing: border-box;
    padding:0;
    margin: 0;
}
.header{
    display: flex;
    justify-content: space-between;
    background-color: rgb(10, 113, 253);
    height: 64px;
    padding: 0 50px;
    align-items: center;
    color: white;
}
.header__right{
    display: flex;
}
.header__right .avatar{
    padding: 0 20px;
}
</style>`
class header extends HTMLElement{
    constructor() {
        super();
        this._shadowDOM = this.attachShadow({mode: 'open'});
        this._shadowDOM.innerHTML = `
        ${style}
        <div class="header">
        <div>Logo</div>
        <div class="header__right">
            <div class="avatar">avatar</div>
            <div class="logout">logout</div>
        </div>
    </div>`
    }
}
window.customElements.define('story-header', header);