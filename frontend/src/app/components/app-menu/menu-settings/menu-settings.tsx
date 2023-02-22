import { useState } from 'react';
//components
import MenuDefaultSettings from '../menu-default-settings/menu-default-settings';
import MenuAccountSettings from '../menu-account-settings/menu-account-settings';
//styles
import './menu-settings.scss';

const enum settingsViews {
	SETTINGS = 'settings',
	ACCOUNT_SETTINGS = 'account-settings',
}

const MenuSettings = (): JSX.Element => {

	const [settingsView, setSettingsView] = useState<settingsViews>(settingsViews.ACCOUNT_SETTINGS);

	switch (settingsView) {
    case settingsViews.SETTINGS:
      return <MenuDefaultSettings/>;
    case settingsViews.ACCOUNT_SETTINGS:
      return <MenuAccountSettings />;
    default:
      return <MenuDefaultSettings/>
	}
};

export default MenuSettings;
