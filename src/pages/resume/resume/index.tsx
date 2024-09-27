import classes from './resume.module.css';

import { Title } from '../../../shared/ui/title';
import { BiBriefcase } from 'react-icons/bi';
import { info } from '../../../myself-information';

export const WorkExperience = () => {
	const workExperience = info.resume.workExperience;

	return (
		<div className={classes.wrapper}>
			<Title title={'Resume'}/>
			<div className={classes.title}>
				<span className={classes.icon}>
					<BiBriefcase/>
				</span>
				<h4>Working Experience</h4>
			</div>

			{
				workExperience.map(
					(place, index) => {
						return (
							<WorkPlace
								fromYear={place.fromYear}
								toYear={place.toYear}
								workPlace={place.workPlace}
								companyName={place.companyName}
								description={place.description}
								key={index}
							/>
						);
					}
				)
			}

		</div>
	);
};


const WorkPlace = ({ fromYear, toYear, workPlace, companyName, description }: IProps) => {

	return (
		<div className={classes.container}>
			<div className={classes.resumeSummary}>
				<h6 className={classes.resumeYear}>{`${fromYear} - ${toYear}`}</h6>
			</div>
			<div className={classes.resumeDetails}>
				<h5>{workPlace}</h5>
				<h6 className={classes.resumeCompany}>{companyName}</h6>
				<p>{description}</p>
			</div>
		</div>
	);
};

interface IProps {
	fromYear: string,
	toYear: string,
	workPlace: string,
	companyName: string,
	description: string
}