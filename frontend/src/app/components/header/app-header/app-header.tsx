//variables
import { AppTitles } from '../../../variables/text';
//styles
import './app-header.scss';

const AppHeader = (): JSX.Element => {
  return (
    <header className="app-header">
      <div className='app-header__wrap container'>
        <h2 className='visually-hidden'>{AppTitles.ROOT_HEADER_TITLE}</h2>
        {/* <Navigation/> */}
      </div>
    </header>
  )
}

export default AppHeader;
