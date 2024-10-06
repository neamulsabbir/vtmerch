import { Brand } from "./Brand";

export const Navbar = () => {
	return (
		<nav className="bg-bgRed">
			<div className="flex justify-between items-center px-10 md:px-20 py-10">
				<Brand isWhite />
				<div>
					<button className="text-white text-3xl sm:text-4xl ">&#9776;</button>
				</div>
			</div>
		</nav>
	);
};
