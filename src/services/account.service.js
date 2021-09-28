// import { useHistory } from 'react-router-dom';

export const accountLoginService = (request) => {
    // const history = useHistory();
    const endPoint = 'https://matuto-api.herokuapp.com/api/account/login';
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
        // history.push('/pricing')
        console.log(error);
    });
}

export const registerAccountService = (request) => {
    const endPoint = 'https://matuto-api.herokuapp.com/api/account/';
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
    const endPoint = 'https://matuto-api.herokuapp.com/api/payment-info/';
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