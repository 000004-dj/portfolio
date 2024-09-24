import classes from './reviews.module.css';

import ReactSimplyCarousel from 'react-simply-carousel';
import { useEffect, useRef, useState } from 'react';

import { Title } from '../../../shared/ui/title';
import { info } from '../../../myself-information';
import { Testimonial } from './testimonial';

export const Reviews = () => {
	const testimonials = info.reviews;

	const [activeSlideIndex, setActiveSlideIndex] = useState(0);
	const [itemsToShow, setItemsToShow] = useState(2)

	useEffect(() => {
		if(window.screen.width < 1250) {
			setItemsToShow(1)
		}
		else {
			setItemsToShow(2)
		}

	}, [window.screen.width]);

	return (
		<div className={classes.container}>
			<Title title={'reviews'}/>

			<div className={classes.content}>
				<ReactSimplyCarousel
					speed={400}
					infinite={true}
					autoplay={true}
					itemsToShow={itemsToShow}
					itemsToScroll={1}
					autoplayDelay={3000}
					activeSlideIndex={activeSlideIndex}
					onRequestChange={setActiveSlideIndex}
					innerProps={{ style: { overflow: 'hidden' } }}
					forwardBtnProps={{ style: { display: 'none' } }}
					backwardBtnProps={{ style: { display: 'none' } }}
				>
					{
						testimonials.map(
							({ testimonial, author, authorPositions }, index) => (
								<Testimonial
									testimonial={testimonial}
									author={author}
									authorPositions={authorPositions}
									key={index}
								/>)
						)
					}
				</ReactSimplyCarousel>
			</div>

		</div>
	);
};