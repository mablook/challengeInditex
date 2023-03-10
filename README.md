# What is the purpose of this project?

The test and its project specifications are in the document, doubts about the related functionalities can be found attached
[Challenge Inditex (1).pdf](https://github.com/mablook/challengeInditex/files/10743267/Challenge.Inditex.1.pdf)

https://user-images.githubusercontent.com/1661231/219041069-9b806b44-eb0d-47e7-afdb-12f075f47c0a.mp4

# Getting Started with Create React App using Typescript

# The complete map of related types can be found at:
![image](https://user-images.githubusercontent.com/1661231/219627314-e8e4eca7-0033-421a-855d-2925fb5de032.png)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start <==> run development mode`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build <==> production mode`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

## PersistentData <==> App Global State

Data is persistent in the browser as required by the application. Taking into account the use of SPA with REACT, the best practice is to access the state directly and not the client's browser. Data is saved in local storage but loaded in application global`CONTEXT`

https://user-images.githubusercontent.com/1661231/219946325-e2e17793-8127-4c25-8c81-be99412b700c.mp4

## Environment Variables 

Some environment variables can be set in the .env document like:  
REACT_APP_BASE_URL=http://localhost  
REACT_APP_API_BASE_URL=https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json  
REACT_APP_API_PRODUCT_DETAIL=https://itunes.apple.com/lookup  
REACT_APP_API_INVALIDATE=3600000  

## No testing is required in the document
