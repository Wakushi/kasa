import { Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/home/Home"
export default function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</Layout>
	)
}
