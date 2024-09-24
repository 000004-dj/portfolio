import classes from './button.module.css';

import { ReactNode } from 'react';

export const Button = ({ onClick, children }: Props) => {

	return (
		<button onClick={onClick} className={classes.button}>{children}</button>
	);
};

interface Props {
	onClick: () => void,
	children: ReactNode
}