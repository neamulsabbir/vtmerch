export const Testimonial = () => {
	return (
		<section className="bg-gradient-to-r from-[#EC3339] to-[#BB1117] relative containerr">
			<div className="flex justify-between items-center flex-wrap gap-6 md:gap-10 xl:gap-0">
				<div data-aos="fade-right" className="flex-grow lg:max-w-screen-md xl:max-w-[860px] lg:pt-20 lg:pb-10 xl:py-40 px-6 md:px-0">
					<div className="absolute top-[2%] md:top-[2%] md:left-[-6%] xl:top-[4%] ">
						<img
							src="/images/img/quotes.svg"
							alt="Mission Image"
							width={180}
							height={180}
							className="w-[4rem] md:w-[120px] lg:w-[160px] xl:w-[210px] "
						/>
					</div>

					<p className="text-xl md:text-3xl lg:text-4xl font-bold  pt-10 md:pt-16 lg:pt-2 font-montserrat text-white ">
						OUR MISSION IS TO ENLIGHTEN, ENTERTAIN AND EMPOWER CURRENT AND FUTURE LEADERS AROUND THE WORLD.
					</p>
				</div>

				<div data-aos="fade-left" className="static mx-auto xl:absolute bottom-0 right-[5%] overflow-hidden sm:overflow-visible">
					<img
						src="/images/img/men.png"
						alt="Elevated Image"
						width={300}
						height={300}
						className="min-h-full sm:h-[20rem] xl:h-[35.5rem] w-full "
					/>
				</div>
			</div>
		</section>
	);
};

//
