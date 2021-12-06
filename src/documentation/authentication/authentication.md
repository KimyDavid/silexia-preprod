# Authentication

This part handles all the login and authentification process of [users](./user.md) and [admins](./admin.md).

## API

### Auth

  Check if the stored cookie is valid, log in if so.

* **URL**

  [GET] /v1/auth

* **Success Response:**

  * **Code:** 200
    **Content:** `[object User]` or `[object Admin]`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST 
    **Description:** Provided email isn't stored in db 
    **Content:** `{ error: 'Validation error', details: 'Unknown email'}`

  * **Code:** 400 BAD REQUEST
    **Description:** Provided password doesn't match the one stored in db
    **Content:** `{ error: 'Invalid password'}`
---

### Logout

  Logout the user on backend.

* **URL**

  [GET] /v1/logout

* **Success Response:**

  * **Code:** 200
 
---

---

### Update password
  Update user's password.

* **URL**

  [PATCH] /v1/password/:id_user

*  **URL Params**

   ***Required:***
   `id_user=[integer]`

* **Data Params**

  ***Required:***
   `password=[string]`
   `key=[string]`

* **Success Response:**

  * **Code:** 200
    **Content:** `[object User]`