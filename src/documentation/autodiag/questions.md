# Questions

## Object

**Nom**               | **Type**        | **Description** 
----------------------|-----------------|-------------------
id                    | int             | Identifiant
label                 | varchar(255)    | Label
order                 | smallint        | Order
id_category           | int             | Id of the category (cf. Category)
answers               | array(Answers)  | Array of Answers (cf. Answers)
description           | description(255)| Description

## API

### Get questions

 Retrieve questions.

* **URL**

  [GET] /v1/autodiag/questions

* **Success Response:**

  * **Code:** 200
    **Content:** `[ [object Question] ]`

---

### Create question

 Create a new question.

* **Authentication**

Admin only.

* **URL**

  [POST] /v1/autodiag/questions

* **Data Params**

  ***Required:***
   `label=[string]`
   `description=[string]`
   `order=[int]`

* **Success Response:**

  * **Code:** 201
    **Content:** `[object Question]`

---

### Update question

 Update an existing question.

* **Authentication**

Admin only.

* **URL**

  [PATCH] /v1/autodiag/questions/:id_question

*  **URL Params**

   ***Required:***
   `id_question=[int]`

* **Data Params**

  ***Optionnal:***
   `label=[string]`
   `description=[string]`
   `order=[int]`

* **Success Response:**

  * **Code:** 200
    **Content:** `[object Question]`

---

### Delete question

 Delete an existing question.

 WARNING ! Deleting a question deletes all the answers linked to this question.

* **Authentication**

Admin only.

* **URL**

  [DELETE] /v1/id_question/:id_question

*  **URL Params**

   ***Required:***
   `id_question=[int]`

* **Success Response:**

  * **Code:** 204 
    **Content:** `{ id: id_question }`

---