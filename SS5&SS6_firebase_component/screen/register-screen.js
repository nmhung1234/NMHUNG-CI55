import { emailValid } from '../utils.js'
import {redirect} from '../index.js'

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

            <input-wraper id="name" err = "" type="text" placeholder="Full name"></input-wraper>

            <input-wraper id="email" err = "" type="email" placeholder="Email"></input-wraper>

            <input-wraper id="password" err = "" type="password" placeholder="Password"></input-wraper>

            <input-wraper id="repassword" err = "" type="password" placeholder="Confirm password"></input-wraper>

            <input type="submit" value="Register">

            <div id="redirect"> Alredy have an account? Login</div>
            
        </form>
    </div>`;
    this._shadowRoot.getElementById('redirect').addEventListener('click',() => {
        redirect('login');
    })
        this._shadowRoot.getElementById('register-form').addEventListener('submit', (e) => {
            e.preventDefault();
            console.log('submit');
            const name = this._shadowRoot.getElementById('name').value;
            const email = this._shadowRoot.getElementById('email').value;
            const password = this._shadowRoot.getElementById('password').value;
            const cfpassword = this._shadowRoot.getElementById('repassword').value;

            let authen = true;
           
            if (name.trim() === '') {
                // this._shadowRoot.getElementById('name').setErr("Please Input");
                this._shadowRoot.getElementById('name').setAttribute('err', 'Please enter full name');
                authen = false;
            } else {
                this._shadowRoot.getElementById('name').setAttribute('err', '');
            }

            if (email.trim() === '') {
                // this._shadowRoot.getElementById('name').setErr("Please Input");
                this._shadowRoot.getElementById('email').setAttribute('err', 'Please enter Email');
                authen = false;
            } else if (!emailValid(email)) {
                this._shadowRoot.getElementById('email').setAttribute('err', "Email does not valid");
                authen = false;
            } else {
                this._shadowRoot.getElementById('email').setAttribute('err', "");
            }

            if (password.trim() === '' || (password.trim() !== cfpassword.trim()) || cfpassword.trim() == '') {
                // this._shadowRoot.getElementById('name').setErr("Please Input");
                this._shadowRoot.getElementById('password').setAttribute('err', 'Password not match');
                authen = false;
            } else {
                this._shadowRoot.getElementById('password').setAttribute('err', "");
            }

            if (authen) {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((res) => {
                    alert('Đăng kí thành công');
                    firebase.auth().currentUser.sendEmailVerification();
                    firebase.auth().currentUser.updateProfile({
                        displayName: name
                    })
                    if(!res.user.emailVerification){
                        alert('Please verify email')
                        return
                    }
                })
                .catch((err) => {
                    alert(err);
                })
                
            }

        })

    }
}
window.customElements.define('register-screen', registerScreen);