# Authentication

## Object

### User

**Nom**               | **Type**      | **Description** 
----------------------|-------------  |-------------------
id                    | int           | Identifiant
company               | varchar(100)  | Organization's name
email                 | varchar(100)  | User's email
sector                | int           | Organization's sector (cf. Sector)
type                  | int           | Organization's type (cf. Type)
size                  | int           | Organization's size (cf. Size)
first_name            | varchar(100)  | User's first_name
last_name             | varchar(100)  | User's name
function              | varchar(100)  | User's function
phone                 | varchar(100)  | User's phone
verif                 | tinyint       | Account's verification status (0: unsubscribe, 1: subscribe, awaiting email verification, 2: verified)

## API

### Log in

  Log in and returns json data about a single user.

* **URL**

  [POST] /v1/login

* **Data Params**

  ***Required:***
   `email=[string]`
   `password=[string]`

* **Success Response:**

  * **Code:** 200
    **Content:** `[object User]`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST 
    **Description:** Provided email isn't stored in db 
    **Content:** `{ error: 'Validation error', details: 'Unknown email'}`

  * **Code:** 400 BAD REQUEST
    **Description:** Provided password doesn't match the one stored in db
    **Content:** `{ error: 'Invalid password'}`
---

### Forget password

  Send an email to allow user to reset password.

* **URL**

  [POST] /v1/forgot_password

* **Data Params**

  ***Required:***
   `email=[string]`

* **Success Response:**

  * **Code:** 200
    **Content:** `null`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST
    **Description:** Provided email isn't stored in db
    **Content:** `{ error: 'Validation error', details: 'Unknown email'}`
---

### Reset password

  Check and update the key sent by email to reset password. 

* **URL**

  [GET] /v1/reset_password/:key

*  **URL Params**

   ***Required:***
   `id=[integer]`

* **Success Response:**

  * **Code:** 200 
    **Content:** `[object User]`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST 
    **Description:** Provided key isn't recognized in db, or has already been used
    **Content:** `{ error: 'wrong key'}`
---

### Update user
  Update user's password.

* **URL**

  [PATCH] /v1/users/:id_user

*  **URL Params**

   ***Required:***
   `id_user=[integer]`

* **Data Params**

  ***Required:***
   `password=[string]`

* **Success Response:**

  * **Code:** 200
    **Content:** `[object User]`

---

### Subscribe user

IN PROGRESS

---