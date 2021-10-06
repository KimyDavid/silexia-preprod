# Admin

## API

### Get all users

  Returns all users with autodiag results

* **URL**

  [GET] /v1/admin/list_users

* **Data Params**

* **Success Response:**

  * **Code:** 200
    **Content:** `[
      {
        user:{
          id,
          company,
          email,
          first_name,
          last_name,
          date,
        },
        autodiag:[
          {
            category : {
              id,
              label,
              order
            },
            score,
            score_total
          }
        ],
        score_user,
        score_total
      }
    ]`
 
---