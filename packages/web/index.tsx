import client from 'react-dom/client';
// https://dev.to/thepassle/the-javascript-ecosystem-for-the-dazed-and-confused-36il
// TODO Need Babel or Vite
const talk = console.log;

const myFunc = (something: string): void => talk(something);

const data = {
  forget: 'it',
  something: 'good',
  okay: false,
};

myFunc('Hello world');
myFunc(JSON.stringify(data));

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = client.createRoot(document.getElementById('app')!);
root.render('<h1>Hello, world</h1>');
