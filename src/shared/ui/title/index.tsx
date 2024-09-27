import classes from './title.module.css';

export const Title = ({title, extraClass}: {title: string, extraClass?: string}) => {
	return (
		<div className={classes.wrapper + ` ${extraClass}`} >
			<h2>{title}</h2>
			<span>{title}</span>
		</div>
	);
};