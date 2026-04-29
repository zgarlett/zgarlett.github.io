import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// If deploying to https://USERNAME.github.io/REPO-NAME, set base to '/REPO-NAME/'
// For a user/org page (USERNAME.github.io), set base to '/'
export default defineConfig({
  plugins: [react()],
  base: '/',
});
