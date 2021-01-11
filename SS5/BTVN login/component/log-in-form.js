const style = `*{box-sizing: border-box; padding: 0; margin: 0;}
.container {
    width: 40%;
    max-width: 338px;
    min-width: 250px;
    background-color: #fd9644;
    position: absolute;
    top: 50%;
    left: 51%;
    transform: translate(-50%, -50%);
    padding: 70px;
    border-radius: 20px;
   
}
#login-form{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
h2{padding-bottom: 50px; font-size: 40px; color: white;}
button{color:white; font-size:18px; padding:15px 25px; border-radius:20px; outline: none; margin: 10px; border: none; background-color: chocolate; cursor: pointer;}
button:active{background-color: chartreuse;}`

class login extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.innerHTML = `
    <style>
        ${style}
    </style>
    <div class="container">
        <form id="login-form">
            <h2>Wellcome!</h2>
            <input-wraper type="email" placeholder="Email" id="email"></input-wraper>
            <input-wraper type="password" placeholder="Password" id="password"></input-wraper>
            <button>Login</button>
        </form>
        <a href="../BTVN/index.html" target="_blank">Don't have Acount? Register</a>
    </div>
    `

        // console.log(this._shadowRoot.getElementById('name').value());
        this._shadowRoot.getElementById('login-form').addEventListener('submit', (e) => {
            e.preventDefault();
            console.log('submit');
            const email = this._shadowRoot.getElementById('email').value;
            const password = this._shadowRoot.getElementById('password').value;
            
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then(res => {
                alert(`Bạn đã đăng nhập thành công với tài khoản ${res.user.email}`);
                this.shadowDom.getElementById('email').value = '';
                this.shadowDom.getElementById('password').value = '';
            })
            .catch(err => {
                alert(err.message);
            })
        }
        )
    }
}
window.customElements.define('login-form', login);