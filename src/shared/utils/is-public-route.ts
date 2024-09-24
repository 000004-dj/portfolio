import { useLocation } from 'react-router-dom';
import { ROUTES } from '../constans/routes';

export const useIsPublicRoute = () => {
	const { pathname } = useLocation();

	switch (pathname) {
		case ROUTES.root:
		case ROUTES.home:
			return true;
		default:
			return false;
	}
};
