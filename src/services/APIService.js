import { getAccessToken } from '../providers/CreateAuthProvider';

export const APIService = () => {
  const endPoint = process.env.REACT_APP_API_URL;
  const POST = 'POST';
  const GET = 'GET';
  const PUT = 'PUT';

  const request = (method, content = null) => {
    let requestContent = {
      method: method,
      headers: { 'Content-Type': 'application/json' }
    };

    let body = { body: JSON.stringify(content) };

    requestContent = content ? { ...requestContent, ...body } : requestContent;

    return requestContent;
  };

  const oauthRequest = async (method, content = null) => {
    const accessToken = await getAccessToken();
    let requestContent = {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      }
    };

    let body = { body: JSON.stringify(content) };

    requestContent = content ? { ...requestContent, ...body } : requestContent;

    return requestContent;
  };

  const parseResponse = async (response) => {
    const status = response.status;
    const data = response.json();
    return Promise.all([status, data]).then((res) => ({
      status: res[0],
      data: res[1]
    }));
  };

  const login = async (content) => {
    content.grant_type = 'password';
    return await fetch(endPoint + '/oauth/token', request(POST, content))
      .then((response) => {
        return parseResponse(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchRefreshToken = async (content) => {
    content.grant_type = 'refresh_token';
    return await fetch(endPoint + '/oauth/token', request(POST, content))
      .then((response) => {
        return parseResponse(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const registerAccount = async (content) => {
    return await fetch(endPoint + '/api/users', request(POST, content))
      .then((response) => {
        return parseResponse(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const registerPayment = async (content) => {
    return await fetch(endPoint + '/api/users', request(POST, content))
      .then((response) => {
        return parseResponse(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchOnboardingSurveyList = async () => {
    return await fetch(
      endPoint + '/api/onboarding/survey',
      await oauthRequest(GET)
    )
      .then((response) => {
        return parseResponse(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return {
    login,
    fetchOnboardingSurveyList,
    fetchRefreshToken,
    registerAccount,
    registerPayment
  };
};
