import { Link } from "react-router-dom"
import Form from "./Form"
import {BiCameraMovie} from 'react-icons/bi'
import './Navbar.css'


const Navbar = () => {
    

    return (
        <div>
            <nav className='navbar'>
                <h2>
                    <Link to='/'><BiCameraMovie/> Movies </Link>
                </h2>
                <Form />
            </nav>

        </div>
    )
}

export default Navbar