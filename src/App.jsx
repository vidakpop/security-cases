import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Home from "./pages/Home"
import Cases from "./pages/Cases"


const App = () => {
   return (
    <Router>
      <Navbar/>
      <div className="flex">
        <Sidebar/>
        <div className="flex-grow p-4 md:ml-64">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/cases" element={<Cases />}/>
          </Routes>

        </div>

      </div>
    </Router>
   )
}
export default App