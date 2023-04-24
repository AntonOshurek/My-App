import { BrowserRouter, Routes, Route } from 'react-router-dom';
//pages
import { RootPage, SettingsPage } from './pages/';
//applications
import { WeatherApp } from './applications';
//consts and utils functions
import { AppRoute } from './variables/app-routes';
//global styles
import './global/global-variables.css';
import './global/global-colors.css';

function App() {
	return (
		<BrowserRouter basename={AppRoute.ROOT_BASE_NAME}>
			<Routes>
				<Route path={AppRoute.ROOT} element={<RootPage />} />
				<Route path={AppRoute.SETTINGS} element={<SettingsPage />} />
				<Route path={AppRoute.WEATHER_APP_PATH} element={<WeatherApp />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
