import classes from './card.module.css';

import React from 'react';

export const ServicesCard = ({ title, text, icon }: IProps) => {

	return (
		<div className={classes.container}>
			<span className={classes.icon}>
				{icon}
			</span>
			<h5>{title}</h5>
			<p>{text}</p>
		</div>
	);
};

interface IProps {
	title: string;
	text: string;
	icon: React.ReactNode;
}