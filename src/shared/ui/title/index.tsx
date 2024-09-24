import classes from './title.module.css';

export const Title = ({title}: {title: string}) => {
	return (
		<div className={classes.wrapper}>
			<h2>{title}</h2>
			<span>{title}</span>
		</div>
	);
};