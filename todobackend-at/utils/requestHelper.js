import rp from 'request-promise';

export const get = (url) => {
  const options = {
    uri: url,
    headers: {
      'User-Agent': 'Request-Promise',
    },
    resolveWithFullResponse: true,
    // json: true, // Automatically parses the JSON string in the response
  };
  return rp(options);
};

export const post = (url, data) => ('not defined yet');
