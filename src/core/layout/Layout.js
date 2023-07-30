import Footer from "./footer/Footer"
import Header from "./header/Header"

export default function Layout(props) {
	return (
		<div className="layout">
			<Header />
			<main>{props.children}</main>
			<Footer />
		</div>
	)
}
