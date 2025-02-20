import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Sidebar = () => {
    return (
        <motion.div 
            initial={{x:-100}}
            animate={{x:0}}
            transition={{duration:0.5}} 
            className="w-64 bg-gray-900 h-screen text-white fixed left-0 top-0 pt-20 p-4 shadow-lg hidden md:block">
            <h2 className="text-lg font-bold mb-4 neon-text">Navigation</h2>
            <ul className="space-y-2">
                     <li><Link to="/" className="hover:text-blue-400">🏠 Home</Link></li>
                    <li><Link to="/cases" className="hover:text-blue-400">📂 Cases</Link></li>
                    <li><Link to="/activity-log" className="hover:text-blue-400">📜 Activity Log</Link></li>
                    <li><Link to="/profile" className="hover:text-blue-400">👤 Profile</Link></li>
            </ul>

        </motion.div>
    )
} 
export default Sidebar