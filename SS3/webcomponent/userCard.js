class UserCard extends HTMLElement {
    constructor() {
            super()
            this._shadowDom = this.attachShadow({ mode: 'open' });
            this.name = this.getAttribute('name');
            this._shadowDom.innerHTML = `
        <div style="border: 3px solid rgb(63, 192, 252); height: 400px; width:300px; overflow: hidden; border-radius: 10px;">
        <div><img style="width: 500px; height: 200px;" src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg" alt=""></div>
        <div>
            <p style="padding: 10px 0 10px 20px; font-weight: 600;">${this.name}</p>
            <p style="padding: 0px 20px; text-align: justify;">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta et tenetur quos, vero recusandae, hic repudiandae adipisci illum harum voluptas repellat magni? Modi pariatur alias est qui quia dicta ab.</p>
        </div>
    </div>
        `;

        }
        //khi ma component duoc attack vao DOM thì function duoc goi
    // connectedCallback() {
    //     console.log('abc');
    // }

}

window.customElements.define('user-card', UserCard);