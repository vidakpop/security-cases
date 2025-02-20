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

        </motion.div>
    )
}