const initialState = {
  counter: 0,
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      // make a copy of the original state:
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      // return new state without mutating original state
      return newState;
    case "DECREMENT":
      return {
        // distribute the old state and overwrite the counter, without touching results object
        ...state,
        counter: state.counter - 1,
      };
    case "ADD":
      return {
        ...state,
        counter: state.counter + action.val,
      };
    case "SUBTRACT":
      return {
        ...state,
        counter: state.counter - action.val,
      };
    case "STORE_RESULT":
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter }), 
        // while push() manipulates the original value
        // (even using spread operator, it doesn't prevent from touching original object),
        // concat() returns a new array (old array + argumet, added to concat):
      };
      case "DELETE_RESULT":
        // const id = 2;
        // const newArray = [...state.results];
        // newArray.splice(id, 1);
        const updatedArray = state.results.filter(result => result.id !== action.resultElId);
        // filter() RETURNS A NEW ARRAY AND DOESN'T TOUCHES THE OLD ONE,
        // It takes a function as an input
        return {
          ...state,
          results: updatedArray
        }
  }

  return state;
};

export default reducer;
