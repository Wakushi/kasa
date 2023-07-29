export default function HousingList() {
	const [housingData, setHousingData] = useState([])

	function getHousingData() {
		setHousingData(housingData)
	}

	useEffect(() => {
		getHousingData()
	}, [])

	return (
		<>
			<div></div>
		</>
	)
}
