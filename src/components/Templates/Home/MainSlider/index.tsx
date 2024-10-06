import { ProductCard } from "../../../SharedFolder/ProductCard";
import { mainSliderData } from "../constant";

export const MainSlider = () => {
	return (
		<div className="containerr bg-bgRed pt-40 md:pt-[240px] pb-20 relative">
			<div className="relative grid grid-cols-1 z-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 ms:ml-6">
				{mainSliderData?.map((data, i) => (
					<ProductCard data={data} key={i} />
				))}
			</div>
			<div className="hidden ms:block absolute z-10  top-11 md:top-[100px] font-actOfRejection opacity-40 text-[36px] sm:text-[44px] md:text-[64px] lg:text-[80px] xl:text-[100px] leading-[168px] tracking-[1px] text-center text-white  uppercase mt-8 ">
				Future Looks Brights!
			</div>
		</div>
	);
};
