import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

const Navbar = () => {
    return (
        <motion.nav 
            initial={{opacity:0,y:-20}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.5}}
            className='bg-gray-900 bg-opacity-80 backdrop-blur-md text-white p-4 flex justify-between items-center fixed top-0 w-full z-50 shadow-lg'>
            <h1 className='text-xl font-bold'>Case Management</h1>
           {/* <Link to='/profile'>Profile</Link>*/} 

        </motion.nav>
    )
}

export default Navbar