import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
var Dispatcher = require( "./dispatcher" );
var Store = require( "./store" );


var incrementButton = document.querySelector( "#increment" );
var decrementButton = document.querySelector( "#decrement" );

incrementButton.addEventListener( "click", () => {
    Dispatcher.dispatch( { type: "INCREMENT" } );
} );
decrementButton.addEventListener( "click", () => {
    Dispatcher.dispatch( { type: "DECREMENT" } );
} );

Store.addChangeListener( render );
render( );

function render( ) {
    document.querySelector( "#counter" ).innerHTML = Store.getCounter( );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
