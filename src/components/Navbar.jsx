import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

const Navbar = () => {
    return (
        <motion.nav 
            initial={{opacity:0,y:-20}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.5}}
            className='bg-blue-600 text-white p-4 flex justify-between'>
            <h1 className='text-xl font-bold'>Case Management</h1>
           {/* <Link to='/profile'>Profile</Link>*/} 

        </motion.nav>
    )
}

export default Navbar