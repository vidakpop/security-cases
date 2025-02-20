import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

const Navbar = () => {
    return (
        <motion.nav 
            initial={{opacity:0,y:-20}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.5}}
            className='bg-gray-900 bg-opacity-80 backdrop-blur-md text-white p-4 flex justify-between items-center fixed top-0 w-full z-50 shadow-lg'>
            <h1 className='text-2xl font-bold tracking-wide neon-text'>Case Management</h1>
            <div className='space-x-4'>
                <Link to='/' className='hover:text-blue-400'>Home</Link>
                <Link to='/cases' className='hover:text-blue-400'>Cases</Link>
                <Link to='/profile' className='hover:text-blue-400'>Profile</Link>

            </div>
          

        </motion.nav>
    )
}

export default Navbar