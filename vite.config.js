// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/pomodoro-technique-timer/', // Adjust this path according to your GitHub Pages setup
  plugins: [react()],
});
