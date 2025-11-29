import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Carrega variáveis de ambiente (como API_KEY)
  const env = loadEnv(mode, '.', '');
  
  return {
    plugins: [react()],
    // Garante que process.env.API_KEY funcione no código do navegador
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  };
});