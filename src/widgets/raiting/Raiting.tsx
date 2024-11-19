'use client'

import Heading from "@/components/heading/Heading";
import { useTranslations } from "next-intl";
import ReviewCard from "@/components/reviewCard";
import Slider from "@/components/slider/Slider";
import { Review } from "@/services/reviews.service";

interface RatingProps {
	rating?: number;
	reviews?: Review[];
}

const Rating = ({ reviews, rating }: RatingProps) => {
	const t = useTranslations("about");

	return (
		<section style={{ padding: '100px 0' }}>
			<div className="container">
				<Heading text={t("label")} />
				<div className="reviews">
					<Slider >
						{reviews?.map((review: Review, index) => (
							<div
								key={review.authorAttribution.displayName} className="embla__slide">
								<div>
									<ReviewCard
										key={index}
										title={`Review by ${review.authorAttribution.displayName}`}
										text={review.originalText.text}
										image={review.authorAttribution.photoUri}
										authorName={review.authorAttribution.displayName}
										authorImage={review.authorAttribution.photoUri}
										rating={review.rating}
									/>
								</div>
							</div>
						))}
					</Slider>
				</div>
			</div>
		</section>
	);
};

export default Rating;
