import React from "react";
import "./AwardCard.css";

function AwardCard({ award: { imgUrl, title, subtitle } }) {
	return (
		<div className='app__laurels_awards-card'>
			<img src={imgUrl} alt='award' />
			<div className='app__laurels_awards-card_content'>
				<p className='p__cormorant' style={{ color: "#DCCA87" }}>
					{title}
				</p>
				<p className='p__cormorant'>{subtitle}</p>
			</div>
		</div>
	);
}

export default AwardCard;
