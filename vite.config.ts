import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Carrega as variáveis de ambiente baseadas no modo (ex: produção)
  const env = loadEnv(mode, (process as any).cwd(), '');
  
  return {
    plugins: [react()],
    // Define process.env.API_KEY para funcionar no navegador
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  };
});