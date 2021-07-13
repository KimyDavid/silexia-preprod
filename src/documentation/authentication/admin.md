# Admin

## Objects

### Admin

**Nom**               | **Type**      | **Description** 
----------------------|-------------  |-------------------
id                    | int           | Identifiant
email                 | varchar(100)  | Email
first_name            | varchar(100)  | First name
last_name             | varchar(100)  | Last name
admin                 | boolean       | True if admin

## API

### Log in

  Log in and returns json data about admin.

* **URL**

  [POST] /login

* **Data Params**

  ***Required:***
   `email=[string]`
   `password=[string]`

* **Success Response:**

  * **Code:** 200
    **Content:** `[object Admin]`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST 
    **Description:** Provided email isn't stored in db 
    **Content:** `{ error: 'Validation error', details: 'Unknown email'}`

  * **Code:** 400 BAD REQUEST
    **Description:** Provided password doesn't match the one stored in db
    **Content:** `{ error: 'Invalid password'}`
---