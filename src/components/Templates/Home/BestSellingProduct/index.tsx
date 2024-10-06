import { ProductCard } from "../../../SharedFolder/ProductCard";
import { bestProduct } from "../constant";

export const BestSellingProduct = () => {
	return (
		<div className="bg-bgLightGray py-[100px]">
			<div
				data-aos="fade-up"
				className="font-montserrat xs:text-[36px] sm:text-[42px] lg:text-[50px] xl:text-[60px] 2xl:text-[70px] text-center 2xl:text-start not-italic font-semibold leading-[84px] tracking-[0.5px] uppercase w-full px-[50px] lg:px-[150px] "
			>
				Buy 1 get 1 Free <br /> on <span className="text-stroke">best selling products</span>
			</div>

			<div className="relative grid grid-cols-1 sm:grid-cols-2 z-20 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 pt-[48px] px-[50px] md:px-[120px] xl:px-[100px] 2xl:px-[150px]">
				{bestProduct?.map((data, i) => (
					<ProductCard data={data} key={i} isWhite />
				))}
			</div>
		</div>
	);
};
