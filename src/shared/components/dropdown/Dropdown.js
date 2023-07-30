import { useState } from "react"
import "./Dropdown.scss"

export default function Dropdown({ details, title, type }) {
	const [isExpanded, setIsExpanded] = useState(false)
	const collapseContent = document.getElementById(
		type === "list" ? "collapse-content-list" : `collapse-content-${title}`
	)

	const cardArrowStyles = {
		transform: isExpanded ? "rotate(-180deg)" : ""
	}
	const collapseStyle = {
		height: isExpanded ? collapseContent.offsetHeight + "px" : "0"
	}

	function toggleExpansion() {
		setIsExpanded((prevIsExpanded) => (prevIsExpanded = !prevIsExpanded))
	}

	return (
		<div className="collapse">
			<div
				className="collapse-head flex--between"
				onClick={toggleExpansion}
			>
				<span> {title} </span>
				<i
					className="fa-solid fa-chevron-up"
					style={cardArrowStyles}
				></i>
			</div>

			<div className="collapse-content" style={collapseStyle}>
				{type !== "list" && (
					<p id={`collapse-content-${title}`}>{details}</p>
				)}
				{type === "list" && (
					<ul id="collapse-content-list">
						{details.map((detail) => {
							return <li key={detail}> {detail} </li>
						})}
					</ul>
				)}
			</div>
		</div>
	)
}
