interface fetchOptions {
  url: string,
  method: string,
  headers: {
    'Content-Type': string
  },
  mode: string,
  cache: string,
  body: any,
}

export default {
  makeFetchJSONRequest: function(url: string, data:any , method: string): fetchOptions  {
    const myHeaders = { 'Content-Type': 'application/json' };
    const myRequest = {
      url: `${url}`,
      method: `${method}`,
      headers: myHeaders,
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify({ data: data })
    };
  return myRequest;
  }
}