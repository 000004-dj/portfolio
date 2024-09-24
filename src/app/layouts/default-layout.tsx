import classes from '../app.module.css';

import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../shared/components/sidebar/sidebar';
import { useAppSelector } from '../../shared/hooks/redux-hooks';

export const DefaultLayout = () => {
	const isSidebarOpen = useAppSelector(state => state.main?.openedSidebar);

	return (
		<Fragment>

			<div className={classes.wrapper}>
				<Sidebar/>

				<div className={`${classes.page + `${isSidebarOpen ? ' contentHidden' : ''}`}`}>
					<main className={classes.content}>
						<Outlet/>
					</main>
				</div>

			</div>
		</Fragment>
	);
};