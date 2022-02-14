# Partners

## Object

### Partner

**Nom**               | **Type**      | **Description** 
----------------------|-------------  |-------------------
id                    | int           | Identifiant
name                  | varchar(100)  | Name
abstract              | text          | Abstract of content
text                  | text          | HTML of content to display
image                 | url           | Url of illustration
url                   | url           | Url of partner's website
order                 | int           | Order
page                  | string        | Page to show partner on

### PartnerType

**Nom**               | **Type**      | **Description** 
----------------------|-------------  |-------------------
id                    | int           | Identifiant
label                 | varchar(100)  | Label
description           | text          | Decription
partners              | Array(Partner)| Array of partners in this category
order                 | int           | Order


## API

### Get partners

 Retrieve partners.

* **URL**

  [GET] /v1/partners

* **Success Response:**

  * **Code:** 200
    **Content:** `[ [object Partner] ]`

---

### Get partners by page

 Retrieve partners by page.

* **URL**

  [GET] /v1/partners/page/:page

*  **URL Params**

   ***Required:***
   `page=[string]`

* **Success Response:**

  * **Code:** 200
    **Content:** `[ [object Partner] ]`

---

### Get partner

 Retrieve partner.

* **URL**

  [GET] /v1/partner/:id_partner

*  **URL Params**

   ***Required:***
   `id_partner=[int]`

* **Success Response:**

  * **Code:** 200
    **Content:** `[ [object Partner] ]`

---

### Create partner

 Create a new partner.

* **Authentication**

Admin only.

* **URL**

  [POST] /v1/partners

* **Data Params**

  ***Required:***
   `name=[string]`
   `text=[text]`
   `abstract=[string]`
   `partner_type=[int]`
   `order=[int]`

  ***Optional:***
   `page=[string]`

* **Success Response:**

  * **Code:** 201
    **Content:** `[object Partner]`

---

### Update partner

 Update an existing partner.

* **Authentication**

Admin only.

* **URL**

  [PATCH] /v1/partners/:id_partner

*  **URL Params**

   ***Required:***
   `id_partner=[int]`

* **Data Params**

  ***Optionnal:***
   `name=[string]`
   `text=[text]`
   `abstract=[string]`
   `partner_type=[int]`
   `order=[int]`
   `image=[image]`
   `page=[string]`

* **Success Response:**

  * **Code:** 200
    **Content:** `[object Partner]`

---

### Delete partner

 Delete an existing partner.

* **Authentication**

Admin only.

* **URL**

  [DELETE] /v1/partners/:id_partner

*  **URL Params**

   ***Required:***
   `id_partner=[int]`

* **Success Response:**

  * **Code:** 204 
    **Content:** `{ id: id_partner }`

---

### Get partners type

 Retrieve partners type.

* **URL**

  [GET] /v1/partners_type

* **Success Response:**

  * **Code:** 200
    **Content:** `[ [object PartnerType] ]`

---

### Create partner type

 Create a new partner type.

* **Authentication**

Admin only.

* **URL**

  [POST] /v1/partners_type

* **Data Params**

  ***Required:***
   `label=[string]`
   `description=[text]`
   `order=[int]`

* **Success Response:**

  * **Code:** 201
    **Content:** `[object PartnerType]`

---

### Update partner type

 Update an existing partner type.

* **Authentication**

Admin only.

* **URL**

  [PUT] /v1/partners_type/:id_partner_type

*  **URL Params**

   ***Required:***
   `id_partner_type=[int]`

* **Data Params**

  ***Required:***
   `label=[string]`
   `description=[text]`
   `order=[int]`

* **Success Response:**

  * **Code:** 200
    **Content:** `[object PartnerType]`

---

### Delete partner type

 Delete an existing partner type.

* **Authentication**

Admin only.

* **URL**

  [DELETE] /v1/partners_type/:id_partner_type

*  **URL Params**

   ***Required:***
   `id_partner_type=[int]`

* **Success Response:**

  * **Code:** 204 
    **Content:** `{ id: id_partner_type }`

---