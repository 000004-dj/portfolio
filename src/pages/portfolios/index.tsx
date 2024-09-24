import classes from './portfolios.module.css';

import { Title } from '../../shared/ui/title';
import { Card } from './card';

const Portfolios = () => {
	return (
		<div>
			<Title title={"Portfolio"}/>
			<div className={classes.cardsWrapper}>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
			</div>

		</div>
	);
};
export default Portfolios;


