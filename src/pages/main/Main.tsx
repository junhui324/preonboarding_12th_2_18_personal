import { useNavigate } from 'react-router-dom';
import ROUTES from '../../utils/constants/Routes';

export default function MainPage() {
	const navigate = useNavigate();
	return (
		<>
			<div onClick={() => navigate(ROUTES.ISSUELIST)}>이슈리스트</div>
		</>
	);
}
