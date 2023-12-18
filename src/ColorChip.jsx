// @ts-nocheck
import React from "react";
import styled from "styled-components";

const ColorChip = (props) => {
	return (
		<StyledChip $backgroundColor={props.backgroundColor} {...props}>
			{props.children}
		</StyledChip>
	);
};

const StyledChip = styled.div`
	background-color : ${({$backgroundColor}) => $backgroundColor || "var(--main)"};
`;

export default ColorChip