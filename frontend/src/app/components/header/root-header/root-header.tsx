//components
import RootNavigation from '../../navigation/root-navigation/root-navigation';
import RootExitButton from '../../controls/root-exit-button/root-exit-button';
import HeaderClock from './header-clock/header-clock';
//variables
import { AppTitles } from '../../../variables/text';
//styles
import './root-header.scss';

const RootHeader = (): JSX.Element => {
  return (
    <header className="root-header">
      <div className='root-header__wrap container'>
        <h2 className='visually-hidden'>{AppTitles.ROOT_HEADER_TITLE}</h2>
				<HeaderClock/>
        <RootNavigation/>
				<RootExitButton/>
      </div>
    </header>
  )
}

export default RootHeader;
