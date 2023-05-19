import { BrowserRouter, Routes, Route } from 'react-router-dom';
//pages
import { RootPage, SettingsPage } from './pages/';
//applications
import { WeatherApp } from './applications';
//consts and utils functions
import { AppRoute } from './variables/app-routes';
//store
import { useAppSelector } from './generic-utils/hooks/hooks';
import { SelectorGetColorThemeState } from './store/selectors/selectors';
//global styles
import './global/global-variables.css';
import './global/global-colors.css';

function App() {
	const actuallyColorTheme = useAppSelector(SelectorGetColorThemeState);

	return (
		<div className={`theme-${actuallyColorTheme}`}>
			<BrowserRouter basename={AppRoute.ROOT_BASE_NAME}>
				<Routes>
					<Route path={AppRoute.ROOT} element={<RootPage />} />
					<Route path={AppRoute.SETTINGS} element={<SettingsPage />} />
					<Route path={AppRoute.WEATHER_APP_PATH} element={<WeatherApp />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
