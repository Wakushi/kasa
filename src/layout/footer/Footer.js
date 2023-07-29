import whiteLogo from "../../assets/logo/LOGO-white.webp"
import "./Footer.scss"

export default function Footer() {
	return (
		<footer className="flex--center flex--column">
			<div className="logo-container">
				<img src={whiteLogo} alt="Logo Kasa" />
			</div>
			<p>© 2020 Kasa. All rights reserved</p>
		</footer>
	)
}
