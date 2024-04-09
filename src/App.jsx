import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './components/Homepage';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
              <Header />
              <main>
                <Homepage />
              </main>
              <Footer />
            </div>,
    index: true, // Marks this as the default route
  },
  {
    path: "/about",
    element: <div>
              <Header />
              <main>
                <About />
              </main>
              <Footer />
            </div>,
  },
  {
    path: "/contact",
    element: <div>
              <Header />
              <main>
                <Contact />
              </main>
              <Footer />
            </div>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

