import classes from './sidebar.module.css';

import { NavLink } from 'react-router-dom';
import React, { useEffect } from 'react';
import { IoIosMenu, IoMdClose } from 'react-icons/io';
import { useActions, useAppSelector } from '../../hooks/redux-hooks';

export const Sidebar = () => {
	const isSidebarOpen = useAppSelector(state => state.main?.openedSidebar);
	const setIsSidebarOpen = useActions().toggleSidebar;

	useEffect(() => {
		if (window.innerWidth <= 1100) {setIsSidebarOpen(false);}
	}, [window.innerWidth]);

	const activeClassHandler = ({ isActive, isPending }: any) => isPending ? 'pending' : isActive ? 'active' : '';

	const redirectAndCloseSidebar = () => { setIsSidebarOpen(false)};

	return (
		<nav className={classes.wrapper + ` ${!isSidebarOpen ? classes.hidden : ''}`}>
			<button className={classes.toggleButton} onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
				{ isSidebarOpen ? <IoMdClose/> : <IoIosMenu/> } </button>

			<div className={classes.miHeaderImage}>
				<p> <img src="https://github.com/000004-dj/portfolio/blob/main/public/images/avatar.jpeg?raw=true" alt="brandimage"/> </p>
			</div>

			<ul>
				<li className={classes.item} onClick={redirectAndCloseSidebar}>
					<NavLink to="/" className={activeClassHandler}>home</NavLink></li>

				<li className={classes.item} onClick={redirectAndCloseSidebar}>
					<NavLink to="/about">about</NavLink></li>

				<li className={classes.item} onClick={redirectAndCloseSidebar}>
					<NavLink to="/resume">resume</NavLink></li>

				<li className={classes.item} onClick={redirectAndCloseSidebar}>
					<NavLink to="/portfolios">portfolio</NavLink></li>

				<li className={classes.item} onClick={redirectAndCloseSidebar}>
					<NavLink to="/contact">contact</NavLink></li>
			</ul>

			<p className={classes.miHeaderCopyright}>© 2024
				<b><a rel="noopener noreferrer" target="_blank" href="https://nuclearthemes.com" style={{ marginLeft: '5px' }}>
						Samuil Prytchyn</a></b>
			</p>
		</nav>
	);
};
