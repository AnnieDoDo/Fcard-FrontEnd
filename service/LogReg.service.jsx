
export const LoginRegService = {
    login,
    logout,
    register,
};

function login(Email,Password){
    const requestEntity = {
        method :'POST',
        body: JSON.stringify({Email,Password}),
        mode: 'cors',
        credentials: 'include',
    }
    
    return fetch('http://127.0.0.1:3500/loginSubmit',requestEntity)
    .then(handleResponse)
    .then(user =>{
        console.log(user)
        if(user)
        {
            localStorage.setItem('user',user);
        }else{
            user = ''
        }
        return user;
    })
}

function logout() {
    const requestEntity = {
        method :'GET',
        mode: 'cors',
        credentials: 'include',
    }

    return fetch('http://127.0.0.1:3500/logout',requestEntity)
    .then(handleReg =>{
        console.log(handleReg)
        if(handleReg.text()=="logoutOK")
        {
            localStorage.removeItem('user');
            return handleReg.text()
        }
    })
}

function handleResponse(response){
    return response.text()
    .then(text => {
        console.log(text)
        if( (text=='Invalid password') || (text=='Unauthorized!') ){
            const error = String(text);
            return text;
        }else if(text=='logSubOK'){
            const islogin = String(text);
            return 'logSubOK';
        }
    });
}

function register(Email, Password){
    const requestEntity = {
        method :'POST',
        body: JSON.stringify({Email,Password}),
        mode: 'cors'
    }

    return fetch('http://127.0.0.1:3500/registerSubmit',requestEntity)
    .then(handleReg =>{
        return handleReg.text()
    })

}