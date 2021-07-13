# Types

## Object

### Type

**Nom**               | **Type**      | **Description** 
----------------------|-------------  |-------------------
id                    | int           | Identifiant
label                 | varchar(255)  | Label
order                 | smallint      | Order

## API

### Get types

 Retrieve types.

* **URL**

  [GET] /types

* **Success Response:**

  * **Code:** 200
    **Content:** `[ [object Type] ]`

---

### Create type

 Create a new type.

* **Authentication**

Admin only.

* **URL**

  [POST] /types

* **Data Params**

  ***Required:***
   `label=[string]`
   `order=[int]`

* **Success Response:**

  * **Code:** 201
    **Content:** `[object Type]`

---

### Update type

 Update an existing type.

* **Authentication**

Admin only.

* **URL**

  [PUT] /types/:id_type

*  **URL Params**

   ***Required:***
   `id_type=[int]`

* **Data Params**

  ***Required:***
   `label=[string]`
   `order=[int]`

* **Success Response:**

  * **Code:** 200
    **Content:** `[object Type]`

---

### Delete type

 Delete an existing type.

* **Authentication**

Admin only.

* **URL**

  [DELETE] /types/:id_type

*  **URL Params**

   ***Required:***
   `id_type=[int]`

* **Success Response:**

  * **Code:** 204 
    **Content:** `{ id: id_type }`

---