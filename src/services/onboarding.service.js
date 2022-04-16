export const fetchOnboardingSurveyList = () => {
  const endPoint = process.env.REACT_APP_API_URL + '/api/onboarding/survey';
  return fetch(endPoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => {
      const status = response.status;
      const data = response.json();
      return Promise.all([status, data]).then((res) => ({
        status: res[0],
        data: res[1]
      }));
    })
    .catch((error) => {
      console.log(error);
    });
};
