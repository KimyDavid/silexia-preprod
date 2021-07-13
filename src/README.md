# API

The following files describe both the data structure and the api routes related to the objects.

Some routes require authentication. Authentication relies on passport.js middleware, and is handled server-side through cookies stored on client's browser. Some routes are accesible by everyone, others by logged in users only and some only for admins. If the provided credentials doesn't meet requirements, the API returns a 401 response with an error `{ error: 'Unauthorized'}`

All the routes check body of the request and returns a 400 error if some required parameters are not provided. This won't be documented in the following description since it applies to every route. The error follows this format : `{ error: 'Validation error', details: error.message }`

##  Authentication

- [Authentication](./documentation/authentication/authentication.md)
- [User](./documentation/authentication/user.md)
- [Admin](./documentation/authentication/admin.md)

##  Content

- [Articles](./documentation/content/articles.md)
- [Offres](./documentation/content/offres.md)
- [Sectors](./documentation/content/sectors.md)
- [Sizes](./documentation/content/sizes.md)
- [Types](./documentation/content/types.md)
- [Partners](./documentation/content/partners.md)
- [Administrative Content](./documentation/content/administrative.md)

## Autodiag

- [Autodiag](./documentation/autodiag/autodiag.md)
- [Categories](./documentation/autodiag/categories.md)
- [Questions](./documentation/autodiag/questions.md)
- [Answers](./documentation/autodiag/answers.md)















