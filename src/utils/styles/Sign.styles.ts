import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const SignWrapper = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;

	width: 400px;
	height: 650px;

	padding: 30px;

	background-color: #2f4e7c;
	border-radius: 20px;
`;

export const SignBox = styled.div`
	height: 20px;
	width: 100%;
	text-align: end;
`;

export const SignLink = styled(Link)`
	color: white;
	text-decoration: none;
`;

export const LogoBox = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 200px;
	height: 200px;
`;

export const ToDoTitle = styled.h1`
	position: absolute;
	font-size: 25px;
	color: white;
`;

export const ImgBox = styled.img`
	width: 250px;
	height: 250px;
`;

export const FormBox = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;

	width: 100%;
	height: 210px;
`;

export const InputBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	width: 100%;
	height: 160px;
`;

export const Input = styled.input`
	padding: 10px;
	width: 100%;
	height: 50px;

	font-size: 20px;
`;

export const ErrorBox = styled.p`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;

	width: 100%;
	height: 40px;
	padding: 0 10px;

	color: yellow;
`;

export const LogBox = styled.div`
	width: 100%;
	height: 50px;
`;

export const LogBtn = styled.button`
	width: 100%;
	height: 50px;

	color: #2f4e7c;
	font-size: 20px;
	font-weight: 600;

	background-color: #ffffff;
	border: none;

	cursor: pointer;
`;
