import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
ReactDom.render(
    <App >
      {alert("Before you search something lets check the season !\nAlso allow your location")}
    </App>
  ,
  document.querySelector("#root"));