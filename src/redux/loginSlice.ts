import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './store';

export interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}
interface LoginState {
  isLoggedIn: boolean;
  skipOnboarding: boolean;
  user: User | null;
}

const initialState: LoginState = {
  isLoggedIn: false,
  skipOnboarding: false,
  user: null,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLoginState: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    setSkipOnboardingState: (state, action: PayloadAction<boolean>) => {
      state.skipOnboarding = action.payload;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const {setLoginState, setSkipOnboardingState, setUser} =
  loginSlice.actions;

export const selectUser = (state: RootState) => state.login.user;
export const selectLoginState = (state: RootState) => state.login.isLoggedIn;
export const selectSkipOnboardingState = (state: RootState) =>
  state.login.skipOnboarding;

export default loginSlice.reducer;
