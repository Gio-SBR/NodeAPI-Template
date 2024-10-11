Once you have copied the respository, make sure to do the following steps:

- Run npm i express dotenv (at the project route)
- Add .env file to .gitignore file below /node_modules
- In the .env file:
  - Add DB Connection String
  - Create 2 secrets for JWT
  - Set JWT expiry time
- run npm remove-env
- Run npm run build (at the project base)
