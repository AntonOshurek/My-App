import { BrowserRouter, Routes, Route } from 'react-router-dom';
//pages
import RootPage from './pages/root-page/root-page';
//consts and utils functions
import { AppRoute } from './variables/routes';
//styles
import './App.scss';

function App() {
  return (
		<BrowserRouter basename={AppRoute.ROOT}>
			<Routes>
				<Route path={AppRoute.ROOT} element={<RootPage/>}/>
			</Routes>
		</BrowserRouter>
  );
}

export default App;
