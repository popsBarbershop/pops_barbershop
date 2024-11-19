import { getRequestConfig } from "next-intl/server";

const locales = ["en", "pl"];

export default getRequestConfig(async ({ locale }) => {
	return {
		messages: (await import(`../locales/${locale}.json`)).default
	};
});
