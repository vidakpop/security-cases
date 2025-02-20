import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"


const App = () => {
   return (
    <Router>
      <Navbar/>
      <div className="flex">
        <Sidebar/>

      </div>
    </Router>
   )
}
export default App