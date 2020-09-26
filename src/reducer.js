export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: "BQBrtlTgxD_c8mFRMOn_5DvNmPckG5ISRda12FZO863VqMqDg3xapazt3pQbPUhTazgp-Wl4pU8SL1OE1Xjhw-CuLZQXyoUnxwtKtQiXyMyEo2ktVAXal8wN4zuxyYIXhlkZMkVb_RVI7oJSpiJE9tbUvwlo",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user
      };

    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token
      };

      case "SET_PLAYLISTS":
        return {
          ...state,
          playlists: action.playlists,
        };

    default:
      return state;
  }
};

export default reducer;
