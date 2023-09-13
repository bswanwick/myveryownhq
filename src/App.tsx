import './App.css';

import firebase, { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInAnonymously, User } from 'firebase/auth';
import { collection, getFirestore } from 'firebase/firestore';
import { useState } from 'react';

import logo from './logo.svg';

const firebaseConfig = {
  apiKey: 'AIzaSyDRZuDB6eIDLYpvEKYMfPza9__D76n_ToI',
  authDomain: 'myveryownhq.firebaseapp.com',
  databaseURL: 'https://myveryownhq-default-rtdb.firebaseio.com',
  projectId: 'myveryownhq',
  storageBucket: 'myveryownhq.appspot.com',
  messagingSenderId: '1073445984840',
  appId: '1:1073445984840:web:4e3f88374066e4f8ce567d',
  measurementId: 'G-RJP4DLFKGD',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

onAuthStateChanged(auth, (user) => {
  console.log('[myveryownhq] onAuthStateChanged: ', { user });
  if (user != null) {
    syncData(user);
  }
});

function syncData(user: User) {
  const messagesRef = collection(db, `messages/${user.uid}`);
  console.log('[myveryownhq] syncData: ', { messagesRef });
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="header">
          🚀 Vite + React + Typescript 🤘 & <br />
          Eslint 🔥+ Prettier
        </p>

        <div className="body">
          <button onClick={() => setCount((count) => count + 1)}>
            🪂 Press to increment: {count}
          </button>

          <button onClick={() => signInAnonymously(auth)}>🪂 Login Anonymously</button>
          <code>{JSON.stringify({ auth, db })}</code>
          <p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {' | '}
            <a
              className="App-link"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
