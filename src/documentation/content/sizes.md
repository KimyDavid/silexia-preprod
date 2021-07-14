# Sizes

## Object

### Size

**Nom**               | **Type**      | **Description** 
----------------------|-------------  |-------------------
id                    | int           | Identifiant
label                 | varchar(255)  | Label
order                 | smallint      | Order

## API

### Get sizes

 Retrieve sizes.

* **URL**

  [GET] /sizes

* **Success Response:**

  * **Code:** 200
    **Content:** `[ [object Size] ]`

---

### Create size

 Create a new size.

* **Authentication**

Admin only.

* **URL**

  [POST] /v1/sizes

* **Data Params**

  ***Required:***
   `label=[string]`
   `order=[int]`

* **Success Response:**

  * **Code:** 201
    **Content:** `[object Size]`

---

### Update size

 Update an existing size.

* **Authentication**

Admin only.

* **URL**

  [PUT] /v1/sizes/:id_size

*  **URL Params**

   ***Required:***
   `id_size=[int]`

* **Data Params**

  ***Required:***
   `label=[string]`
   `order=[int]`

* **Success Response:**

  * **Code:** 200
    **Content:** `[object Size]`

---

### Delete size

 Delete an existing size.

* **Authentication**

Admin only.

* **URL**

  [DELETE] /v1/sizes/:id_size

*  **URL Params**

   ***Required:***
   `id_size=[int]`

* **Success Response:**

  * **Code:** 204 
    **Content:** `{ id: id_size }`

---