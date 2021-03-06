const reducer = (state, action) => {
  switch (action.type) { //recibe el tipe y evaluarlo y saber lo que hago con el estdo
    case 'SET_FAVORITE': // nos permite manejar el set favorite
      return {
        ...state, //traigo el estado que ya tengo
        myList: [...state.myList, action.payload], //actualizo el my list le paso el action que va a guardar
      };
    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter((items) => items.id !== action.payload),
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
        playing: state.trends.find((item) => item.id === Number(action.payload)) ||
          state.originals.find((item) => item.id === Number(action.payload)) ||
          [],
      };

    default:
      return state; //si no coincide se deja como estaba
  }
};

export default reducer;
