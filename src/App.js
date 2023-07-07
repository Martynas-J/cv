import { Link, Route, Routes } from "react-router-dom";
import Cv from "./Pages/Cv";
import FormPage from "./Pages/FormPage/FormPage";

function App() {
  return (
    <div className="body">
      <Routes>
        <Route path='/' element={<Cv />} />
        <Route path='/form' element={<FormPage />} />
        <Route path='/form/:edit' element={<FormPage />} />

        <Route path='*' element={
          <div>
            <h1>Page not found</h1>
            <span><Link to='/'>Back To Home Page</Link></span>
          </div>
        } />
      </Routes>
    </div >
  )
}

export default App;
