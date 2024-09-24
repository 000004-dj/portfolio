import classes from './services.module.css';

import { HiOutlinePaintBrush } from 'react-icons/hi2';

import { Title } from '../../../shared/ui/title';
import { info } from '../../../myself-information';
import { ServicesCard } from './card';

export const Services = () => {

	const services = info.services
	return (
		<div className={classes.wrapper}>
			<Title title={'Services'}/>
			<div className={classes.cards}>
				{
					services.map(
						card => (<ServicesCard title={card.title} text={card.text} icon={<HiOutlinePaintBrush />}/>)
					)
				}
			</div>
		</div>
	);
};


