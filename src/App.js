
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Summary from './Components/Summary/Summary';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Home></Home> },
    { path: '/home', element: <Home></Home> },
    {
      path: '/summary/:id',
      loader: async ({ params }) => {
        return fetch(`https://api.tvmaze.com/shows/${params.id}`)

      },
      element: <Summary></Summary>
    },

  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
