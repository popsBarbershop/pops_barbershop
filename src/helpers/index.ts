const IS_MOBILE: boolean =
	typeof navigator !== "undefined" &&
	/Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(
		navigator.userAgent
	);

export default IS_MOBILE;
