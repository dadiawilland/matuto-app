export const accountLoginService = (request) => {
    const endPoint = process.env.REACT_APP_API_URL+'/account/login';
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

export const registerAccountService = (request) => {
    const endPoint = process.env.REACT_APP_API_URL+'/account/';
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
    const endPoint = process.env.REACT_APP_API_URL+'/payment-info/';
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