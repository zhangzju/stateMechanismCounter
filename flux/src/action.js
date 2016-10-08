import AppDispatcher from './dispatcher';

var ButtonActions = {
  increment: function (text){
    AppDispatcher.dispatch({
      actionType: 'INCREMENT',
      text: text
    });
  },
};
