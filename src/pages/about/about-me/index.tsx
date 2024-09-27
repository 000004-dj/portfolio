import classes from './about-me.module.css';

import { info } from '../../../myself-information';
import { Title } from '../../../shared/ui/title';
import { Button } from '../../../shared/ui/button';

export const AboutMe = () => {
	const { name, address, languages, age, description, nationality } = info.profile;

	return (
		<div className={classes.aboutWrapper}>
			<Title title={'about me'}/>

			<div className={classes.aboutContainer}>

				<div className={classes.imageContainer}>
					<div className={classes.aboutImage}>
						<img className={classes.image} src="https://github.com/000004-dj/portfolio/blob/main/public/images/about-me.jpeg?raw=true" alt="aboutimage"/>
					</div>
				</div>

				<div className={classes.aboutInfoContainer}>
					<div>
						<h3>I am <span className="color-theme">{name}</span></h3>
						<p>{description}</p>
						<ul>
							<li><b>Full Name</b> {name}</li>
							<li><b>Age</b> {age}</li>
							<li><b>Nationality</b> {nationality}</li>
							<li><b>Languages</b> {languages}</li>
							<li><b>Address</b> {address}</li>
						</ul>
						<Button onClick={()=>{}}>download cv</Button>
					</div>
				</div>

			</div>
		</div>
	);
};
