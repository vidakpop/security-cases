import { Link } from "react-router-dom"

const Sidebar = () => {
    return (
        <div className="W-64 BG-GRAY-800 h-screen text-white p-4">
            <h2 className="text-lg font-bold">Menu</h2>
            <ul>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/cases">Cases</Link></li>
            </ul>

        </div>
    )
} 
