import classes from './my-skills.module.css';

import { Title } from '../../../shared/ui/title';
import { info } from '../../../myself-information';
import { Skill } from './skill';

export const MySkills = () => {
	const skills = info.resume.skills
	return (
		<div className={classes.container}>
			<Title title={'my skills'}/>
			<div className={classes.wrapper}>
				<div className={classes.content}>
					{
						skills.map((skill, index)=> {
						return <Skill percentage={skill.percentage} title={skill.title} key={index}/>
					})}

				</div>
			</div>
		</div>
	);
};


