
export interface Review {
	relativePublishTimeDescription: string;
	rating: number;
	originalText: {
		text: string;
	};
	authorAttribution: {
		displayName: string;
		photoUri: string;
	};
}

interface PlaceDetailsResponse {
	rating: number;
	reviews: Review[];
}

class ReviewsService {
	private readonly API_KEY: string;
	private readonly PLACE_ID: string;
	private readonly BASE_URL: string;

	constructor(apiKey: string, placeId: string, baseUrl: string) {
		this.API_KEY = apiKey;
		this.PLACE_ID = placeId;
		this.BASE_URL = baseUrl;
	}

	private buildUrl(): string {
		return `${this.BASE_URL}/${this.PLACE_ID}?&fields=rating,reviews&key=${this.API_KEY}`;
	}

	public async getPlaceReviews(): Promise<PlaceDetailsResponse | undefined> {
		const url = this.buildUrl();

		try {
			const response = await fetch(url);

			return await response.json();
		} catch (error) {
			throw new Error(`Error: ${error}`);
		}
	}
}

export const reviewsService = new ReviewsService(
	process.env.NEXT_PUBLIC_API_KEY as string,
	process.env.NEXT_PUBLIC_PLACE_ID as string,
	process.env.NEXT_PUBLIC_BASE_URL as string
);
