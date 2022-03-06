import React from "react";
import styled from "styled-components";
import piggyBank from "../../assets/piggyBank.svg";
import savingsPlanGirl from "../../assets/savingsPlanGirl.svg";
import femaleFarmer from "../../assets/femaleFarmer.svg";
import inviteGirlsToHervest from "../../assets/inviteGirlsToHervest.svg";
import chevron from "../../assets/chevron.svg";

export const Body = () => {
	return (
		<Wrapper>
			<div>
				<HeaderTitle>Watch your plans</HeaderTitle>
				<HeaderSubTitle>A goal without a plan is just a wish</HeaderSubTitle>
			</div>
			<SavingsCardSection className="relative">
				<SavingsCard>
					<SavingsCardTitleDiv>
						<SavingsCardIconDiv>
							<img src={piggyBank} alt="piggy bank" />
						</SavingsCardIconDiv>
						<SavingsCardTitle>Saving for rainy days</SavingsCardTitle>
					</SavingsCardTitleDiv>
					<SavingsCardBody className="saving-card-body">
						<SavingsCardBodyText>
							<span>N400.000</span>
						</SavingsCardBodyText>
						<HiddenP>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla molestiae, obcaecati ducimus autem dolore omnis expedita explicabo alias ex odio perspiciatis ut dolorum ab
							ratione debitis sunt sapiente nisi quod.
						</HiddenP>
					</SavingsCardBody>
				</SavingsCard>
				<SavingsCard>
					<SavingsCardTitleDiv>
						<SavingsCardIconDiv>
							<img src={piggyBank} alt="piggy bank" />
						</SavingsCardIconDiv>
						<SavingsCardTitle>Saving for rainy days</SavingsCardTitle>
					</SavingsCardTitleDiv>
					<SavingsCardBody className="saving-card-body">
						<SavingsCardBodyText>
							<span>N400.000</span>
						</SavingsCardBodyText>
						<HiddenP>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla molestiae, obcaecati ducimus autem dolore omnis expedita explicabo alias ex odio perspiciatis ut dolorum ab
							ratione debitis sunt sapiente nisi quod.
						</HiddenP>
					</SavingsCardBody>
				</SavingsCard>
				<SavingsCard>
					<SavingsCardTitleDiv>
						<SavingsCardIconDiv>
							<img src={piggyBank} alt="piggy bank" />
						</SavingsCardIconDiv>
						<SavingsCardTitle>Saving for rainy days</SavingsCardTitle>
					</SavingsCardTitleDiv>
					<SavingsCardBody className="saving-card-body">
						<SavingsCardBodyText>
							<span>N400.000</span>
						</SavingsCardBodyText>
						<HiddenP>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla molestiae, obcaecati ducimus autem dolore omnis expedita explicabo alias ex odio perspiciatis ut dolorum ab
							ratione debitis sunt sapiente nisi quod.
						</HiddenP>
					</SavingsCardBody>
					<ChevronDiv>
						<img src={chevron} alt="chevron" />
					</ChevronDiv>
				</SavingsCard>
			</SavingsCardSection>
			<PlansSection>
				<PlansCard stage={1}>
					<PlansTextDiv>
						<PlansTitle stage={1}>Create a savings plan</PlansTitle>
						<PlansSubTitle>Earn up to 12%</PlansSubTitle>
					</PlansTextDiv>
					<PlansImg stage={1} src={savingsPlanGirl} alt="plan 1" />
				</PlansCard>
				<PlansCard stage={2}>
					<PlansTextDiv>
						<PlansTitle>Invest in a Female Farmer</PlansTitle>
						<PlansSubTitle>Get up to 25% returns per anum</PlansSubTitle>
					</PlansTextDiv>
					<PlansImg stage={2} src={femaleFarmer} alt="plan 2" />
				</PlansCard>
				<PlansCard stage={3}>
					<PlansTextDiv>
						<div>
							<PlansTitle stage={3}>Invite your girls to HerVest</PlansTitle>
							<PlansSubTitle stage={3}>Share you girl code.</PlansSubTitle>
						</div>
						<BtnAndShare>
							<Button>HG7FIB</Button>
							<Share>Share</Share>
						</BtnAndShare>
					</PlansTextDiv>
					<PlansImg stage={3} src={inviteGirlsToHervest} alt="plan 3" />
				</PlansCard>
			</PlansSection>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	margin-top: 6%;

	.relative {
		position: relative;
	}

	/* width */
	.saving-card-body::-webkit-scrollbar {
		width: 6px;
		height: 6px;
	}

	/* Track */
	.saving-card-body::-webkit-scrollbar-track {
		box-shadow: inset 0 0 5px #265859;
		border-radius: 10px;
	}

	/* Handle */
	.saving-card-body::-webkit-scrollbar-thumb {
		background-color: #265859;
		border-radius: 10px;
	}

	/* Handle on hover */
	.saving-card-body::-webkit-scrollbar-thumb:hover {
		background-color: #265859;
	}
`;

const HeaderTitle = styled.p`
	font-weight: 800;
	font-size: 32px;
	line-height: 39px;
	letter-spacing: -0.02em;
	color: #b4b5c1;
`;

const HeaderSubTitle = styled.p`
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	letter-spacing: 0.02em;
	color: #b4b5c1;
	margin-top: 1%;
`;

const SavingsCardSection = styled.div`
	display: flex;
	margin-top: 5%;
	justify-content: space-between;

	@media screen and (max-width: 1100px) {
		flex-wrap: wrap;
	}
`;

const SavingsCard = styled.div`
	background: #ffffff;
	border-radius: 12px;
	border: 1px solid #b4b5c1;
	width: 31%;
	height: 180px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	overflow: hidden;

	@media screen and (max-width: 1100px) {
		width: 47%;
		margin: 10px 0;
	}

	@media screen and (max-width: 515px) {
		width: 100%;
	}
`;

const SavingsCardTitleDiv = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 2%;
`;

const SavingsCardIconDiv = styled.div`
	background-color: #c2eff0;
	width: 60px;
	height: 60px;
	display: flex;
	justify-content: center;
	padding: 17px;
	border-radius: 50%;
`;

const SavingsCardTitle = styled.p`
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;
	letter-spacing: 0.02em;
	color: #000000;
	margin-left: 10px;
`;

const SavingsCardBody = styled.div`
	display: -webkit-box;
	overflow-x: scroll;
	overflow-y: hidden;
`;

const SavingsCardBodyText = styled.p`
	font-weight: 800;
	font-size: 24px;
	line-height: 29px;
	color: #000000;
	display: flex;
	align-items: center;
`;

const HiddenP = styled.p`
	visibility: hidden;
`;

const PlansSection = styled(SavingsCardSection)`
	margin-top: 5%;
	margin-bottom: 15%;
`;

const PlansCard = styled(SavingsCard)`
	border: none;
	background-color: ${({ stage }) => (stage === 1 ? "#E2698D" : stage === 2 ? "#265859" : stage === 3 ? "#F2F1F3" : "")};
	flex-direction: row;
	position: relative;
	height: 190px;
`;

const PlansTextDiv = styled.div`
	width: 55%;
`;

const PlansTitle = styled.p`
	font-size: 16px;
	line-height: 20px;
	letter-spacing: -0.11008px;
	font-weight: 800;
	color: ${({ stage }) => (stage === 3 ? "#E2698D" : "#ffffff")};
	width: ${({ stage }) => (stage === 2 ? "140px" : "")};
`;

const PlansSubTitle = styled.p`
	font-weight: 600;
	font-size: 10px;
	line-height: 12px;
	letter-spacing: -0.24px;
	color: ${({ stage }) => (stage === 3 ? "#37474F" : "#fbeaef")};
	margin-top: 2%;
`;

const PlansImg = styled.img`
	width: fit-content;
	display: inline-block;
	position: absolute;
	left: ${({ stage }) => (stage === 1 ? "42%" : "")};
	right: ${({ stage }) => (stage === 2 ? "2%" : stage === 3 ? 0 : "")};
	top: ${({ stage }) => (stage === 2 ? "22%" : "")};

	@media screen and (max-width: 922px) {
		width: 50%;
	}
`;

const BtnAndShare = styled.div`
	display: flex;
	margin-top: 42%;
	align-items: center;

	@media screen and (max-width: 912px) {
		margin-top: 25%;
	}
`;

const Button = styled.p`
	font-weight: bold;
	font-size: 16px;
	line-height: 20px;
	letter-spacing: 0.02em;
	color: #fbeaef;
	background: #e2698d;
	border-radius: 8px;
	padding: 5px;
`;

const Share = styled.p`
	font-weight: 600;
	font-size: 14px;
	line-height: 18px;
	color: #265859;
	margin-left: 10%;
`;

const ChevronDiv = styled.div`
	position: absolute;
	background: #ffffff;
	box-shadow: 0px 4px 24px #e8f1fd;
	width: 46px;
	height: 46px;
	border-radius: 50%;
	right: -2%;
	top: 35%;

	img {
		margin-top: 20%;
		width: 60%;
		margin-left: 20%;
	}

	@media screen and (max-width: 1100px) {
		display: none;
	}
`;
