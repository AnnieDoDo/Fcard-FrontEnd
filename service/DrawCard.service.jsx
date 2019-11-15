
export const DrawCardService = {
    DrawCard,
    GetPersonalData,
};

function DrawCard(Email, Password){
    const requestEntity = {
        method :'GET',
        mode: 'cors',
        credentials: 'include',
    }

    return fetch('http://127.0.0.1:3500/drawSubmit',requestEntity)
    .then(handleDraw =>{
        console.log(handleDraw)
        return handleDraw.text()
    })

}

function GetPersonalData(){
    const requestEntity = {
        method :'GET',
        mode: 'cors',
        credentials: 'include',
    }

    return fetch('http://127.0.0.1:3500/getDrewData',requestEntity)
    .then(handleDraw =>{
        console.log(handleDraw)
        return handleDraw.text()
    })

}