import classes from './about.module.css';
import { AboutMe } from './about-me';

const About = () => {
	return (
		<section className={classes.wrapper}>
			<AboutMe/>
			{/*<Services/>*/}
			{/*<Reviews/>*/}
		</section>
	);
};
export default About;

