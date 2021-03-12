import styled from 'styled-components';
import { propToStyle } from '../../../../theme/propToStyle';

export const Box = styled.div`
	${propToStyle('flex')}
	${propToStyle('display')}
	${propToStyle('flexDirection')}
	${propToStyle('justifyContent')}
	${propToStyle('flex')}
	${propToStyle('flexWrap')}
	${propToStyle('backgroundImage')}
	${propToStyle('backgroundRepeat')}
	${propToStyle('backgroundPosition')}
	${propToStyle('backgroundColor')}
	${propToStyle('boxShadow')}
	${propToStyle('margin')}
	${propToStyle('padding')}

	${propToStyle('width')}
	${propToStyle('listStyle')}
	${propToStyle('margin')}
	${propToStyle('marginLeft')}
	${propToStyle('marginTop')}
	${propToStyle('marginBottom')}
	${propToStyle('marginRight')}
	${({ theme, borderRadiusTheme }) =>
		borderRadiusTheme && `border-radius: ${theme.borderRadius}`}
`;
