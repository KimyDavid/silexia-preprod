import Constants from '../constants/Config';

export const API_GET = (slug) => {
    return fetch(`${Constants.api_url}/${slug}`)
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
    const headers = isFormData ? {'Content-Type': 'multipart/form-data'} : {'Content-Type': 'application/json'}
    console.log(data);
    return fetch(`${Constants.api_url}/${slug}`, {
        method: method,
        body: data,
        credentials: 'include',
        headers: headers,
      })
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