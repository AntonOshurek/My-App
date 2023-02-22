import { useState, MouseEvent } from 'react';
//components
import MenuDefaultSettings from '../menu-default-settings/menu-default-settings';
import MenuAccountSettings from '../menu-account-settings/menu-account-settings';
//styles
import './menu-settings.scss';

const enum settingsNames {
	SETTINGS = 'settings',
	ACCOUNT = 'account settings',
	SUPPORT = 'support',
}

const MenuSettings = (): JSX.Element => {

	const [settingsView, setSettingsView] = useState<settingsNames>(settingsNames.ACCOUNT);

	const settingsButtonHandler = (evt: MouseEvent<HTMLButtonElement>) => {
		const buttonName = evt.currentTarget.textContent;

		if (buttonName) {
			switch (buttonName) {
				case settingsNames.SETTINGS:
					setSettingsView(settingsNames.SETTINGS)
					break;
				case settingsNames.ACCOUNT:
					setSettingsView(settingsNames.ACCOUNT)
					break;
				default:
					setSettingsView(settingsNames.SETTINGS)
					break;
			};
		};
	};

	const returnButtonHandler = () => {
		setSettingsView(settingsNames.SETTINGS)
	};

	switch (settingsView) {
    case settingsNames.SETTINGS:
      return <MenuDefaultSettings settingsButtonHandler={settingsButtonHandler}/>;
    case settingsNames.ACCOUNT:
      return <MenuAccountSettings returnButtonHandler={returnButtonHandler}/>;
    default:
      return <MenuDefaultSettings settingsButtonHandler={settingsButtonHandler}/>
	}
};

export default MenuSettings;
