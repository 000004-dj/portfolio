import classes from './card.module.css';
import { Connect, SearchPlus } from '../../../shared/components/svgs';

export const Card = () => {
	return (
		<div className={classes.wrapper}>
			<div className={classes.container}>
				<div className={classes.imageContainer}>
					<img src="https://tf-react-chester.vercel.app/images/portfolio-image-1.jpg" alt={"img"} className={classes.image}/>
					<ul className={classes.list}>
						<li>
							<button className={classes.button}>
								<SearchPlus/>
							</button>
						</li>
						<li>
							<a rel="noopener noreferrer" target="_blank" href="https://dribbble.com">
								<Connect/>
							</a>
						</li>
					</ul>
				</div>
				<h5>
					<a rel="noopener noreferrer" target="_blank" href="https://dribbble.com">T-shirt Mockup</a>
				</h5>
				<h6>A beautiful t-shirt mockup.</h6>
			</div>
		</div>
	)
}