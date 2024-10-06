import { FC } from "react";

export const Brand: FC<BrandProps> = ({ isWhite }) => {
	return (
		<div className="flex items-center gap-4">
			<img
				src={isWhite ? "/images/logo/Valuetainment.svg" : "/images/logo/valuetainment_red.svg"}
				alt="Vtmerch"
				className="max-w-[40px] md:max-w-[64px] lg:max-w-[72px] "
			/>
			<h4 className="font-montserrat font-extrabold text-white text-2xl md:text-4xl xl:text-[100px] tracking-[120%]">
				VTMERCH
			</h4>
		</div>
	);
};

export interface BrandProps {
	isWhite?: boolean;
}
