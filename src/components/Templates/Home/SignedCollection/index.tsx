import Icon, { rightArrow } from "../../../libs/icons";

export const SignedCollection = () => {
	return (
		<div>
			<div className="containerr bg-[#111] py-32 flex flex-wrap">
				<div>
					<div data-aos="fade-right">
						<p className="text-[#fff] text-center xl:text-left font-montserrat text-[28px] sm:text-[49px] not-italic font-medium leading-[59px] tracking-[0.5px] uppercase">
							Patrick Bet-David's
						</p>
					</div>

					<div data-aos="fade-right">
						<p className="text-center xl:text-left  sm:mt-8 font-montserrat text-[40px] sm:text-[70px] not-italic font-bold leading-[59px] tracking-[0.5px] uppercase bg-clip-text text-transparent bg-gradient-to-b from-[#DE2A2F] to-[#EF5256]">
							Signed
						</p>
					</div>

					<div data-aos="fade-right">
						<p
							className="text-center xl:text-left  sm:mt-8 font-montserrat text-[40px] sm:text-[70px] not-italic font-bold leading-[59px] tracking-[0.5px] uppercase bg-clip-text text-transparent bg-gradient-to-b from-[#DE2A2F] to-[#EF5256]"
						>
							Collection
						</p>
					</div>

					<div data-aos="fade-up-right" className="flex justify-center xl:justify-start">
						<button className="bg-[#FFF] transition duration-300 hover:scale-105 group text-[#000] font-inter text-[16px] not-italic text-center font-medium leading-[19px] tracking-[0.08px] mt-12 rounded-xl uppercase px-3 md:px-7 py-2 md:py-5 flex justify-center items-center gap-3">
							Shop Now
							<Icon path={rightArrow} fill="black" />
						</button>
					</div>

					<div className="flex justify-center xl:justify-start">
						<img className="mt-6" src="/images/img/signature1.png" alt="signature" />
					</div>
				</div>

				<div className="mx-auto  xl:w-1/2 xl:inline-flex gap-6 items-center overflow-hidden">
					<img
						data-aos="fade-up-right"
						className="w-[330px] xl:w-[354px] 2xl:w-[400px] xl:h-[480px] 2xl:h-[580px]"
						src="/images/img/book_2.png"
						alt="book1"
					/>
					<img
						data-aos="fade-up-left"
						className="w-[350px] xl:w-[304px] 2xl:w-[404px] xl:h-[418px] 2xl:h-[518px] ml-10 xl:ml-0"
						src="/images/img/book_1.png"
						alt="book2"
					/>
				</div>
			</div>
		</div>
	);
};
