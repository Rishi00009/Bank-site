     import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className='bg-black flex items-center '>
        <Link to="/">
        <button className="text-white mr-5">
            Home
        </button>
        </Link>
        <Link to="/intro">
        <button className="text-white mr-5">
            Intro
        </button>
        </Link>
        <Link to="/overview">
        <button className="text-white mr-5">
            Overview
        </button>
        </Link>
        <Link to="/types">
        <button className="text-white mr-5">
            Types
        </button>
        </Link>
        <Link to="/loans">
        <button className="text-white mr-5">
            Loans
        </button>
        </Link>
        </div>
    )
}