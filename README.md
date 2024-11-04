# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Requirements: 

Note: need to find initial npm installs from https://youtu.be/RMScMwY2B6Q?si=159AAkKAR0Q4ZC6T

To work with Firebase:
`npm install firebase zustand react-firebase-hooks @chakra-ui/icons`

## Base Repository (outdated)
https://github.com/burakorkmez/instagram-clone/tree/master

## Useful documentation on Authentication setup:

|Use|url|
|--|--|
|useCreateUserWithEmailAndPassword<br> useSignOut<br>useAuthState |https://github.com/csfrequency/react-firebase-hooks/tree/09bf06b28c82b4c3c1beabb1b32a8007232ed045/auth|
|Add a document to db <br> e.g. for adding the user|https://firebase.google.com/docs/firestore/manage-data/add-data|
|Firestore Queries -<br> checking if username is taken |https://firebase.google.com/docs/firestore/query-data/queries|
|Firestore Queries -<br> get a document |https://firebase.google.com/docs/firestore/query-data/get-data|
|Chakra Templates|https://chakra-templates.vercel.app/forms/authentication|
|Uploading file to firebase|https://firebase.google.com/docs/storage/web/upload-files|

## ToDos:
* Make a loading skeleton for the suggested users

## Known flaws/bugs
* When creating an account, username checks are not case insensitive.Meaning a user with janedoe can exist alongside JaneDoe and janeDoe etc. but all have the same url.
* In the search, the suggested user's follow count sometimes isn't updating, could be difference because of not reading up to date local and database state - afaik the user profile updates fine, so worth checking how that works to compare