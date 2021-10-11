import Constants from '../constants/Config';

export const API_GET = (slug) => {
    return fetch(`${Constants.api_url}/${slug}`, {
      credentials: 'include',
    })
        .then(res => res.json())
        .then(
            (result) => result
        )
        .catch(error => console.warn(error));
}

export const API_REMOVE = (slug) => {
    return fetch(`${Constants.api_url}/${slug}`, {
        method: "DELETE",
        credentials: 'include',
      })
        .then(res => res.json())
        .then(result => {
          document.location.reload();
        })
        .catch(error => console.warn(error));
}

export const API_POST = (slug, method, data, isFormData) => {
    data = isFormData ? data : JSON.stringify(data);

    let options = {
      method: method,
      body: data,
      credentials: 'include',
      redirect: 'follow',
    }
    
    if (!isFormData) {
      options.headers = {'Content-Type': 'application/json'}
    }
    
    return fetch(`${Constants.api_url}/${slug}`, options)
        .then(res => res.json())
        .then(result => result)
        .catch(error => console.warn(error));
}

export const API_AUTH = () => {
    return fetch(`${Constants.api_url}/auth`, {
        credentials: 'include',
    })
        .then(res => res.json())
        .then(result => result)
        .catch(error => console.warn(error));
}