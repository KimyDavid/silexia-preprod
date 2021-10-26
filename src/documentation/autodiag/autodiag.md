# Autodiag

This part of the API handles everything that is related to the audiag and its results. It also handlestiers that refer to the global score.

## API

### Get autodiag

 Retrieve autodiag.
 The request returns an array of the categories, with questions and answers nested into the corresponding properties.

* **URL**

  [GET] /v1/autodiag

* **Success Response:**

  * **Code:** 200
    **Content:** `[ [object Category(type = autodiag)] ]`

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

 Retrieve the results of a user. Returns a JSON object with two keys : autodiag and global.
 Global : The global score is returned with the corresponding tier text. 
 Autodiag : An array of Categories returns the score for each category, with the corresponding tier text and flags.

* **URL**

  [GET] /v1/autodiag/user/:id_user

*  **URL Params**

   ***Required:***
   `id_user=[int]`

* **Success Response:**

  * **Code:** 201
    **Content:** `{user:[object User], autodiag: [object Category(type = results)], global: {score_user, score_global, tier} }`

---

### Get tiers

 Retrieve tiers.

* **URL**

  [GET] /autodiag/tiers

* **Success Response:**

  * **Code:** 200
    **Content:** `[ [object Tier] ]`

---

### Create tier

 Create a new tier.

* **Authentication**

Admin only.

* **URL**

  [POST] /v1/autodiag/tiers

* **Data Params**

  ***Required:***
   `text=[string]`
   `order=[int]`

* **Success Response:**

  * **Code:** 201
    **Content:** `[object Tier]`

---

### Update tier

 Update an existing tier.

* **Authentication**

Admin only.

* **URL**

  [PUT] /v1/autodiag/tiers/:id_tier

*  **URL Params**

   ***Required:***
   `id_tier=[int]`

* **Data Params**

  ***Required:***
   `text=[string]`
   `order=[int]`

* **Success Response:**

  * **Code:** 200
    **Content:** `[object Tier]`

---

### Delete tier

 Delete an existing tier.

* **Authentication**

Admin only.

* **URL**

  [DELETE] /v1/autodiag/tiers/:id_tier

*  **URL Params**

   ***Required:***
   `id_tier=[int]`

* **Success Response:**

  * **Code:** 204 
    **Content:** `{ id: id_tier }`

---