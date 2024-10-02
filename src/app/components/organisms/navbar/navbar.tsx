import Link from "next/link";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import "./navbar.css";

export function NavbarComponent() {
    return (
        <Navbar className="navbar-sticky bg-gradient-to-r from-valracol-red to-valracol-dark">
            <NavbarBrand as={Link} href="/" className="transition ease-in-out hover:scale-110">
                <img src="/logoValracol.webp" className="mr-3 h-6 sm:h-9" alt="Logo Valracol" />
                <span className="self-center whitespace-nowrap text-2xl font-bold dark:text-white">VALRACOL</span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                <NavbarLink className="navbar-link_text text-lg sm:text-sm mr-2" href="#">Quiénes somos</NavbarLink>
                <NavbarLink className="navbar-link_text text-lg sm:text-sm mr-2" href="#">Productos</NavbarLink>
                <NavbarLink className="navbar-link_text text-lg sm:text-sm mr-2" href="#">Cotizaciones</NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
}
export default NavbarComponent;