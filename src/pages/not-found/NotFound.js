import { NavLink } from "react-router-dom"
import "./NotFound.scss"

export default function NotFound() {
	return (
		<div className="not-found flex--center flex--column">
			<h1>404</h1>
			<p>Oups! La page que vous demandez n'existe pas.</p>
			<NavLink to="/" className="nav-link">
				Retourner à l'accueil
			</NavLink>
		</div>
	)
}
