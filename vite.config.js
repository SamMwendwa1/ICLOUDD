import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import commonjs from '@rollup/plugin-commonjs';


// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // ...
    jsx: {
      // enable the .js extension for JSX files
      factory: 'React.createElement',
      fragment: 'React.Fragment',
      // enable the JSX syntax extension for the specified files
      loader: {
        '.js': 'jsx',
        '.jsx': 'jsx'
      }
    }
  },
  plugins: [
    commonjs()
  ],
  optimizeDeps: {
    exclude: ['hoist-non-react-statics']
  },
  optimizeDeps: {
    exclude: ['@emotion/react']
  },
  plugins: [react()],
})

