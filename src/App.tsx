import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import HeaderText from './components/HeaderText';
import SearchForm from './components/SearchForm';
import { store } from "./state"

function App() {
  return (
    <Provider store={store}>
      <HeaderText />
      <SearchForm />
    </Provider>
  );
}

export default App;
