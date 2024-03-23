import CardAnalytics from "./Card/cardAnalytics";
import CardContent from "./Card/cardContent";
import CardHead from "./Card/cardHead";
import Footer from "./Footer";
import Navbar from "./Navbar/navbar";

export default function Home() {
	return (
		<div>
			<CardHead />
			<CardContent />
			<CardAnalytics />
		</div>
	);
}
