import dispatcher from './dispatcher';
var EventEmitter = require( "events" ).EventEmitter;

var counter = 0;

var Store = Object.assign( { }, EventEmitter.prototype, {

  getCounter: function() {
    return counter;
  },

  emitChange: function() {
    this.emit( "change" );
  },

  addChangeListener: function( callback ) {
    this.on( "change", callback );
  },

  dispatcherIndex: dispatcher.register( function( action ) {
    switch ( action.type ) {
      case "INCREMENT":
        counter++;
        Store.emitChange( );
        break;
      case "DECREMENT":
        counter--;
        Store.emitChange( );
    }

    return true;
  } )

} );

module.exports = Store;
