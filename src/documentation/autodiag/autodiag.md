# Autodiag

## API

### Get autodiag

 Retrieve autodiag.
 The request returns an array of the categories, with questions ans answers nested into the corresponding properties.

* **URL**

  [GET] /v1/autodiag

* **Success Response:**

  * **Code:** 200
    **Content:** `[ [object Category] ]`

---

### Respond to autodiag

 Record answers and create a user account.
 ids of selected answers are expected in the body of the request, a user object corresponding to the newly created user is returned.

* **URL**

  [POST] /v1/autodiag

* **Data Params**

  ***Required:***
   `answers=[ [int] ]`

* **Success Response:**

  * **Code:** 201
    **Content:** `[object User]`

---

### Get user results

 Retrieve the results of a user.
 The global score is returned with the corresponding tier text. An array of Categories returns the score for each category, with the corresponding tier text and flags.

* **URL**

  [GET] /v1/autodiag/user/:id_user

*  **URL Params**

   ***Required:***
   `id_user=[int]`

* **Success Response:**

  * **Code:** 201
    **Content:** `[object Result]`

---