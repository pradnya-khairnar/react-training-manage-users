import { combineReducers, legacy_createStore as createStore } from "redux";

// design action-what want to do, (to mk it dynamic use function)
export const addUser = (userData) => {
  return {
    type: "add_user",
    payload: {
      data: userData,
    },
  };
};

// design reducer - how to handle/work state
// [] --here is inital state when reducer loads & not when action is dispatched
const userReducer = (currentState = [], action) => {
  if (action.type === "add_user") {
    console.log(currentState);
    const updatedState = [...currentState, action.payload.data];
    return updatedState;
  }
  return currentState;
};

// create store -has getState & dispatch
const states = combineReducers({
  users: userReducer,
});
const store = createStore(states);

export default store;
