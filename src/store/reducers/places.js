
const initialState = {
  places: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PLACE":
      return { 
        ...state,
        places: state.places.concat(action.newPlace)
    }
    default:
      return state;
  }
}