import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ThemeProvider from './context/ThemeProvider.tsx';
import City from './components/fn_components/City.tsx';
import WeatherDashboard from './components/fn_components/WeatherDashboard.tsx';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/city/:cityName",
        element: <City />
      },
      {
        path: "/weather",
        element: <WeatherDashboard />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={appRouter} />
    </ThemeProvider>
  </StrictMode>,
)
