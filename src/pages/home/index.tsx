import classes from './home.module.css';

import { VscGithub } from 'react-icons/vsc';
import { CiLinkedin } from 'react-icons/ci';
import { FaWhatsapp } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { info } from '../../myself-information';

const Home = () => {
	const { name, description } = info.profile;
	const { linkedin, whatsup, github } = info.profile.links;

	return (
		<div className={classes.wrapper}>
			<div className={classes.miHomeContent}>
				<h1> Hi, I am
					<span className={classes.userName}> {name}</span>
				</h1>
				<p>{description}</p>
				<div className={classes.links}>
					<NavLink to={whatsup}><FaWhatsapp/></NavLink>
					<NavLink to={linkedin}><CiLinkedin/></NavLink>
					<NavLink to={github}><VscGithub/></NavLink>
				</div>

			</div>
		</div>
	);
};
export default Home;