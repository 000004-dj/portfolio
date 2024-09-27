import classes from './lines-background.module.css';
import React from 'react';

export const LinesBackground = () => {
	return (
		<div className={classes.bglines}>
			{ [...Array(5)].map((_, index) => <span key={index}/>) }
		</div>
	);
};