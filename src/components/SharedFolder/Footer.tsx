import Icon, { facebook, insta, linkedin, mail, phone, twitter } from "../libs/icons";
import { Brand } from "./Brand";

export const Footer = () => {
	return (
		<div className="bg-[#000] py-[48px] containerr">
			
				
				<Brand />

				<div className="flex flex-wrap justify-between mt-9 border-t border-custom-gray ">
					<div className="w-full 2xl:w-1/3 col-span-2 pt-12 pb-[80px] flex flex-col">
						<p className="text-wrap text-center md:text-left text-[#fff] font-montserrat text-[24px] font-normal leading-[28.8px] tracking-[0.12px]">
							Subscribe and be the first to receive notifications about our upcoming releases and the
							latest news.
						</p>

						<div className="flex flex-col pt-12 gap-3">
							<button className="text-[16px] rounded-xl hover:bg-gray-900 transition duration-300 border border-white/50 not-italic font-medium leading-[20px] tracking-[0.08px]">
								<p className="text-[#fff] text-center text-[16px] font-normal py-[10px] leading-[24px] tracking-[0.08px] ">
									Enter your email
								</p>
							</button>
							<button className="text-[16px] bg-[#fff] hover:bg-white/80 transition duration-300 rounded-xl not-italic font-medium leading-[20px] tracking-[0.08px]">
								<p className="text-[#000] text-center text-[16px] py-[10px] font-normal leading-[24px] tracking-[0.08px] ">
									Subscribe
								</p>
							</button>
						</div>
					</div>
					<div className="w-full 2xl:w-2/3 flex flex-wrap justify-between pl-0 2xl:pl-[114px] ">
						<div className="text-white flex flex-col items-center col-span-1 pt-12 ">
							<div className="list-none text-nowrap">
								<p className="text-[#fff] text-[20px] font-medium leading-[24px] tracking-[0.1px]">
									Customer Services
								</p>
								<div className="flex flex-col gap-4 pt-6 text-[16px] font-normal leading-[24px] tracking-[0.08px] text-white/80">
									<li className="cursor-pointer hover:text-white transition duration-300">
										About Us
									</li>
									<li className="cursor-pointer hover:text-white transition duration-300">Search</li>
									<li className="cursor-pointer hover:text-white transition duration-300">
										Privacy Policy
									</li>
									<li className="cursor-pointer hover:text-white transition duration-300">
										Contact Us
									</li>
									<li className="cursor-pointer hover:text-white transition duration-300">
										Terms of Service
									</li>
									<li className="cursor-pointer hover:text-white transition duration-300">
										Refund policy
									</li>
									<li className="cursor-pointer hover:text-white transition duration-300">
										Track Order
									</li>
								</div>
							</div>
						</div>
						<div className="text-white flex flex-col items-center col-span-1 pt-12">
							<div className="list-none text-nowrap">
								<p className="text-[#fff] text-[20px] font-medium leading-[24px] tracking-[0.1px]">
									Products
								</p>
								<div className="flex flex-col gap-4 pt-6 text-[16px] font-normal leading-[24px] tracking-[0.08px] text-white/80">
									<li className="cursor-pointer hover:text-white transition duration-300">
										Featured products
									</li>
									<li className="cursor-pointer hover:text-white transition duration-300">
										Bestseller
									</li>
									<li className="cursor-pointer hover:text-white transition duration-300">
										Latest product
									</li>
									<li className="cursor-pointer hover:text-white transition duration-300">
										All collections
									</li>
									<li className="cursor-pointer hover:text-white transition duration-300">
										All products
									</li>
								</div>
							</div>
						</div>
						<div className="text-white flex flex-col items-start col-span-1 pt-12">
							<div className="list-none">
								<p className="text-[#fff] text-[20px] font-medium leading-[24px] tracking-[0.1px]">
									Contact Us
								</p>
								<div className="flex flex-col gap-4 pt-6 text-[16px] font-normal leading-[24px] tracking-[0.08px] text-white/80">
									<li>
										Available between 8AM to 8PM. Ready <br /> to answer your questions.
									</li>
									<li className="flex gap-3 items-center">
										<Icon path={phone} stroke="white" strokeWidth={1} />
										{/* <PhoneIcon /> */}
										<p>013456789</p>
									</li>
									<li className="flex gap-3 items-center">
										{/* <MailIcon /> */}
										<Icon path={mail} stroke="white" strokeWidth={1} />
										<p>store@valuetainment.com</p>
									</li>
									<li className="flex gap-3 items-center">
										<Icon path={facebook} fill="white" />
										<Icon path={twitter} fill="white" />
										<Icon path={linkedin} fill="white" />
										<Icon path={insta} fill="white" />
										{/* <FooterFacebookIcon />
                                        <FooterTwitterIcon />
                                        <FooterLinkedInIcon />
                                        <FooterInstagramIcon /> */}
									</li>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="pt-[120px] w-full">
					<div className="flex flex-col items-center lg:flex-row lg:items-end lg:justify-between">
						<p className="text-white/80 text-[16px] font-normal leading-[24px] tracking-[0.08px] text-center">
							© 2024 Valuetainment Store. All rights reserved.
						</p>
						
					</div>
				</div>
			
		</div>
	);
};
