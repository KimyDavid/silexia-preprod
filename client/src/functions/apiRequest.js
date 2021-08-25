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

export const API_POST = (slug, method, data) => {
    return fetch(`${Constants.api_url}/${slug}`, {
        method: method,
        body: JSON.stringify(data),
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
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