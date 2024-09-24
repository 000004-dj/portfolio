import classes from './testimonial.module.css';
import { LegacyRef } from 'react';

export const Testimonial = ({ author, authorPositions, testimonial }: IProps) => {

	return (
		<div className={classes.container} id={"testimonial"}>

			<div className={classes.content}>
				<p> { testimonial } </p>
			</div>

			<div className={classes.author}>
				<h5> { author } </h5>
				<h6> { authorPositions  }</h6>
			</div>
		</div>
	);
};

interface IProps {
	testimonial: string;
	author: string;
	authorPositions: string;
}