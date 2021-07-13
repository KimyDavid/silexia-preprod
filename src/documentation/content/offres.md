# Offres

## Object

### Offre

**Nom**               | **Type**      | **Description** 
----------------------|-------------  |-------------------
id                    | int           | Identifiant
title                 | varchar(100)  | Title
text                  | text          | Text (html)
image                 | url           | Url of illustration
abstract              | varchar(255)  | Abstract
order                 | smallint      | Order

## API

### Get offres

 Retrieve offres.

* **URL**

  [GET] /offres

* **Success Response:**

  * **Code:** 200
    **Content:** `[ [object Offre] ]`

---

### Create offre

 Create a new offre.

* **Authentication**

Admin only.

* **URL**

  [POST] /offres

* **Data Params**
  
  Since image can be attached, the body must be a form-data.

  ***Required:***
   `title=[string]`
   `text=[text]`
   `image=[file]`
   `order=[int]`
   `abstract=[string]`

* **Success Response:**

  * **Code:** 201
    **Content:** `[object Offre]`

---

### Update offre

 Update an existing offre.

* **Authentication**

Admin only.

* **URL**

  [PATCH] /offres/:id_offre

*  **URL Params**

   ***Required:***
   `id_offre=[int]`

* **Data Params**
  
  Since image can be attached, the body must be a form-data.

  ***Optionnal:***
   `title=[string]`
   `text=[text]`
   `image=[file]`
   `order=[int]`
   `abstract=[string]`

* **Success Response:**

  * **Code:** 200
    **Content:** `[object Offre]`

---

### Delete offre

 Delete an existing offre.

* **Authentication**

Admin only.

* **URL**

  [DELETE] /offres/:id_offre

*  **URL Params**

   ***Required:***
   `id_offre=[int]`

* **Success Response:**

  * **Code:** 204 
    **Content:** `{ id: id_offre }`

---