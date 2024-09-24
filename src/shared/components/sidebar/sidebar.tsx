import classes from './sidebar.module.css';

import { NavLink } from 'react-router-dom';
import React, { useEffect } from 'react';
import { IoIosMenu, IoMdClose } from 'react-icons/io';
import { useActions, useAppSelector } from '../../hooks/redux-hooks';

export const Sidebar = () => {
	const isSidebarOpen = useAppSelector(state => state.main?.openedSidebar)
	const setIsSidebarOpen = useActions().toggleSidebar

	useEffect(() => {
		if (window.innerWidth <= 1100) {
			setIsSidebarOpen(false);
		}
	}, [window.innerWidth]);

	const activeClassHandler = ({ isActive, isPending }: any) => isPending ? 'pending' : isActive ? 'active' : '';

	return (
		<nav className={classes.wrapper + ` ${!isSidebarOpen ? classes.hidden : ''}`}>
			<button
				className={classes.toggleButton}
				onClick={() => setIsSidebarOpen(!isSidebarOpen)}
			>
				{
					isSidebarOpen ? <IoMdClose/> : <IoIosMenu/>
				}
			</button>

			<div className={classes.miHeaderImage}>
				<p>
					<img
						src="../../../../public/images/avatar.jpeg"
						alt="brandimage"
					/>
				</p>
			</div>

			<ul>
				<li className={classes.item}><NavLink to="/" className={activeClassHandler}>home</NavLink></li>
				<li className={classes.item}><NavLink to="/about">about</NavLink></li>
				<li className={classes.item}><NavLink to="/resume">resume</NavLink></li>
				<li className={classes.item}><NavLink to="/portfolios">portfolio</NavLink></li>
				<li className={classes.item}><NavLink to="/contact">contact</NavLink></li>
			</ul>

			<p className={classes.miHeaderCopyright}>© 2024
				<b>
					<a rel="noopener noreferrer" target="_blank" href="https://nuclearthemes.com"> Samuil Prytchyn</a>
				</b>
			</p>
		</nav>
	);
};
