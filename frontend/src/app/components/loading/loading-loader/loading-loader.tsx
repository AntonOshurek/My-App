const LoadingLoader = (): JSX.Element => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden='true' focusable='false'
			width="24px" height="30px" viewBox="0 0 24 30" style={{ enableBackground: 'new 0 0 50 50' } as any} xmlSpace="preserve">

			<rect x="0" y="0" width="4" height="10">
				<animateTransform attributeType="xml"
					attributeName="transform" type="translate"
					values="0 0; 0 20; 0 0"
					begin="0" dur="0.6s" repeatCount="indefinite" />
			</rect>

			<rect x="10" y="0" width="4" height="10">
				<animateTransform attributeType="xml"
					attributeName="transform" type="translate"
					values="0 0; 0 20; 0 0"
					begin="0.2s" dur="0.6s" repeatCount="indefinite" />
			</rect>

			<rect x="20" y="0" width="4" height="10">
				<animateTransform attributeType="xml"
					attributeName="transform" type="translate"
					values="0 0; 0 20; 0 0"
					begin="0.4s" dur="0.6s" repeatCount="indefinite" />
			</rect>
		</svg>
	);
};

export default LoadingLoader;
