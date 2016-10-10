import AppDispatcher from './dispatcher';


export function  increment(){
    AppDispatcher.handleIncrementAction({
      actionType: 'INCREMENT'
    });
  }

export function  decrement(){
    AppDispatcher.handleIncrementAction({
      actionType: 'DECREMENT'
    });
  }
