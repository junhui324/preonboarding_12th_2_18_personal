import styled from '@emotion/styled';

export const MainBox = styled.div`
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

export const LogoBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 200px;
	height: 200px;
`;

export const ImgBox = styled.img`
	width: 250px;
	height: 250px;
`;

export const BtnBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;

	gap: 30px;

	width: 100%;
	height: 200px;
`;

export const Btn = styled.button`
	width: 100%;
	height: 100%;

	color: #2f4e7c;
	font-size: 20px;
	font-weight: 600;

	background-color: #ffffff;
	border: none;

	cursor: pointer;
`;
