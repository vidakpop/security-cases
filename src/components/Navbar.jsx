import {Link} from 'react-router-dom'

cosnt Navbar = () => {
    return (
        <nav className='bg-blue-600 text-white p-4 flex justify-between'>
            <h1 className='text-xl font-bold'>Case Management</h1>
            <Link to='/profile'>Profile</Link>

        </nav>
    )
}

export default Navbar