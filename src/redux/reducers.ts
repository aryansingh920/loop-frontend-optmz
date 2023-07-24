import { combineReducers, Reducer } from "redux";

// Define the state types
interface CounterState {
  counter: number;
}

// Define action types
interface IncrementAction {
  type: "INCREMENT";
}

interface DecrementAction {
  type: "DECREMENT";
}

// Define a union type of all possible action types
type CounterAction = IncrementAction | DecrementAction;

// Define the initial state
const initialState: CounterState = { counter: 0 };

// Create the counter reducer
const counterReducer: Reducer<CounterState, CounterAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

// Combine all reducers into a single rootReducer
const rootReducer = combineReducers({
  counter: counterReducer,
  // Add more reducers here if needed
});

export default rootReducer;
