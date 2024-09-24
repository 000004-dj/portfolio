import classes from './app.module.css';

import Particles, { initParticlesEngine } from '@tsparticles/react';
import React, { Suspense, useEffect } from 'react';
import { loadSlim } from '@tsparticles/slim';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/home';
import About from '../pages/about';
import Resume from '../pages/resume';
import Contact from '../pages/contact';
import Portfolios from '../pages/portfolios';
import { ROUTES } from '../shared/constans/routes';
import { DefaultLayout } from './layouts/default-layout';

function App() {
	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		})
			.then(() => {
				console.log('background start');
			})
			.catch(() => console.error('background error'));
	}, []);

	return (
		<div>
			<div className={classes.particlesContainer}>
				<Particles
					id="tsparticles"
					url="../public/particles.json"
					className={classes.particles}
				/>
			</div>

			<div>
				<Routes>
					<Route path={ROUTES.root} element={<DefaultLayout/>}>
						<Route path={ROUTES.home} element={<Suspense><Home/></Suspense>}/>
						<Route path={ROUTES.about} element={<Suspense><About/></Suspense>}/>
						<Route path={ROUTES.resume} element={<Suspense><Resume/></Suspense>}/>
						<Route path={ROUTES.portfolios} element={<Suspense><Portfolios/></Suspense>}/>
						<Route path={ROUTES.contact} element={<Suspense><Contact/></Suspense>}/>
					</Route>
				</Routes>
			</div>
		</div>
	);
}

export default App;
