import { FC } from "react";
import { ProductType } from "../Templates/Home/constant";

export const ProductCard: FC<PropsType> = ({ data, isWhite }) => (
	<div
		className={`${
			isWhite && "bg-white p-4 rounded-xl"
		} flex flex-col items-center cursor-pointer hover:scale-105 transition duration-300`}
	>
		<img src={data?.img} alt={data?.title} className="rounded-lg w-full h-80 object-cover" />
		<h3
			className={`${
				isWhite ? "text-fontBlack" : " text-white"
			} mt-2 text-[16px] not-italic font-medium leading-[20px] tracking-[0.08px] w-full `}
		>
			{data?.title}
		</h3>
		<div className="flex text-[20px] mt-3 not-italic font-medium leading-6 tracking-[0.1px] gap-2 w-full space-x-2">
			<span className={`${isWhite ? "text-fontBlack" : " text-white"}`}>${data?.price?.regularPrice}</span>
			<span className={`${isWhite ? "text-fontBlack" : " text-white"} line-through  opacity-80`}>
				${data?.price?.regularPrice}
			</span>
		</div>
	</div>
);

interface PropsType {
	data: ProductType;
	isWhite?: boolean;
}
