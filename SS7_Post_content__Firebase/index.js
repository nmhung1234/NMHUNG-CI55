import './screen/login-screen.js';
import './screen/register-screen.js';
import './screen/home-screen.js';
import './component/header.js';
import './component/createPost.js';

export function redirect(screen){
    if(screen == 'register'){
        document.querySelector('.app').innerHTML = '<register-screen></register-screen>'
    }
    if(screen == 'login'){
        document.querySelector('.app').innerHTML = '<login-screen></login-screen>'
    }
    if(screen == 'home'){
        document.querySelector('.app').innerHTML = '<home-screen></home-screen>'
    }
}

firebase.auth().onAuthStateChanged((user) => {
    console.log(user);
    if(user){
        const userShow =  {
            email: user.email,
            displayname: user.displayName,
            id: user.uid
        }
        window.currentUser = userShow;
        redirect('home');
    } else {
        redirect('login');
    }
   
})
