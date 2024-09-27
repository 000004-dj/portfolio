import classes from './card.module.css';

import { Connect, SearchPlus } from '../../../shared/ui/svgs';

export const Card = ({
	title,
	description,
	image,
	link,
}:{
	title: string,
	description: string,
	image: string,
	link: string
}) => {
	return (
		<div className={classes.wrapper}>
			<div className={classes.container}>

				<div className={classes.imageContainer}>

					<img src={image} alt={"img"} className={classes.image}/>

					<ul className={classes.list}>
						<li><button className={classes.button}><SearchPlus/></button></li>
						<li><a rel="noopener noreferrer" target="_blank" href={link}><Connect/></a></li>
					</ul>

				</div>

				<h5><a rel="noopener noreferrer" target="_blank" href="https://dribbble.com">{title}</a></h5>
				<h6>{description}</h6>
			</div>
		</div>
	)
}