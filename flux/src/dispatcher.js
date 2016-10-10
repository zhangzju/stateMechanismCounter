import { Dispatcher } from 'flux';

class DispatcherClass extends Dispatcher {

  handleIncrementAction(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action,
    });
  }

  handleDecrementAction(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action,
    });
  }
}

const AppDispatcher = new DispatcherClass();

export default AppDispatcher;
