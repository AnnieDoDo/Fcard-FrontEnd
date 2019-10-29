export const LoginRegService = {
    login,
    logout,
};

function login(email,password){
    const requestEntity = {
        method :'POST',
        body: JSON.stringify({email,password})
    }
    
    return fetch('127.0.0.1:3500/loginSubmit',requestEntity)
    .then(handleResponse)
    .then(user =>{
        localStorage.setItem('user',JSON.stringify(user));
        return user
    })
}

function logout() {
    localStorage.removeItem('user');
}

function handleResponse(response){
    return response.text()
        .then(text => {
            if( (response.statusText=='Invalid password') || (response.statusText=='Unauthorized!') ){
                const error =response.statusText;
                return Pormise.reject(error);
            }else if(response.statusText=='logSubOK'){
                return data;
            }
        });
}