import React from "react";
import styled from "styled-components";
import dp from "../../assets/dp.png";
import curve1 from "../../assets/firstSectionBottomLeftCurve.svg";
import curve2 from "../../assets/firstSectionTopCurve.svg";
import curve3 from "../../assets/firstSectionBottomRight.svg";

export const Header = () => {
	return (
		<Wrapper>
			<FirstSection>
				<DisplayPictureDiv>
					<DisplayPicture src={dp} alt="dp" />
				</DisplayPictureDiv>
				<GreetingsDiv>
					<Greetings>Hello, </Greetings>
					<Name>Oluwatobi</Name>
				</GreetingsDiv>
			</FirstSection>
			<SecondSection>
				<SecondSectionContentDiv>
					<SecondSectionContent>
						<Title>Available Balance</Title>
						<Content>₦1,063,345.04</Content>
					</SecondSectionContent>
					<SecondSectionContent>
						<Title>Impact Investments</Title>
						<Content>₦1,007,345.04</Content>
					</SecondSectionContent>
					<SecondSectionContent>
						<Title>Total Savings</Title>
						<Content>₦2,007,345.04</Content>
					</SecondSectionContent>
					<SecondSectionContent>
						<Title>Total Returns</Title>
						<Content>₦56,000.00</Content>
					</SecondSectionContent>
				</SecondSectionContentDiv>
				<Curve1 src={curve1} alt="curve 1" />
				<Curve2 src={curve2} alt="curve 2" />
				<Curve3 src={curve3} alt="curve 3" />
			</SecondSection>
		</Wrapper>
	);
};

const Wrapper = styled.div``;

const FirstSection = styled.div`
	display: flex;
	margin-bottom: 3%;
`;

const DisplayPictureDiv = styled.div``;
const DisplayPicture = styled.img``;

const GreetingsDiv = styled.div`
	color: #b4b5c1;
	margin-left: 2%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`;

const Greetings = styled.p`
	font-size: 14px;
	font-weight: 400;
`;

const Name = styled.p`
	font-size: 18px;
	font-weight: 700;
`;

const SecondSection = styled.div`
	background-color: #e2698d;
	width: 100%;
	height: 200px;
	border-radius: 12px;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
    
	@media screen and (max-width: 515px) {
		height: fit-content;
	}
`;

const SecondSectionContentDiv = styled.div`
	display: flex;
	justify-content: space-between;
	height: 60px;
	width: 80%;
	z-index: 10;

	@media screen and (max-width: 1100px) {
		flex-wrap: wrap;
		height: fit-content;
	}

	@media screen and (max-width: 815px) {
		width: 90%;
	}
`;

const SecondSectionContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: fit-content;

	@media screen and (max-width: 1100px) {
		width: 45%;
		text-align: center;
		margin: 10px;
	}
    
	@media screen and (max-width: 515px) {
		width: 90%;
        z-index: 10;
	}
`;

const Title = styled.p`
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	color: #fafafa;
`;

const Content = styled.p`
	font-weight: 700;
	font-size: 20px;
	line-height: 24px;
	letter-spacing: 0.02em;
	color: #ffffff;
`;

const Curve1 = styled.img`
	position: absolute;
	bottom: 0;
	left: 0;
	border-bottom-left-radius: 12px;

    @media screen and (max-width: 375px) {
        width: 50%;
    }
`;
const Curve2 = styled.img`
	position: absolute;
	top: 0;
	left: 36.5%;
	width: 43%;
`;
const Curve3 = styled.img`
	position: absolute;
	bottom: 0;
	right: 17.5%;
`;
