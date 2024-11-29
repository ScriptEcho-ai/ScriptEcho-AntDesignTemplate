import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HelloWorld from '../views/scriptecho/HelloWorld';
 
const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HelloWorld />} />
    </Routes>
  </BrowserRouter>
);
 
export default Router;