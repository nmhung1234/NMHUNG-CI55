import '../component/input.js';
import { redirect } from '../index.js';

const style = `<style>
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.container{
    width: fit-content;
    background-color: aquamarine;
    padding: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
form{
    display: flex;
    justify-content: center;
    flex-direction: column;
}
button{
    padding: 10px;
    margin: 30px;
    border: 0;
    outline: none;
    border-radius:5px;
    background-color: rgb(255, 255, 255);
}
button:hover{
    background-color:orange;
}
.register:hover{
    cursor: pointer;
    color: brown;
}

</style>`;

class login extends HTMLElement {
    constructor() {
        super();
        this._shadowDOM = this.attachShadow({ mode: 'open' });
        this._shadowDOM.innerHTML = `
        ${style}
        <div class="container">
        <form action="#">

            <input-wrap type="email" placeholder="Enter Your  Email" id="email"></input-wrap>
            
            <input-wrap type="password" err="" placeholder="Password" id="pass"></input-wrap>
            
            <button class="login">LOGIN</button>

            <p class="register">Don't have Acount? Register Now</p>
        </form>
    </div>
        `
        this._shadowDOM.querySelector('.register').addEventListener('click', () => {
            redirect('register');
        })

        this._shadowDOM.querySelector('.login').addEventListener('click', () => {
            const email = this._shadowDOM.querySelector('#email').value;
            const pass = this._shadowDOM.querySelector('#pass').value;

            firebase.auth().signInWithEmailAndPassword(email, pass)
                .then((res) => {
                    alert(`Đăng  nhập thành công với tài khoản ${email}`);

                    redirect('home');
                })
                .catch((err) => {
                    alert(`Đăng nhập thất bại
            ${err}`)
                })
        })

    }


}
window.customElements.define('login-screen', login);