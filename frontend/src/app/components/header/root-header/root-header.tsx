//components
import RootNavigation from '../../navigation/root-navigation/root-navigation';
//styles
import './root-header.scss';

const RootHeader = (): JSX.Element => {
	return (
		<header className="root-header">
			<h1 className='visually-hidden'>My App application</h1>

			<RootNavigation />

		</header>
	)
}

export default RootHeader;
