import * as S from '../../utils/styles/Main.styles';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../utils/constants/Routes';

export default function MainPage() {
	const navigate = useNavigate();
	return (
		<>
			<S.MainBox>
				<S.LogoBox>
					<S.ImgBox src="/logo.png"></S.ImgBox>
				</S.LogoBox>
				<S.BtnBox>
					<S.Btn onClick={() => navigate(ROUTES.SIGNIN)}>로그인하기</S.Btn>
					<S.Btn onClick={() => navigate(ROUTES.SIGNUP)}>회원가입</S.Btn>
					<S.Btn onClick={() => navigate(ROUTES.TODO)}>투두리스트</S.Btn>
				</S.BtnBox>
			</S.MainBox>
		</>
	);
}
