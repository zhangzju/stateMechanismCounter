import AppDispatcher from './dispatcher';

var Actions = {
  increment: function (){
    AppDispatcher.dispatch({
      actionType: 'INCREMENT'
    });
  },
  decrement: function (){
    AppDispatcher.dispatch({
      actionType: 'DECREMENT'
    });
  }
};
