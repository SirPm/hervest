import React, { useState } from "react";
import "./App.css";
import { SideBar } from "./components/SideBar";
import styled from "styled-components";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import closeIcon from "./assets/closeIcon.svg";
import hamburger from "./assets/hamburger.svg";

const App = () => {
	const [toggled, setToggled] = useState(false);
	const handleToggleSidebar = () => {
		setToggled(!toggled);
	};

	return (
		<Wrapper className="hervest-app">
			<MobileMenu toggled={toggled}>{!toggled ? <img src={hamburger} alt="menu" onClick={handleToggleSidebar} /> : <img src={closeIcon} alt="close" onClick={handleToggleSidebar} />}</MobileMenu>
			<SideBar toggled={toggled} handleToggleSidebar={handleToggleSidebar} />
			<MainBodyWrapper>
				<Header />
				<Body />
			</MainBodyWrapper>
		</Wrapper>
	);
};

export default App;

const Wrapper = styled.div`
	display: flex;
	position: relative;
`;

const MobileMenu = styled.div`
	display: none;
	position: absolute;
	cursor: pointer;
	z-index: ${({ toggled }) => (toggled ? 2000 : 100)};
	left: ${({ toggled }) => (toggled ? "240px !important" : 0)};

	@media screen and (max-width: 768px) {
		display: block;
		box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16);
		left: 1%;
		top: 0.5%;
		background-color: #ffffff;
		border-radius: 50%;
		width: 40px;
		height: 40px;
		text-align: center;

		img {
			margin-top: 10%;
		}
	}
`;

const MainBodyWrapper = styled.div`
	width: calc(95% - 270px);
	margin: 0 auto;
	padding-top: 50px;

	@media screen and (max-width: 768px) {
		width: 90%;
	}
`;
