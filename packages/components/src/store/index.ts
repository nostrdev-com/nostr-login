import { createStore } from '@stencil/store';
import { CURRENT_MODULE } from '@/types';

const { state, onChange, on, reset } = createStore({
  screen: CURRENT_MODULE.WELCOME,
  prevScreen: CURRENT_MODULE.WELCOME,
  error: '',
  isLoading: false,
  authUrl: '',

  // State NlSignin
  nlSignin: {
    loginName: '',
  },

  // State NlSignup
  nlSignup: {
    signupName: '',
    domain: '',
    servers: [
      { name: '@nsec.app', value: 'nsec.app' },
      { name: '@highlighter.com', value: 'highlighter.com' },
    ],
  },

  // State NlSigninBunkerUrl
  nlSigninBunkerUrl: {
    loginName: '',
  },

  // State NlSigninReadOnly
  nlSigninReadOnly: {
    loginName: '',
  },
});

// control show screens & manage history (like as router)
// ??? edit to better solution
onChange('screen', (value: CURRENT_MODULE) => {
  state.error = '';
  state.nlSignin.loginName = '';
  state.nlSignup.signupName = '';
  state.nlSignup.domain = '';

  if (value === CURRENT_MODULE.SIGNIN || value === CURRENT_MODULE.SIGNUP || value === CURRENT_MODULE.SIGNIN_BUNKER_URL || value === CURRENT_MODULE.SIGNIN_READ_ONLY) {
    state.prevScreen = CURRENT_MODULE.WELCOME;
  }
});

on('set', (_, value, oldValue) => {
  if (value === CURRENT_MODULE.INFO) {
    state.prevScreen = oldValue;
  }
});

export { state, reset };
