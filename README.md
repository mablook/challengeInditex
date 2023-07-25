# What is the purpose of this project?

The test and its project specifications are in the document, doubts about the related functionalities can be found attached
[Challenge Inditex (1).pdf](https://github.com/mablook/challengeInditex/files/10743267/Challenge.Inditex.1.pdf)

https://user-images.githubusercontent.com/1661231/219041069-9b806b44-eb0d-47e7-afdb-12f075f47c0a.mp4

## Getting Started with Create React App using Typescript

## The complete map of related types can be found at:
![image](https://user-images.githubusercontent.com/1661231/219627314-e8e4eca7-0033-421a-855d-2925fb5de032.png)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

# Recommended to use yarn for installation and or deployment

### `yarn install`

### `npm start <==> run development mode`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## If you encounter any problems with the test legacy libraries, please use:

#### npm install --legacy-peer-deps

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
_You can set the number of episodes of a podcast here_   
REACT_APP_API_PODCAST_EPISODE_LIMIT=15

## Tests have been added to the project

Tests have been added to the project, covering key features and components.
![image](https://github.com/mablook/challengeInditex/assets/1661231/05aac001-1990-41cf-b1f0-4a9190b25d77)


## Analysis and Profiling:
### a. Performance Analysis:

Use browser development tools (e.g., Chrome DevTools) to analyze the components' performance, specifically checking for rendering time, layout issues, and possible performance bottlenecks.
Analyze the components' usage of props, state, and context, and check for any unnecessary re-renders or inefficient data flows.

### b. Profiling Tools:
Utilize React's built-in profiling tools (e.g., React DevTools) or other performance profiling libraries to identify performance hotspots and areas of improvement.
Use tools like react-addons-perf (prior to React 16.3) or React's built-in Profiler component (React 16.5 and later) to measure component rendering times.
Optimization:

### a. Memoization:
Use React's React.memo or useMemo hook to memoize components or their parts that do not need to re-render frequently.
Memoize callback functions passed as props to avoid unnecessary re-creations.

### b. Context Optimization:
Ensure that the context is consumed optimally. Avoid overusing context, especially for frequently changing data that doesn't need to be globally accessible.
Split the context into smaller contexts based on different concerns to avoid unnecessary updates across the entire app.

### c. Avoiding Excessive Render:
Analyze the component tree and optimize it to minimize unnecessary renders.
Use shouldComponentUpdate or React.memo to prevent re-renders when the props or state haven't changed.

### d. Use Key Prop:
Always use a unique key prop when rendering lists of components to enable efficient updates and avoid reconciliation issues.
e. Code Splitting and Lazy Loading:

Consider using code splitting and lazy loading with React.lazy and React.Suspense to load components only when needed, reducing the initial bundle size.

### f. Bundle Size Optimization:
Use tools like Webpack or Rollup to optimize the bundle size by applying minification, compression, and tree shaking.

### g. Asynchronous Data Fetching:
If the components fetch data asynchronously, ensure proper handling of loading and error states to provide a smooth user experience.
h. Image Optimization:

Optimize image sizes and formats to reduce page loading time.

### i. Performance Testing:
Perform real-world performance testing using tools like Lighthouse, PageSpeed Insights, or WebPageTest to measure and analyze the components' performance in different scenarios.

### Profiling and Validation:
a. After implementing the optimizations, re-profile the components to validate the improvements in rendering time and other performance metrics.
b. Conduct thorough testing to ensure that the optimized components function as expected and maintain their intended behavior.


## How to Create Components for the Project

### Create a New Component Folder:
Create a new folder with the component name inside the src/components directory. For example, if you want to create a component called MyComponent, create a folder named MyComponent.

### Create the Component File:
Inside the MyComponent folder, create a new file named MyComponent.tsx. This file will contain the code for your component.

### Write the Component Code:
In MyComponent.tsx, write the code for your component. Here's an example structure for a functional component:

```tsx
Copy code
import React from "react";
import styles from "./MyComponent.module.scss";

const MyComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Your component code here */}
    </div>
  );
};

export default MyComponent;
```

### Create a Component Module for Styling (Optional):
If your component needs styling, you can create a separate module file inside the MyComponent folder named MyComponent.module.scss. This file will contain your component's CSS/SCSS styles.
scss

```tsx
/* MyComponent.module.scss */
.container {
  /* Your component styles here */
}
```
### Create a Test File for the Component (Optional but Recommended):
To ensure the component works as expected, create a test file for it. Inside the MyComponent folder, create a new file named MyComponent.test.tsx.

```tsx
import React from "react";
import { render } from "@testing-library/react";
import MyComponent from "./MyComponent";

describe("MyComponent", () => {
  it("should render correctly", () => {
    const { getByText } = render(<MyComponent />);
    const componentText = getByText("Your component text"); // Replace with your component text
    expect(componentText).toBeInTheDocument();
  });
});
```

In the MyComponent folder, create an index.ts file and export the MyComponent from there. This makes it easier to import the component from other parts of the project.

```tsx
export { default as MyComponent } from "./MyComponent";
Using the Component in Other Files:

You can now use your MyComponent in other files by importing it from the index.ts.
tsx
Copy code
import { MyComponent } from "../components/MyComponent";

const App: React.FC = () => {
  return (
    <div>
      <MyComponent />
    </div>
  );
};

export default App;
```

That's it! With these steps, you have successfully created a new component and integrated it into your project. Remember to customize the component code and styles to fit your specific requirements. Additionally, keep adding test cases as your component's functionality grows to ensure its correctness. Happy coding!

_Remember that optimization should be based on actual performance bottlenecks identified through profiling. Always prioritize readability and maintainability of the code while optimizing for performance._

_Please note that the specific optimizations may vary based on the specific use case and complexity of the components and the application as a whole. Continuously monitor the application's performance and be ready to make further improvements as needed._
