export 	function convertWindKmhToMs(windKmh: number): number {
	// 1 km/h = 0.277778 m/s
	const windMs = windKmh * 0.277778;
	return windMs;
};
