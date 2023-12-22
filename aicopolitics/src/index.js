
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { UserContext } from './account/UserContext';
import './index.css';

const user = { id: '123',
name: 'John Doe',
email: 'john.doe@example.com',};
// any other user data you want to include in the context

ReactDOM.render(
  <React.StrictMode>
    <UserContext.Provider value={user}>
      <App />
    </UserContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);