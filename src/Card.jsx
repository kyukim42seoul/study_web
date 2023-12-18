import React from "react";
import styled from "styled-components";

const Card = (props) => {
	return (
		<StyledBox className="card">
			{props.children}
		</StyledBox>
	);
};

const StyledBox = styled.div`
	background-color : ${({$backgroundColor}) => $backgroundColor || "var(--main)"};
`;


export default Card;