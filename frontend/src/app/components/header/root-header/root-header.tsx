//components
import RootNavigation from '../../navigation/root-navigation/root-navigation';
import RootExitButton from '../../controls/root-exit-button/root-exit-button';
//variables
import { AppTitles } from '../../../variables/text';
//styles
import './root-header.scss';

const RootHeader = (): JSX.Element => {
  return (
    <header className="root-header">
      <div className='root-header__wrap container'>
        <h1 className='visually-hidden'>{AppTitles.HEADER_TITLE}</h1>
        <RootNavigation/>
				<RootExitButton/>
      </div>
    </header>
  )
}

export default RootHeader;
