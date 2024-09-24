import classes from './skill.module.css';

export const Skill = ({ percentage, title }: IProps) => {
	return (
		<div className={classes.skill}>
			<div className={classes.progress}>
				<h6 className={classes.progressTitle}>{title}</h6>
				<div className={classes.progressInner}>
					<div className={classes.progressPercentage}>{`${percentage}%`}</div>
					<div className={classes.progressContainer}>
						<span
							className={classes.progressActive}
							style={{ width: `${percentage}%` }}
						></span>
					</div>
				</div>
			</div>
		</div>
	);
};

interface IProps {
	percentage: number;
	title: string;

}