import {motion} from 'framer-motion'
import { div } from 'motion/react-client'

const Home = () => {
    return (
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1}}
            className='flex flex-col items-center justify-center h-screen bg-gray-950 text-white p-6'
        >
            <h1 className="text-4xl font-bold mb-4 neon-text">Welcome to Case Management</h1>
            <p className="text-lg text-gray-400">Manage, track, and analyze cases effortlessly.</p>

        </motion.div>
    )
}