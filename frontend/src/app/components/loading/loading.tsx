//components
import LoadingLoader from './loading-loader/loading-loader';
//styles
import './loading.scss';

const Loading = (): JSX.Element => {
	return (
		<div className='loading'>
			<h3 className='loading__title'>loading</h3>
			<div className="loading__loader">
				<LoadingLoader/>
			</div>
		</div>
	);
};

export default Loading;
