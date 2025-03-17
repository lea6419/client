import React, { createContext, useReducer } from "react";
import { User } from "../mpdels/models";

// סוגים לפרטי המשתמש

// סוגים לפעולות Reducer
type Action =
  | { type: "LOGIN"; payload: User }
  | { type: "LOGOUT" }
  | { type: "UPDATE"; payload: Partial<User> };

// סוג עבור ה-State
type UserState = {
  user: User | null;
};

// מצב התחלתי
const initialState: UserState = { user: null };

// Reducer לניהול פעולות
const userReducer = (state: UserState, action: Action): UserState => {
  switch (action.type) {
    case "LOGIN": {
      console.log(action.payload);
      return { user: action.payload };
    }
    case "LOGOUT":
      return { user: null };
    case "UPDATE":
      return { user: { ...state.user, ...action.payload } as User };
    default:
      return state;
  }
};

// סוג עבור ערך ה-Context
type UserContextType = {
  state: UserState;
  dispatch: React.Dispatch<Action>;
};

// יצירת Context
export const UserContext = createContext<UserContextType>({
  state: initialState,
  dispatch: () => {},
});

// Provider ל-App
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};