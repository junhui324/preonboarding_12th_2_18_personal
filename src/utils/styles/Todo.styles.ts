import styled from '@emotion/styled';

export const TodoBox = styled.main`
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

export const LogoutBox = styled.div`
	height: 20px;
	width: 100%;
	text-align: end;
`;

export const LogoutBtn = styled.div`
	color: white;
	background-color: none;
	border: none;

	cursor: pointer;
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

export const ImgBox = styled.img`
	width: 200px;
	height: 200px;
`;

export const ToDoTitle = styled.h1`
	position: absolute;
	font-size: 25px;
	color: white;
`;

export const FormBox = styled.form`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 50px;
`;

export const InsertInput = styled.input`
	width: calc(100% - 50px);
	height: 50px;

	font-size: 20px;

	padding: 10px;
`;

export const InputBtn = styled.button`
	width: 100px;
	height: 50px;

	font-size: 20px;
	cursor: pointer;
`;

export const ListBox = styled.ul`
	width: 100%;
	height: 200px;

	background-color: white;
	overflow-y: scroll;
`;

export const ListItem = styled.li`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 50px;

	border-bottom: 1px solid #bdbdbd;
`;

export const ItemSpan = styled.span`
	display: inline-block;
	width: 150px;
	padding: 0;
	margin: 0 10px;
	font-size: 18px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	word-break: break-all;
`;

export const ItemCheckBox = styled.input`
	height: 15px;
	width: 15px;
`;

export const ItemInput = styled.input`
	height: 40px;
	width: 150px;
	padding: 10px;
	margin: 0 10px;
	font-size: 18px;
`;

export const ItemBtn = styled.button`
	height: 40px;
	width: 50px;
	margin: 6px;
`;
