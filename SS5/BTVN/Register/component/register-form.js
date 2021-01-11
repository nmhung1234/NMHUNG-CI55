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
#register-form{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
h2{padding-bottom: 50px; font-size: 40px; color: white;}
button{color:white; font-size:18px; padding:15px 25px; border-radius:20px; outline: none; margin: 10px; border: none; background-color: chocolate; cursor: pointer;}
button:active{background-color: chartreuse;}`

class register extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.innerHTML = `
    <style>
        ${style}
    </style>
    <div class="container">
        <form id="register-form">
            <h2>Wellcome!</h2>
            <input-wraper type="text" placeholder="Full Name.." id="name"></input-wraper>
            <input-wraper type="email" placeholder="Email" id="email"></input-wraper>
            <input-wraper type="password" placeholder="Password" id="password"></input-wraper>
            <input-wraper type="password" placeholder="Confirm Password" id="cfpassword"></input-wraper>
            <button>Register</button>
        </form>
    </div>
    `

        // console.log(this._shadowRoot.getElementById('name').value());
        this._shadowRoot.getElementById('register-form').addEventListener('submit', (e) => {
            e.preventDefault();
            console.log('submit');
            console.log(this._shadowRoot.getElementById('name').value);
            const email = this._shadowRoot.getElementById('email').value;
            const password = this._shadowRoot.getElementById('password').value;
            const cfpassword = this._shadowRoot.getElementById('cfpassword').value;
            if (email == '' || password == '') {
                alert('Please enter value');
                console.log("Don't send");
            } else if(password !== cfpassword) {
                alert("Password don't match");
                console.log("Don't send");
            }else {
                console.log(email);
                console.log(password);
                firebase.auth().createUserWithEmailAndPassword(email, password);
                console.log("Done");
                alert("Đăng kí thành công");
            }

        })
    }


}
window.customElements.define('register-form', register);