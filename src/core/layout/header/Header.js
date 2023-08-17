import logo from "../../../assets/logo/LOGO.webp"
import smallLogo from "../../../assets/logo/LOGO-small.webp"
import "./Header.scss"
import { NavLink } from "react-router-dom"

export default function Header() {
	return (
		<header className="flex--between">
			<div className="logo-container">
				<img
					src={window.innerWidth > 768 ? logo : smallLogo}
					alt="Logo Kasa"
				/>
			</div>
			<nav className="flex">
				<NavLink className="nav-link" to="/">
					Accueil
				</NavLink>
				<NavLink className="nav-link" to="/about">
					À Propos
				</NavLink>
			</nav>
		</header>
	)
}
