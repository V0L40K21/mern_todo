import axios from 'axios';

const api = (url, method, data = null, token = '', headers = {}) => {
  if (token.length !== 0) {
    headers = {Authorization: `Bearer ${token}`, ...headers};
  }

  const axiosConfig = {
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: data,
    url,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers,
    },
    // httpsAgent: new https.Agent({ rejectUnauthorized: false }),
    validateStatus: function (status) {
      return status >= 200 && status < 500;
    },
  };

  return axios(axiosConfig)
    .then((res) => {
      console.info('🚀', method, url, res); // todo comment in production
      return Promise.resolve(res);
    })
    .catch((error) => {
      console.log('🤬', error.toJSON());

      return Promise.resolve({
        status: 0,
        type: 'error',
        message: error.message,
      });
    });
};

export default api
