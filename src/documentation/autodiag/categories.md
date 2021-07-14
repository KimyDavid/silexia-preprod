# Categories

## Object

Depending on the context, Categories have different properties.

### Default

Those categories are sent back from api endpoints to create or edit items.

**Nom**               | **Type**          | **Description** 
----------------------|-------------      |-------------------
id                    | int               | Identifiant
label                 | varchar(255)      | Label
description           | description(255)  | Description
order                 | smallint          | Order
tiers                 | array(Tiers)      | Tiers

### Autodiag (type = autodiag)

Those categories are sent back from autodiag endpoints to prompt questions to user.

**Nom**               | **Type**          | **Description** 
----------------------|-------------      |-------------------
id                    | int               | Identifiant
label                 | varchar(255)      | Label
description           | description(255)  | Description
order                 | smallint          | Order
questions             | array(Questions)  | Array of Questions (cf. Questions)


### Results (type = results)

Those categories are sent back from api endpoints to obtain user's results.

**Nom**               | **Type**              | **Description** 
----------------------|-----------------------|-------------------
id                    | int                   | Identifiant
label                 | varchar(255)          | Label
description           | varchar(255)          | Description
order                 | smallint              | Order
score_user            | int                   | Score user
score_total           | int                   | Score total
flags                 | Array(varchar(255))   | List of flags raised for this user
tier                  | varchar(255)          | Text describing the user ranking




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

  ***Required:***
   `label=[string]`
   `description=[string]`
   `order=[int]`
   `image=[file]`
   `tiers=[ [Tier] ]`

* **Success Response:**

  * **Code:** 201
    **Content:** `[object Category]`

---

### Update category

 Update an existing category.

* **Authentication**

Admin only.

* **URL**

  [PUT] /v1/categories/:id_category

*  **URL Params**

   ***Required:***
   `id_category=[int]`

* **Data Params**

  ***Optionnal:***
   `label=[string]`
   `order=[int]`
   `description=[string]`
   `tiers=[ [Tier] ]`

* **Success Response:**

  * **Code:** 200
    **Content:** `[object Category]`

---

### Delete category

 Delete an existing category.

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

