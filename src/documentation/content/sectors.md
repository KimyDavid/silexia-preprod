# Sectors

## Object

### Sector

**Nom**               | **Type**      | **Description** 
----------------------|-------------  |-------------------
id                    | int           | Identifiant
label                 | varchar(255)  | Label

## API

### Get sectors

 Retrieve sectors.

* **URL**

  [GET] /sectors

* **Success Response:**

  * **Code:** 200
    **Content:** `[ [object Sector] ]`

---

### Create sector

 Create a new sector.

* **Authentication**

Admin only.

* **URL**

  [POST] /v1/sectors

* **Data Params**

  ***Required:***
   `label=[string]`
   `order=[int]`

* **Success Response:**

  * **Code:** 201
    **Content:** `[object Sector]`

---

### Update sector

 Update an existing sector.

* **Authentication**

Admin only.

* **URL**

  [PUT] /v1/sectors/:id_sector

*  **URL Params**

   ***Required:***
   `id_sector=[int]`

* **Data Params**

  ***Required:***
   `label=[string]`
   `order=[int]`

* **Success Response:**

  * **Code:** 200
    **Content:** `[object Sector]`

---

### Delete sector

 Delete an existing sector.

* **Authentication**

Admin only.

* **URL**

  [DELETE] /v1/sectors/:id_sector

*  **URL Params**

   ***Required:***
   `id_sector=[int]`

* **Success Response:**

  * **Code:** 204 
    **Content:** `{ id: id_sector }`

---