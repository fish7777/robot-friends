import React from 'react';

const Card = ({ name, email, username ,id }) => {	
	return (
		<div className='bg-light-green dib br3 pa3 ma2 grow shadow-5'>

		<img alt='photo'src={`https://robohash.org/${id}?200x200`}/>

			<div>

		<h2>{name}</h2>
		<p>{email}</p>
		<p>{username}</p>

		</div>	
		</div>

	);
}

export default Card;

