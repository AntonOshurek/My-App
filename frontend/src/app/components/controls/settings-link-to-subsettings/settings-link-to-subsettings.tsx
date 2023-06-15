import { Link } from 'react-router-dom';
//styles
import './settings-link-to-subsettings.scss';

interface ISettingsLinkToSubsettingsPropsType {
	route: string,
	text: string,
};

const SettingsLinkToSubsettings = ({route, text}: ISettingsLinkToSubsettingsPropsType):JSX.Element => {
	return (
		<Link className='settings-link-to-subsettings' to={route}>{text}</Link>
	);
};

export default SettingsLinkToSubsettings
