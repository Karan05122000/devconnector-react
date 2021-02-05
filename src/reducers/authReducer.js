const initialState = {
  user: {},
  isAuthenticated: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'TEST_DISPATCH':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}
