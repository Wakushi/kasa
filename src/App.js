import { Routes, Route } from "react-router-dom"
import Layout from "./core/layout/Layout"
import Home from "./pages/home/Home"
import HousingDetails from "./pages/housing/HousingDetails"
import NotFound from "./pages/not-found/NotFound"
import About from "./pages/about/About"
export default function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/housing/:houseId" element={<HousingDetails />} />
				<Route path="/about" element={<About />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Layout>
	)
}
