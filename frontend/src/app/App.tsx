import { BrowserRouter, Routes, Route } from 'react-router-dom';
//pages
import {RootPage, WeatherAppPage} from './pages/';
//consts and utils functions
import { AppRoute } from './variables/routes';
//styles
import './App.scss';

function App() {
  return (
		<BrowserRouter basename={AppRoute.ROOT}>
			<Routes>
				<Route path={AppRoute.ROOT} element={<RootPage/>}/>
				<Route path={AppRoute.WEATHER_APP} element={<WeatherAppPage/>}/>
			</Routes>
		</BrowserRouter>
  );
}

export default App;
