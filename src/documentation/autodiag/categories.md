# Categories

## Object

**Nom**               | **Type**          | **Description** 
----------------------|-------------      |-------------------
id                    | int               | Identifiant
label                 | varchar(255)      | Label
description           | description(255)  | Description
order                 | smallint          | Order
questions             | array(Questions)  | Array of Questions (cf. Questions)
results               | array(Results)    | Array of Results (cf. Results)
image                 | url               | Url of category's illustration
tiers                 | array(Tiers)      | Tiers

## API

### Get categories

 Retrieve categories.

* **URL**

  [GET] /v1/categories

* **Success Response:**

  * **Code:** 200
    **Content:** `[ [object Category] ]`

---

### Create category

 Create a new category.

* **Authentication**

Admin only.

* **URL**

  [POST] /v1/categories

* **Data Params**

  Since image can be attached, the body must be a form-data.

  ***Required:***
   `label=[string]`
   `description=[string]`
   `order=[int]`
   `image=[file]`

* **Success Response:**

  * **Code:** 201
    **Content:** `[object Category]`

---

### Update category

 Update an existing category.

* **Authentication**

Admin only.

* **URL**

  [PATCH] /v1/categories/:id_category

*  **URL Params**

   ***Required:***
   `id_category=[int]`

* **Data Params**

  Since image can be attached, the body must be a form-data.

  ***Optionnal:***
   `label=[string]`
   `order=[int]`
   `description=[string]`
   `image=[file]`

* **Success Response:**

  * **Code:** 200
    **Content:** `[object Category]`

---

### Delete category

 Delete an existing category. IN PROGRESS

* **Authentication**

Admin only.

* **URL**

  [DELETE] /v1/category/:id_category

*  **URL Params**

   ***Required:***
   `id_category=[int]`

* **Success Response:**

  * **Code:** 204 
    **Content:** `{ id: id_category }`

---

