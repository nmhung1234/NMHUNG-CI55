import './screen/register-screen.js';
import './component/input-wraper.js';
import './screen/login-screen.js';
import './screen/wellcome.js';

// redirect('register');
export function redirect(screenName) {
    if(screenName === 'login'){
        document.querySelector('#app').innerHTML = `<login-screen></login-screen>`;
    }else if(screenName === 'register'){
        document.querySelector('#app').innerHTML = `<register-screen></register-screen>`;
    }else if (screenName === 'wellcome'){
        document.querySelector('#app').innerHTML = `<wellcome-screen></wellcome-screen>`;
    }
}
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log(user)
        const user1 = {
            email: user.email,
            displayname: user.displayName,
            id: user.uid
        }
        // luu vao bien global
        window.currentUser = user1;

      redirect('wellcome');
    } else {
      redirect('login');
    }
  });