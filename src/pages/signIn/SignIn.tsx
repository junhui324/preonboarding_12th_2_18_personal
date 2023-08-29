import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router';
import * as S from '../../utils/styles/Sign.styles';
import ROUTES from '../../utils/constants/Routes';
import useInputs from '../../hooks/useInputs';
import { isValidEmail, isValidPassword } from '../../utils/validations/Validation';
import { AuthForm } from '../../utils/types/Auth.interface';
import { authApi } from '../../api/AuthApi';

export default function SignInPage() {
	const navigate = useNavigate();

	const initialValue = { email: '', password: '' };

	const { data, handleChange, reset } = useInputs(initialValue);
	const { email, password } = data as AuthForm;
	const [showEmailError, setShowEmailError] = useState(false);
	const [showPasswordError, setShowPasswordError] = useState(false);

	const handleClickSignIn = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			await authApi.signin({ email, password });
			reset();
			navigate('/todo');
		} catch (error) {
			if (error instanceof Error) alert('로그인 정보가 틀렸습니다. 다시 입력해주세요.');
		}
	};

	return (
		<S.SignWrapper>
			<S.SignBox>
				<S.SignLink to={ROUTES.SIGNUP}>회원가입</S.SignLink>
			</S.SignBox>
			<S.LogoBox>
				<S.ImgBox src="/logo.png" />
				<S.ToDoTitle>SignIn Page</S.ToDoTitle>
			</S.LogoBox>
			<S.FormBox onSubmit={handleClickSignIn}>
				<S.InputBox>
					<S.Input
						data-testid="email-input"
						type="email"
						name="email"
						placeholder="이메일을 입력해주세요."
						onChange={handleChange}
						onBlur={() => setShowEmailError(!isValidEmail(email))}
						value={email}
						autoComplete="off"
					/>
					<S.ErrorBox>{showEmailError && '올바른 형식이 아닙니다.'}</S.ErrorBox>
					<S.Input
						data-testid="password-input"
						type="password"
						name="password"
						placeholder="비밀번호를 입력해주세요."
						onChange={handleChange}
						onBlur={() => setShowPasswordError(!isValidPassword(password))}
						value={password}
					/>
					<S.ErrorBox>{showPasswordError && '올바른 형식이 아닙니다.'}</S.ErrorBox>
				</S.InputBox>
				<S.LogBox>
					<S.LogBtn
						data-testid="signin-button"
						style={{
							backgroundColor: isValidEmail(email) && isValidPassword(password) ? 'yellow' : '',
						}}
						disabled={!isValidEmail(email) || !isValidPassword(password)}
					>
						로그인하기
					</S.LogBtn>
				</S.LogBox>
			</S.FormBox>
		</S.SignWrapper>
	);
}
