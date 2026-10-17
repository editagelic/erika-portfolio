import { StrictMode, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';
import App from './App';
import './styles/global.css';

// Pregled bez servera (npr. jedna HTML datoteka) koristi MemoryRouter
const Router = import.meta.env.VITE_PREVIEW
  ? ({ children }: { children: ReactNode }) => <MemoryRouter initialEntries={['/hr']}>{children}</MemoryRouter>
  : BrowserRouter;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Router>
  </StrictMode>,
);
