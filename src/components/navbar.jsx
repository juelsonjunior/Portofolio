import { Link } from 'react-scroll';
function Navbar() {
    return (
        <>
            <div className="w-4/5 bg-slate-900 text-white flex items-center justify-center md:justify-between h-14 rounded-full p-5">
                <div className='hidden md:flex'>
                    <img src="../../logo.png" alt="" />
                </div>
                <nav className="">
                    <ul className="flex gap-5">
                        <li className="link-navbar">
                            <Link
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="link-navbar">
                            <Link
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                            >
                                Sobre
                            </Link>
                        </li>
                        <li className="link-navbar">
                            <Link
                                to="project"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                            >
                                Projecto
                            </Link>
                        </li>
                        <li className="link-navbar">
                            <Link
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-40}
                                duration={500}
                            >
                                Contacto
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}
export default Navbar;
