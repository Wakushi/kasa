import Footer from "./footer/Footer"
import Header from "./header/Header"
import "./Layout.scss"

export default function Layout(props) {
	return (
		<div className="layout flex--column">
			<Header />
			<main>{props.children}</main>
			<Footer />
		</div>
	)
}
