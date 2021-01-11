const style = `#register-form{
    text-align: center;
    margin: 0 auto;
    width:40%;
    background-color: bisque;
    height: 50vh;
    padding-top: 100px;
    font-size: 20px;
}`;
class registerScreen extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.innerHTML = `
        <style>
            ${style}
        </style>
        
        <div class="container">

        <form action="#" id="register-form">

            <div class="title">Share Story</div>

            <input-wraper id="name" type="text" placeholder="Full name"></input-wraper>

            <input-wraper id="email" type="email" placeholder="Email"></input-wraper>

            <input-wraper id="password" type="password" placeholder="Password"></input-wraper>

            <input-wraper id="repassword" type="password" placeholder="Confirm password"></input-wraper>

            <input type="submit" value="Register">

            <div id="redirect"> Alredy have an account? Login</div>
            
        </form>
    </div>`;
        this._shadowRoot.getElementById('register-form').addEventListener('submit', (e) => {
            e.preventDefault();
            console.log('submit');
            console.log(this._shadowRoot.getElementById('name').value);
            const email = this._shadowRoot.getElementById('email').value;
            const password = this._shadowRoot.getElementById('password').value;
            firebase.auth().createUserWithEmailAndPassword(email, password);
            alert('Đăng nhập thành công');
        })

    }
}
window.customElements.define('register-screen', registerScreen);