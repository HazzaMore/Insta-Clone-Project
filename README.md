# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Requirements: 

Note: need to find initial npm installs from https://youtu.be/RMScMwY2B6Q?si=159AAkKAR0Q4ZC6T

To work with Firebase:
`npm install firebase zustand react-firebase-hooks`

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
* remove casing errors before upload or else the build will fail

## Known flaws/bugs
* When creating an account, username checks are not case insensitive.Meaning a user with janedoe can exist alongside JaneDoe and janeDoe etc. but all have the same url.
* In the search, the suggested user's follow count sometimes isn't updating, could be difference because of not reading up to date local and database state - afaik the user profile updates fine, so worth checking how that works to compare
* CreatePost works when within a user profile, but when in home the userProfile is null and it shows that error despite the post successfully being created
* When returning the posts: Each child in a list should have a unique "key" prop.
* When the user comments with an empty string it still posts

## Firebase rules

```
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {

		match /users/{userId} {
    allow read;
    // user is authenticated and in their own document
    allow write: if request.auth != null;
    }
    
    match /posts/{postId} {
    allow read;
    allow create: if request.auth != null
    // can only update & delete the post if they are also the creator
    allow update: if request.auth != null;
    allow delete: if request.auth != null && request.auth.uid == resource.data.createdBy;
    }

    match /{document=**} {
      // allow read, write: if request.auth != null && request.auth.uid != null; // Allow authenticated users
      allow read: if request.origin == 'http://localhost:5173'; // Allow your frontend
    }
  }
}
```