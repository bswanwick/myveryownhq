import client from 'react-dom/client';
const talk = console.log;
const myFunc = (something) => talk(something);
const data = {
    forget: 'it',
    something: 'good',
    okay: false,
};
myFunc('Hello world');
myFunc(JSON.stringify(data));
document.body.innerHTML = '<div id="app"></div>';
const root = client.createRoot(document.getElementById('app'));
root.render('<h1>Hello, world</h1>');
//# sourceMappingURL=index.js.map