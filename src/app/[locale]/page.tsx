import Main from "@/widgets/main/Main";
import Services from "@/widgets/services/Services";
import Portfolio from "@/widgets/portfolio/Portfolio";
import Rating from "@/widgets/raiting/Raiting";
import Team from "@/widgets/team/Team";
import Place from "@/widgets/place/Place";
import { reviewsService } from "@/services/reviews.service";

const Home = async () => {
	const reviewsResponse = await reviewsService.getPlaceReviews();

	return (
		<>
			<Main />
			<Services />
			<Portfolio />
			<Rating
				rating={reviewsResponse?.rating}
				reviews={reviewsResponse?.reviews}
			/>
			<Team />
			<Place />
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.962644671147!2d20.988554777102685!3d52.24406215662201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecd9f91108f31%3A0xc5053490433593ba!2sBARBERSHOP%20POP%E2%80%99S!5e0!3m2!1sen!2spl!4v1724348546944!5m2!1sen!2spl"
				width="600"
				height="450"
				style={{
					width: "100%",
					height: "450px",
					border: 0
				}}
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			></iframe>
		</>
	);
};

export default Home;
