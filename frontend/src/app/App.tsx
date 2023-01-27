import { BrowserRouter, Routes, Route } from 'react-router-dom';
//pages
import {RootPage} from './pages/';
//applications
import WeatherApp from './applications/weather-app/weather-app';
//consts and utils functions
import { AppRoute } from './variables/app-routes';
//styles
import './App.scss';

function App() {
  return (
		<BrowserRouter basename={AppRoute.ROOT}>
			<Routes>
				<Route path={AppRoute.ROOT} element={<RootPage/>}/>
				<Route path={AppRoute.WEATHER_APP_PATH} element={<WeatherApp/>}/>
			</Routes>
		</BrowserRouter>
  );
}

export default App;
