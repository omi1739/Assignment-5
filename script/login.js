


const signInButton = document.getElementById('sign-in-button');
signInButton.addEventListener('click', () => {

    const userNameInput = document.getElementById('username');
    const userName = userNameInput.value;

    const passwordInput = document.getElementById('password');
    const password = passwordInput.value;
    
    if (userName == 'admin' && password == 'admin123'){
        alert('Sign In successful');
        window.location.assign('./home.html');
    }
    else{
        alert('Invalid username or password');
        return;
    }

    })