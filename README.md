# ToDo_With_React
ToDo List App with React
Steps
1) Install Globally the Create React App
```
npm install -g create-react-app
```
2) Open https://github.com/facebook/create-react-app for more info
    Create React App
```
npx create-react-app todolist
cd todolist
npm start
```
Little Bit of CleanUp required(voluntary)
1)App.js file
```
function App() {
  return (
    <div>
      <h1>Aryan First App</h1>
    </div>
  );
}

export default App;

```
2)index.js file
```
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```
And Rest all Files can be cleaned.
<br/>
3) All the Files can be cloned now, Run
```
npm start
```
Your ToDo App is Ready
