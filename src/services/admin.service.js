export const createJobPostService = (request) => {
    const endPoint = 'https://matuto-api.herokuapp.com/api/job-post/';
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

export const createPartnerService = (request) => {
    const endPoint = 'https://matuto-api.herokuapp.com/api/partner/';
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