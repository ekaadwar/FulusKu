const initProfile = {
  profile: {},
};

export const profileReducer = (state = initProfile, action) => {
  switch (action.type) {
    case "SET_PROFILE":
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
