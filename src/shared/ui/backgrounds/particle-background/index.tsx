import React, { useEffect } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import classes from './particle-background.module.css';

export const ParticleBackground = () => {

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
		<div className={classes.particlesContainer}>
			<Particles
				id="tsparticles"
				url="../public/particles.json"
				className={classes.particles}
			/>
		</div>
	);
};