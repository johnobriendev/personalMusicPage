import { Link } from "react-router-dom"

export default function Header() {
    return(
        <header className="shadow-md w-full fixed top-0 left-0">
            <nav className="md:flex bg-white py-4 items-center">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
        </header>
    )
}