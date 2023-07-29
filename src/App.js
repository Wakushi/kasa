import { Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/home/Home"
import HousingDetails from "./pages/housing/HousingDetails"
export default function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/housing" element={<HousingDetails />} />
			</Routes>
		</Layout>
	)
}
