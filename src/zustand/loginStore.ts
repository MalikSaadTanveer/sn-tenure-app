// loginStore.ts
import create, { SetState } from 'zustand';
import axios from 'axios';

// TypeScript types for the state
interface LoginState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

// TypeScript type for the user data (adjust according to your API response)
interface User {
  username: string;
  // Add other properties if needed (e.g., email, id, etc.)
}

// TypeScript type for the actions
interface LoginActions {
  login: (username: string, password: string) => Promise<void>;
}

const loginStore = create<LoginState & LoginActions>((set: SetState<LoginState>) => ({
  user: null,
  loading: false,
  error: null,
  login: async (username: string, password: string) => {
    set({ loading: true, error: null });

    try {
      // Make the API call to login using axios
      const response = await axios.post('http://165.22.227.242:4000/api/register', { username, password });

      // Assuming the API response contains the user data upon successful login
      const user: User = response.data;

      set({ user, loading: false });
    } catch (error) {
      set({ error: 'Login failed. Please check your credentials.', loading: false });
    }
  },
}));

export default loginStore;
