import React from "react";

import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarContent } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

import logo from "../../assets/logo.svg";
import dashboard from "../../assets/dashboard.svg";
import plans from "../../assets/plans.svg";
import purse from "../../assets/purse.svg";
import transactions from "../../assets/transactions.svg";
import banksAndCards from "../../assets/banksAndCards.svg";
import girlPower from "../../assets/girlPower.svg";
import profile from "../../assets/profile.svg";
import portfolio from "../../assets/portfolio.svg";
import aboutHervest from "../../assets/aboutHervest.svg";
import support from "../../assets/support.svg";
import logout from "../../assets/logout.svg";
import styled from "styled-components";

export const SideBar = ({ collapsed, rtl, toggled, handleToggleSidebar }) => {
	return (
		<ProSidebar
			//   rtl={rtl}
			//   collapsed={collapsed}
			toggled={toggled}
			breakPoint="md"
			onToggle={handleToggleSidebar}
		>
			<SideBarContentWrapper>
				<SidebarHeaderWrapper>
					<SidebarHeader>
						<div className="sidebar-logo">
							<img src={logo} alt="" />
						</div>
					</SidebarHeader>
				</SidebarHeaderWrapper>

				<SidebarContent>
					<MenuLabel>Menu</MenuLabel>
					<Menu>
						<MenuItem icon={<img src={dashboard} alt="" />} className="menu-item active">
							Dashboard
						</MenuItem>
						<MenuItem icon={<img src={plans} alt="" />} className="menu-item">
							Plans
						</MenuItem>
						<MenuItem icon={<img src={purse} alt="" />} className="menu-item">
							Purse
						</MenuItem>
						<MenuItem icon={<img src={transactions} alt="" />}>Transactions</MenuItem>
						<MenuItem icon={<img src={banksAndCards} alt="" />} className="menu-item">
							Banks & Cards
						</MenuItem>
						<MenuItem icon={<img src={girlPower} alt="" />} className="menu-item">
							Girl Code
						</MenuItem>
						<MenuItem icon={<img src={profile} alt="" />} className="menu-item">
							Profile
						</MenuItem>
						<MenuItem icon={<img src={portfolio} alt="" />} className="menu-item">
							Portfolio
						</MenuItem>
						<MenuItem icon={<img src={aboutHervest} alt="" />} className="menu-item">
							About HerVest
						</MenuItem>
						<MenuItem icon={<img src={support} alt="" />} className="menu-item">
							Support
						</MenuItem>
						<MenuItem icon={<img src={logout} alt="" />} className="menu-item">
							Logout
						</MenuItem>
					</Menu>
				</SidebarContent>
			</SideBarContentWrapper>
		</ProSidebar>
	);
};

const SideBarContentWrapper = styled.div`
	background-color: #ffffff;
	padding: 10px 30px;
`;

const SidebarHeaderWrapper = styled.div`
	padding: 30px 0;
	margin-left: -5%;

    > div {
        border-bottom: none !important;
    }
`;

const MenuLabel = styled.p`
	font-size: 16px;
	line-height: 17px;
	color: #828282;
	margin-top: 10%;
	margin-left: -5%;
	text-transform: uppercase;
	font-weight: 500;
`;
