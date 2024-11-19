"use client";

import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

type CarouselProps = {
	children: React.ReactNode;
	isLoop?: boolean;
};

const Slider = (props: CarouselProps) => {
	const { children, isLoop } = props;
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: isLoop });

	useEffect(() => {
		if (emblaApi) {
			emblaApi.slideNodes();
		}
	}, [emblaApi]);

	return (
		<div className="embla" ref={emblaRef}>
			<div className="embla__container">
				{children}
			</div>
		</div>
	);
};

export default Slider;
