import React from 'react';
import * as S from '../../utils/styles/Layout.styles';

function Layout(props: { children: React.ReactNode }) {
	return (
		<>
			<S.Container>
				<S.Wrapper>{props.children}</S.Wrapper>
			</S.Container>
		</>
	);
}

export default Layout;
