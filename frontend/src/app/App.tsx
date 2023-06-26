import { BrowserRouter, Routes, Route } from 'react-router-dom';
//pages
import { RootPage, SettingsPage, ChangeLocationPage } from './pages/';
//applications
import { WeatherApp, SecurePassApp } from './applications';
//consts and utils functions
import { AppRoute } from './variables/app-routes';
//store
import { useAppSelector } from './generic-utils/hooks/hooks';
import { SelectorGetColorThemeState } from './store/selectors/app-selectors';
//global styles
import './global/global-variables.css';
import './global/global-colors.css';
import './global/global-styles.scss';

function App() {
	const actuallyColorTheme = useAppSelector(SelectorGetColorThemeState);

	return (
		<div className={`theme-${actuallyColorTheme}`}>
			<BrowserRouter basename={AppRoute.ROOT_BASE_NAME}>
				<Routes>
					<Route path={AppRoute.ROOT} element={<RootPage />} />
					<Route path={AppRoute.SETTINGS} element={<SettingsPage />} />
					<Route path={AppRoute.CHANGE_LOCATION} element={<ChangeLocationPage />} />
					<Route path={AppRoute.WEATHER_APP} element={<WeatherApp />} />
					<Route path={AppRoute.SECURE_PASS_GENERATOR} element={<SecurePassApp />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
