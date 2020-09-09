export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.typer) {
    case "SET_USER":
      return {
        ...state,
        user: action.user
      };
      break;
    default:
      return state;
      break;
  }
};

export default reducer;
