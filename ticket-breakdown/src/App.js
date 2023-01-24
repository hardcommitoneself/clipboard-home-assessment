import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Main } from "./pages/main";
import { Report } from "./pages/report";
import {  loader as shiftsLoader } from "./pages/report";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />
  },
  {
    path: 'report/:facility_id',
    element: <Report />,
    loader: shiftsLoader
  }
]);

function App() {

  return (
    <div className="container flex flex-col gap-5 max-w-4xl mx-auto mt-10">
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
