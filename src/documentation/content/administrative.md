# Answers

## Object

**Nom**               | **Type**      | **Description** 
----------------------|-------------  |-------------------
id                    | int           | Identifiant
text                  | text  		  | HTML content to be displayed
type                  | varchar(100)  | Type of content, one of ['legal_mentions', 'cgv', 'cgu', 'privacy_policy']

## API

### Get administrative content

  Log in and returns json data about admin.

* **URL**

  [GET] /v1/administrative/:type

*  **URL Params**

   ***Required:***
   `type=[string]`

* **Success Response:**

  * **Code:** 200
    **Content:** `[object Administrative]`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST 
    **Description:** Params key provided in url doesn't match any of the accepted content
    **Content:** `{ error: 'Unknown administrative content'}`
---
