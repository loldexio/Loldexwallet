import axios from "axios";
import config from "../config";

axios.defaults.baseURL = config.apiUrl;

var source = {
};

function getHeaders() {
  let defaultHeaders = {
    'Content-Type': 'application/json'
  };

  if (localStorage.userToken) {
    defaultHeaders = {
      'Authorization': `${localStorage.userToken}`,
      ...defaultHeaders
    };
  }

  return defaultHeaders;
}

function checkResponse(response) {
  if (response.data.error || !response.data.success) {
    var errorMessage = "";
    var error = response.data.error;
    if (error.data) {
      if (error.data.data) {
        if (Array.isArray(error.data.data.arguments)) {
          for (var e of error.data.data.arguments) {
            errorMessage += e ? e + ";" + " " : "";
          }
        }
      } else {
        errorMessage = error.data;
      }
    }

    if (!errorMessage || typeof(errorMessage) == "object") {
      errorMessage = error.message;
    }

    throw new Error(errorMessage);
  }

  return Promise.resolve(response.data);
}

function errorHandler(error) {
  if (axios.isCancel(error)) {
  } else {
    throw new Error(error.message);
  }
}

function post(uri, data) {
  return axios.post(uri, data, {
    headers: getHeaders(),
    crossdomain: true
  })
  .then(checkResponse)
  .catch(errorHandler)
}

function put(uri, data) {
  return axios.put(uri, data, {
    headers: getHeaders(),
    crossdomain: true
  })
  .then(checkResponse)
  .catch(errorHandler);
}

function remove(uri) {
  return axios.delete(uri, {
    headers: getHeaders(),
    crossdomain: true
  })
  .then(checkResponse)
  .catch(errorHandler);
}

const esc = encodeURIComponent

function qs(params) {
  return (
    Object
    .keys(params)
    .map(k => esc(k) + '=' + esc(params[k]))
    .join('&')
  )
}

function get(uri, data = {}, source) {
  if (Object.keys(data).length > 0) {
    uri = `${uri}?${qs(data)}`
  }

  if (source) {
    return axios.get(uri, {
      headers: getHeaders(),
      crossdomain: true,
      cancelToken: source.token
    })
    .then(checkResponse)
    .catch(errorHandler);
  }

  return axios.get(uri, {
    headers: getHeaders(),
    crossdomain: true
  })
  .then(checkResponse)
  .catch(errorHandler);
}

export default {
  source
}
