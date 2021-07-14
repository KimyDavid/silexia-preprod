# Articles

## Object

**Nom**               | **Type**      | **Description** 
----------------------|-------------  |-------------------
id                    | int           | Identifiant
title                 | varchar(100)  | Article's title
text                  | text          | Article's text, html
image                 | url           | Url of article's illustration

TO DO : add abstract

## API

### Get articles

 Retrieve articles.

* **URL**

  [GET] /v1/articles

* **Success Response:**

  * **Code:** 200
    **Content:** `[ [object Articles] ]`

---

### Create articles

 Create a new article.

* **Authentication**

Admin only.

* **URL**

  [POST] /v1/articles

* **Data Params**
  
  Since image can be attached, the body must be a form-data.

  ***Required:***
   `title=[string]`
   `text=[text]`
   `image=[file]`

* **Success Response:**

  * **Code:** 201
    **Content:** `[object Articles]`

---

### Update articles

 Update an existing article.

* **Authentication**

Admin only.

* **URL**

  [PATCH] /articles/:id_article

*  **URL Params**

   ***Required:***
   `id_article=[int]`

* **Data Params**
  
  Since image can be attached, the body must be a form-data.

  ***Optionnal:***
   `title=[string]`
   `text=[text]`
   `image=[file]`

* **Success Response:**

  * **Code:** 200
    **Content:** `[object Articles]`

---

### Delete articles

 Delete an existing article.

* **Authentication**

Admin only.

* **URL**

  [DELETE] /v1/articles/:id_article

*  **URL Params**

   ***Required:***
   `id_article=[int]`

* **Success Response:**

  * **Code:** 204 
    **Content:** `{ id: id_article }`

---