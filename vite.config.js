// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


// vite.config.js

import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { VitePWA } from 'vite-plugin-pwa';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [
    reactRefresh(),
    VitePWA(),
    tailwindcss('./tailwind.config.js') // Add this line
  ],
});
