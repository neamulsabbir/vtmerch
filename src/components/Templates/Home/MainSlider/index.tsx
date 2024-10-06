import { ProductCard } from "../../../SharedFolder/ProductCard";
import { mainSliderData } from "../constant";

export const MainSlider = () => {
	return (
		<div className="bg-bgRed pt-[240px] pb-20 px-[50px] lg:px-[150px] relative">
			<div className="relative grid grid-cols-1 z-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 ml-6">
				{mainSliderData?.map((data, i) => (
					<ProductCard data={data} key={i} />
				))}
			</div>
			<div className="absolute z-10  xs:top-[280px] sm:top-[100px] font-actOfRejection opacity-40 text-[36px] sm:text-[44px] md:text-[64px] lg:text-[80px] xl:text-[100px] leading-[168px] tracking-[1px] text-center text-white  uppercase mt-8 ">
				Future Looks Brights!
			</div>
		</div>
	);
};
