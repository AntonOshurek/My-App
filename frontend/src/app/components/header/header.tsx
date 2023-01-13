//variables
import { AppTitles } from '../../variables/text';
//styles
import './header.scss';

const Header = (): JSX.Element => {
  return (
    <header className="header">
      <div className='header__wrap container'>
        <h1 className='visually-hidden'>{AppTitles.HEADER_TITLE}</h1>
        {/* <Navigation/> */}
      </div>
    </header>
  )
}

export default Header;
