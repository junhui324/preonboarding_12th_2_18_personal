import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router';
import * as S from '../../utils/styles/Sign.styles';
import ROUTES from '../../utils/constants/Routes';
import useInputs from '../../hooks/useInputs';
import { AuthForm } from '../../utils/types/Auth.interface';
import { isValidEmail, isValidPassword } from '../../utils/validations/Validation';
import { authApi } from '../../api/AuthApi';

export default function SignUpPage() {
	const navigate = useNavigate();

	const initialValue = { email: '', password: '' };

	const { data, handleChange, reset } = useInputs(initialValue);
	const { email, password } = data as AuthForm;
	const [showEmailError, setShowEmailError] = useState(false);
	const [showPasswordError, setShowPasswordError] = useState(false);

	const handleClickSignUp = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			await authApi.signup({ email, password });
			reset();
			navigate('/signin');
		} catch (error) {
			if (error instanceof Error) alert(error.message);
		}
	};

	return (
		<S.SignWrapper>
			<S.SignBox>
				<S.SignLink to={ROUTES.SIGNIN}>로그인</S.SignLink>
			</S.SignBox>
			<S.LogoBox>
				<S.ImgBox src="/logo.png" />
				<S.ToDoTitle>SignUp Page</S.ToDoTitle>
			</S.LogoBox>
			<S.FormBox onSubmit={handleClickSignUp}>
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
					<S.ErrorBox>{showEmailError && '이메일 형식을 지켜주세요.'}</S.ErrorBox>
					<S.Input
						data-testid="password-input"
						type="password"
						name="password"
						placeholder="비밀번호를 입력해주세요."
						onBlur={() => setShowPasswordError(!isValidPassword(password))}
						onChange={handleChange}
						value={password}
					/>
					<S.ErrorBox>{showPasswordError && '비밀번호는 8자 이상 입력해주세요.'}</S.ErrorBox>
				</S.InputBox>
				<S.LogBox>
					<S.LogBtn
						data-testid="signup-button"
						style={{
							backgroundColor: isValidEmail(email) && isValidPassword(password) ? 'yellow' : '',
						}}
						disabled={!isValidEmail(email) || !isValidPassword(password)}
					>
						회원가입하기
					</S.LogBtn>
				</S.LogBox>
			</S.FormBox>
		</S.SignWrapper>
	);
}
