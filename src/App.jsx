import React from 'react';

import './App.scss';

import Input from './components/Input';
import CardList from './components/CardList';
import ButtonList from './components/ButtonList';
import Footer from './components/Footer';

const App = () => (
  <div>
    <Input />
    <CardList />
    <ButtonList />
    <Footer />
  </div>
);

export default App;
