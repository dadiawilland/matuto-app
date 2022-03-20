export const accountLoginService = async (request) => {
    console.log(request)
    const endPoint = process.env.REACT_APP_API_URL+'/oauth/token';
    request.grant_type = 'password'
    return fetch(endPoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }, 
        body: JSON.stringify(request)
    }).then((response) => {
        const status = response.status;
        const data = response.json();
        return Promise.all([status, data]).then((res) => ({
            status: res[0],
            data: res[1],
        }));
    }).catch((error) =>{
        console.log(error);
    });
}
// TODO: uncamelize requests
export const registerAccountService = (request) => {
    console.log(request)
    const endPoint = process.env.REACT_APP_API_URL+'/api/users/';
    return fetch(endPoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }, 
        body: JSON.stringify(request)
    }).then((response) => {
        const status = response.status;
        const data = response.json();
        return Promise.all([status, data]).then((res) => ({
            status: res[0],
            data: res[1],
        }));
    }).catch((error) =>{
        console.log(error);
    });
};

export const registerPaymentInfoService = (request) => {
    console.log(request);
    const endPoint = process.env.REACT_APP_API_URL+'/api/payment-info/';
    return fetch(endPoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }, 
        body: JSON.stringify(request)
    }).then((response) => {
        const status = response.status;
        const data = response.json();
        return Promise.all([status, data]).then((res) => ({
            status: res[0],
            data: res[1],
        }));
    }).catch((error) =>{
        console.log(error);
    });
}