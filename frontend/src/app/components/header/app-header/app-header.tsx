//variables
import { AppTitles } from '../../../variables/text';
//styles
import './app-header.scss';

const AppHeader = (): JSX.Element => {
  return (
    <header className="app-header">
      <div className='app-header__wrap container'>
        <h1 className='visually-hidden'>{AppTitles.HEADER_TITLE}</h1>
        {/* <Navigation/> */}
      </div>
    </header>
  )
}

export default AppHeader;
