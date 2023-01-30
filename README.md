# Dynamic-Forms

Simple web application to implement dynamic forms along with user authentication built using ReactJS, NodeJs/Express, and PostgreSQL for the database.

## Backend Optimization: 

- Adhered to `service-orianted` architecture while building the backend.
- Passed all requests through a `DTO` to ensure request consistency.
- Hashed passwords using Bcrypt, and generated tokens using JWT.
- Validated inputs on the server side using Yup.

## Frontend Optimization

- Built a dynamic form that gets generated depending on the user type.
- All form inputs are stored in an object, changes can be done through them. 
- Build a custom hook to deal with the data inputted fields, validation, and making requests to the backend.
- Used Toast for server error handling.

## Notes:
- The forms that can be generated are the Registration forms for both individual and business accounts.
