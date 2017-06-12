import rp from 'request-promise';

const request = (options) => {
  const defaults = {
    headers: {
      'User-Agent': 'Request-Promise',
    },
    resolveWithFullResponse: true,
    // json: true, // Automatically parses the JSON string in the response
  };
  return rp({ ...defaults, ...options });
};

export const get = (url) => {
  const options = {
    uri: url,
  };
  return request(options);
};

export const post = (url, body) => {
  const options = {
    uri: url,
    method: 'POST',
    body,
    json: true,
  };
  return request(options);
};

export const options = (url) => {
  const opt = {
    uri: url,
    method: 'OPTIONS',
    headers: {
      'User-Agent': 'Request-Promise',
      Origin: 'http://someplace.com',
    },
  };
  return request(opt);
};
