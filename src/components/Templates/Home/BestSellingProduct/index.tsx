import { ProductCard } from "../../../SharedFolder/ProductCard";
import { bestProduct } from "../constant";

export const BestSellingProduct = () => {
	return (
		<div className="bg-bgLightGray py-[100px] w-full">
			<div className="containerr">
				<div
					data-aos="fade-up"
					className=" font-montserrat text-[24px] xs:text-[36px] sm:text-[42px] lg:text-[50px] xl:text-[60px] 2xl:text-[70px] text-center 2xl:text-start not-italic font-semibold md:leading-[84px] tracking-[0.5px] uppercase w-full "
				>
					Buy 1 get 1 Free <br /> on <span className="text-stroke">best selling products</span>
				</div>

				<div className=" grid grid-cols-1 sm:grid-cols-2 z-20 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 pt-[48px] ">
					{bestProduct?.map((data, i) => (
						<ProductCard data={data} key={i} isWhite />
					))}
				</div>
			</div>
		</div>
	);
};
