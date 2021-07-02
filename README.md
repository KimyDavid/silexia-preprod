# Silexia

## Install

To run this repo locally, clone this repo, and create an .env file at the root following the .env.example model.

To have an instance of the server, run

```
npm install
```

```
node index.js
```


## API

### Autodiag

Open endpoints require no Authentication.

* Login : `POST /v1/log_in/`
* Authentication (based on token stored on client side) : `POST /v1/auth/`
* Subscribe : `POST /v1/subscribe/`
* Log out : `POST /v1/log_out/`

### Endpoints that require Authentication

#### All users

* Get list of restaurants : `GET /v1/restaurants/`
* Get details of restaurant : `GET /v1/restaurants/:id_restaurant`

#### Customer only

* Post reviews : `POST /v1/reviews/`

#### Owners only

* Create restaurants : `POST /v1/restaurants/`
* Reply reviews : `POST /v1/replies/`
* Get reviews awaiting replies : `GET /v1/pending_replies/`

#### Admins only

* Get customers : `GET /v1/users/`
* Modify customers : `PUT /v1/users/`
* Delete customers : `DELETE /v1/users/`

* Get owners : `GET /v1/owners/`
* Modify owners : `PUT /v1/owners/`
* Delete owners : `DELETE /v1/owners/`

* Modify restaurants : `PUT /v1/restaurants/`
* Delete restaurants : `DELETE /v1/restaurants/`

* Get reviews : `GET /v1/reviews/`
* Modify reviews : `PUT /v1/reviews/`
* Delete reviews : `DELETE /v1/reviews/`