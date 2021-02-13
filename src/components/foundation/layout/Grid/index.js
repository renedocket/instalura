import styled, { css } from "styled-components";
import { breakpointsMedia } from "../../../../theme/utils/breakpointsMedia";

const Container = styled.div`
	width: 100%;
	padding-right: 28px;
	padding-left: 28px;
	margin-right: auto;
	margin-left: auto;

	${breakpointsMedia({
		xs: css`
			max-width: initial;

			padding-right: 28px;
			padding-left: 28px;
		`,
		sm: css`
			max-width: 576px;
		`,
		md: css`
			max-width: 768px;
			padding-right: 16px;
			padding-left: 16px;
		`,
		lg: css`
			max-width: 1160px;
		`,
		xl: css`
			max-width: 1222px;
		`,
	})}
`;

const Row = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-right: -16px;
	margin-left: -16px;
`;

const Col = styled.div`
	padding-right: 16px;
	padding-left: 16px;
	flex-basis: 0;
	flex-grow: 1;
	max-width: 100%;

	${function ({ value }) {
		if (typeof value === "number") {
			return css`
				flex-grow: 0;
				flex-shrink: 0;
				flex-basis: ${(100 * value) / 12}%;
				max-width: ${(100 * value) / 12}%;
			`;
		}

		return breakpointsMedia({
			xs:
				value?.xs &&
				css`
					flex-grow: 0;
					flex-shrink: 0;
					flex-basis: ${(100 * value.xs) / 12}%;
					max-width: ${(100 * value.xs) / 12}%;
					${value.xs}
				`,
			sm:
				value?.sm &&
				css`
					flex-grow: 0;
					flex-shrink: 0;
					flex-basis: ${(100 * value.sm) / 12}%;
					max-width: ${(100 * value.sm) / 12}%;
					${value.sm}
				`,
			md:
				value?.md &&
				css`
					flex-grow: 0;
					flex-shrink: 0;
					flex-basis: ${(100 * value.md) / 12}%;
					max-width: ${(100 * value.md) / 12}%;
					${value.md}
				`,
			lg:
				value?.lg &&
				css`
					flex-grow: 0;
					flex-shrink: 0;
					flex-basis: ${(100 * value.lg) / 12}%;
					max-width: ${(100 * value.lg) / 12}%;
					${value.lg}
				`,
			xl:
				value?.xl &&
				css`
					flex-grow: 0;
					flex-shrink: 0;
					flex-basis: ${(100 * value.xl) / 12}%;
					max-width: ${(100 * value.xl) / 12}%;
					${value.xl}
				`,
		});
	}}

	${function ({ offset }) {
		if (typeof offset === "number") {
			return css`
				margin-left: ${(100 * offset) / 12}%;
			`;
		}

		return breakpointsMedia({
			xs:
				offset?.xs &&
				css`
					flex-grow: 0;
					flex-shrink: 0;
					flex-basis: ${(100 * offset.xs) / 12}%;
					max-width: ${(100 * offset.xs) / 12}%;
					${offset.xs}
				`,
			sm:
				offset?.sm &&
				css`
					flex-grow: 0;
					flex-shrink: 0;
					flex-basis: ${(100 * offset.sm) / 12}%;
					max-width: ${(100 * offset.sm) / 12}%;
					${offset.sm}
				`,
			md:
				offset?.md &&
				css`
					flex-grow: 0;
					flex-shrink: 0;
					flex-basis: ${(100 * offset.md) / 12}%;
					max-width: ${(100 * offset.md) / 12}%;
					${offset.md}
				`,
			lg:
				offset?.lg &&
				css`
					flex-grow: 0;
					flex-shrink: 0;
					flex-basis: ${(100 * offset.lg) / 12}%;
					max-width: ${(100 * offset.lg) / 12}%;
					${offset.lg}
				`,
			xl:
				offset?.xl &&
				css`
					flex-grow: 0;
					flex-shrink: 0;
					flex-basis: ${(100 * offset.xl) / 12}%;
					max-width: ${(100 * offset.xl) / 12}%;
					${offset.xl}
				`,
		});
	}}
`;

export const Grid = {
	Container,
	Row,
	Col,
};
