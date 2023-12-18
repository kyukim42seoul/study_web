import React from "react";
import styled from "styled-components";

const CardFooter = () => {
	return (
	<StyledCardFooter className='card-footer'>
		<div className='icon-wrapper'>
			<a>
				<img src="./Heart.png" className='icon'></img>
				<span className='count'>157</span>
			</a>
		</div>
		<div className='icon-wrapper'>
			<a>
				<div className='icon'></div>
				<span className='count'>157</span>
			</a>
		</div>
		<div className='icon-wrapper'>
			<a>
				<div className='icon'></div>
				<span className='count'>157</span>
			</a>
		</div>
	</StyledCardFooter>
	);
};

const StyledCardFooter = styled.div`
	display: flex;
	margin: 0;
	> * {
		flex-grow: 1;
	}
	img {
		margin: 0;
		padding-right: 0.5rem;
		width: 1rem;
		height: 1rem;
	}
`;

export default CardFooter;