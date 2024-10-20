import "./InfoCard.css";

const InfoCard = ({ image, name, description }) => {
	return (
		<div className="info-card">
			<div className="profile-image-container">
				<img src={image} alt={name} className="profile-image" />
			</div>
			<h2 className="info-name">{name}</h2>
			<p className="info-description">{description}</p>
		</div>
	);
};

export default InfoCard;
