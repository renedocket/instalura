import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { propToStyle } from '../../../theme/propToStyle';

export const TextStyleVariantsMap = {
	paragraph1: css`
		font-size: ${({ theme }) =>
			theme.typographyVariants.paragraph1.fontSize};
		font-weight: ${({ theme }) =>
			theme.typographyVariants.paragraph1.fontWeight};
		line-height: ${({ theme }) =>
			theme.typographyVariants.paragraph1.lineHeight};
	`,

	paragraph2: css`
		font-size: ${({ theme }) =>
			theme.typographyVariants.paragraph2.fontSize};
		font-weight: ${({ theme }) =>
			theme.typographyVariants.paragraph2.fontWeight};
		line-height: ${({ theme }) =>
			theme.typographyVariants.paragraph2.lineHeight};
	`,

	smallestException: css`
		font-size: ${({ theme }) =>
			theme.typographyVariants.smallestException.fontSize};
		font-weight: ${({ theme }) =>
			theme.typographyVariants.smallestException.fontWeight};
		line-height: ${({ theme }) =>
			theme.typographyVariants.smallestException.lineHeight};
	`,
};

const TextBase = styled.span`
	${({ variant }) => TextStyleVariantsMap[variant]}
	${propToStyle('textAlign')}
`;

function Text({ tag, variant, children, ...props }) {
	return (
		<TextBase variant={variant} as={tag} {...props}>
			{children}
		</TextBase>
	);
}

Text.defaultProps = {
	tag: 'span',
	variant: 'paragraph1',
};

Text.propTypes = {
	tag: PropTypes.string,
	variant: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default Text;
