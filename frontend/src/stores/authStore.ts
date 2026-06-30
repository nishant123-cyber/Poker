import { create } from 'zustand';

interface User {
  id: string;
  email: string;
  username: string;
  chipsBalance: number;
}

interface AuthStore {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, username: string, password: string) => Promise<void>;
  logout: () => void;
  setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  token: null,
  login: async (email: string, password: string) => {
    // Placeholder
    set({ user: { id: '1', email, username: email, chipsBalance: 10000 } });
  },
  register: async (email: string, username: string, password: string) => {
    // Placeholder
    set({ user: { id: '1', email, username, chipsBalance: 10000 } });
  },
  logout: () => {
    set({ user: null, token: null });
  },
  setUser: (user) => set({ user }),
}));
