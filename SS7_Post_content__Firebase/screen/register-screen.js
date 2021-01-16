import '../component/input.js';
import { redirect } from '../index.js';
import { validateEmail} from '../component/utils.js';

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

class register extends HTMLElement {
    constructor() {
        super();
        this._shadowDOM = this.attachShadow({ mode: 'open' });
        this._shadowDOM.innerHTML = `
        ${style}
        <div class="container">
        <form action="#">

            <input-wrap type="text" err="" placeholder="Full name" id="name" name=""></input-wrap>

            <input-wrap type="email" err="" placeholder="Enter Your  Email" id="email" name=""></input-wrap>
            
            <input-wrap type="password err=""" placeholder="Password" id="pass" name=""></input-wrap>
    
            <input-wrap type="password" err="" placeholder="Confirm Password" id="cfpass" name=""></input-wrap> 
            
            <button class='btn'>Register</button>
        </form>
    </div>
        `

        this._shadowDOM.querySelector('.btn').addEventListener('click', (e) => {
            e.preventDefault();
            const name = this._shadowDOM.querySelector('#name').value;
            const email = this._shadowDOM.querySelector('#email').value;
            const password = this._shadowDOM.querySelector('#pass').value;
            const cfpassword = this._shadowDOM.querySelector('#cfpass').value;
            const regexemail = validateEmail(email);

            const authen = true;
            if (authen) {
                if (name.trim() == '') {
                    this._shadowDOM.querySelector('#name').setAttribute('err', 'Vui lòng nhập tên');
                    authen = false;
                }
                else if (email.trim() == '' || regexemail == false) {
                    this._shadowDOM.querySelector('#email').setAttribute('err', 'Vui lòng nhập Email chính xác');
                    authen = false;
                }
                else if (password.trim() == '') {
                    this._shadowDOM.querySelector('#pass').setAttribute('err', 'Vui lòng nhập Password');
                    authen = false;
                }
                else if (password.trim() !== cfpassword.trim()) {
                    this._shadowDOM.querySelector('#cfpass').setAttribute('err', 'Password không khớp');
                    authen = false;
                }
            }
            if (authen == true) {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then((res) => {

                        alert(`Đăng ký thành công: ${res.displayname = name}`);
                        firebase.auth().currentUser.sendEmailVerification();
                        firebase.auth().currentUser.updateProfile({
                            displayName: name,
                        });
                        redirect('home');
                    })
                    .catch((err) => {
                        alert(`Lỗi đăng kí. Vui lòng thử lại
                        ${err}`)
                    })
            }
        })


    }
}
window.customElements.define('register-screen', register);