import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Sidebar = () => {
    return (
        <motion.div 
            initial={{x:-100}}
            animate={{x:0}}
            transition={{duration:0.5}} 
            className="W-64 BG-GRAY-800 h-screen text-white p-4">
            <h2 className="text-lg font-bold">Menu</h2>
            <ul>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/cases">Cases</Link></li>
            </ul>

        </motion.div>
    )
} 
export default Sidebar