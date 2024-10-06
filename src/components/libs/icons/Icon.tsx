import { FC, SVGAttributes } from 'react';

export const Icon: FC<IconProps> = ({ path, viewBox, ...rest }) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} {...rest}>
		<path d={path} />
	</svg>
);

export interface IconProps extends SVGAttributes<SVGElement> {
	path: string;
	viewBox?: string;
}

Icon.defaultProps = {
	width: 24,
	height: 24,
	fill: 'var(--light-gray)',
	viewBox: '0 0 24 24',
};
