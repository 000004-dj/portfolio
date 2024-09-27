import classes from './portfolios.module.css';

import { Title } from '../../shared/ui/title';
import { Card } from './card';
import { info } from '../../myself-information';

const Portfolios = () => {
	return (
		<div className={classes.wrapper}>
			<Title title={"Portfolio"}/>
			<div className={classes.cardsWrapper}>
				{
					info.portfolioCards.map((card, index) => {
						return <Card key={index} image={card.image} title={card.title} description={card.description} link={card.link}/>
					})
				}
			</div>

		</div>
	);
};
export default Portfolios;


