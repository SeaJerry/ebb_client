import { createContext, useEffect, useReducer } from "react";
import LoginReducer from "./Reducer";

// After login, if successful the initial state is going to be updated and the user object: username, email, password. Then the user can be used in any of the components and pages.
const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

export const Context = createContext(INITIAL_STATE);



// children references the components

// Three main processes when login
// 1. send username and password / credentials
// 2. if successful we will take the user information and update the INITIAL STATE
// 3. if not successful the user state will remain null but the error will change to true

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(LoginReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user))
}, [state.user])



  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
