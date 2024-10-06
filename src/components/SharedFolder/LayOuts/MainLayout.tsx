import { FC } from "react";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";

export const MainLayout: FC<PropsType> = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
};

interface PropsType {
	children?: React.ReactNode;
}
