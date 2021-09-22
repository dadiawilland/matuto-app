export const getPriceListService = (request) => {
    // const endpoint = 'https://asdasd/price-list';
    // const accessToken = getAccesstoken;
    // return fetch(endpoint, {
    //     method: 'GET',
    //     headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //         Authorization: 'Bearer '+ accessToken,
    //     }
    // })

    return {
        status: 200,
        data: {
            price: [
                {id: 1, type: 'ENTERPRISE', logo: 'icon-price-1.png', title: 'For Enterprise', price: 'Custom', description: `Tailor-fit gamified work-train program for you employees

                Connect with Matuto graduates and potential employees

                Post job openings
                
                Gain a company ad slot`},
                {id: 2, type: 'INDIVIDUAL', logo: 'icon-price-2.png', title: 'For Individuals', price: '1,499php', description: `Full Access to Matuto's work-train program

                Gain vouchers as you unlock skilss

                Get a certificate and a badge upon course completion

                Access job openings at our partner companies`},
                {id: 3, type: 'TEAM', logo: 'icon-price-3.png', title: 'For Teams', price: '1,499php', description: `Empower employees to enhance and master soft and hard skills through a gamified program

                Track employee progress realtime

                Create a more effective and efficient workplace

                Post Job openings`}
            ]
        }
    }
}