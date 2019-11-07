import { config } from "@fortawesome/fontawesome-svg-core";

export const LoginRegService = {
    login,
    logout,
};

function login(Email,Password){
    const requestEntity = {
        method :'POST',
        body: JSON.stringify({Email,Password}),
        mode: 'cors'
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
    localStorage.removeItem('user');
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