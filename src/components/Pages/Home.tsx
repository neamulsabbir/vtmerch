import { MainLayout } from "../SharedFolder/LayOuts/MainLayout";
import { BestSellingProduct, MainSlider, SignedCollection } from "../Templates/Home";
import { Testimonial } from "../Templates/Home/Testimonial";

export const Home = () => {
	return (
		<MainLayout>
			<MainSlider />

			<BestSellingProduct />

			<SignedCollection />

			<Testimonial />
		</MainLayout>
	);
};
