import AppDispatcher from './dispatcher';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let store = {
  number: 0
};

class StoreClass extends EventEmitter {

  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  }

  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }

  getList() {
    return store;
  }

}

const CountStore = new StoreClass();

AppDispatcher.register((payload) => {
  const action = payload.action;

  switch (action.actionType) {

  case 'INCREMENT':
    store.number +=1;
    CountStore.emit(CHANGE_EVENT);
    break;

  case 'DECREMENT':
    store.number -=1;
    CountStore.emit(CHANGE_EVENT);
    break;


  default:
    return true;
  }
});


module.exports = CountStore;
