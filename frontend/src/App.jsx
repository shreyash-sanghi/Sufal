import React from 'react';
import Header from './components/Header';
import { colorTheme } from './constants/colorTheme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Auth from './page/Auth';
import AboutUs from './page/AboutUs';
import ContactUs from './page/ContactUs';
import Campaign from './page/Campaign';
import SupportUs from './page/SupportUs';
import Footer from './components/Footer';
import Categories from './page/Categories';
import Dashboard from './components/Dashboard/Dashboard';
import Event from './components/Dashboard/Events/Event';
import CreateRegisterForm from './components/CreateRegisterForm';
import UplodeMultipleImage from './components/Dashboard/UplodeMultipleImage';
import AddEvent from './components/Dashboard/Events/AddEvents';
import ViewRegister from './components/Dashboard/Events/ViewRegister';
import CreateTeam from './components/Dashboard/CreateTeam';
import MyTeam from './components/Dashboard/Myteam';
import EditProfile from './components/Dashboard/EditProfile';
import Events from './page/Events';
const App = () => {
	return (
		<BrowserRouter>
			<div className="w-full h-full min-h-screen flex flex-col bg-[#fefaf6] text-[#16191E]">
				{/* <Header />	 */}
				<main className="flex-1 w-full">
					<AppRouter />
				</main>
				{/* <Footer /> */}
			</div>
		</BrowserRouter>
	);
};

export default App;

export const AppRouter = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={<Home />}
			/>
			<Route
				path="/auth"
				element={<Auth />}
			/>
			<Route
				path="/about-us"
				element={<AboutUs />}
			/>
			<Route
				path="/categories"
				element={<Categories />}
			/>
			<Route
				path="/events"
				element={<Events />}
			/>
			<Route
				path="/blogs"
				element={<span>News</span>}
			/>
			<Route
				path="/volunteer"
				element={<span>Volunteer</span>}
			/>
			<Route
				path="/contact-us"
				element={<ContactUs />}
			/>
			<Route
				path="/support-us"
				element={<SupportUs />}
			/>
			<Route
				path="/uplode_event_image"
				element={<UplodeMultipleImage />}
			/>


			{/* Backend routes */}
			<Route exact path="/dashboard" Component={Dashboard}></Route>
			<Route exact path="/event/:kind_of_event" Component={Event}></Route>
        <Route exact path="/event/:kind_of_event/:rid" Component={Event}></Route>
        <Route exact path="/book/register_booking/:rid" Component={CreateRegisterForm}></Route>
		<Route exact path="/add_event" Component={AddEvent}></Route>
		<Route exact path="/new_member" Component={CreateTeam}></Route>
		<Route exact path="/my_team" Component={MyTeam}></Route>
		<Route exact path="/edit_profile/:id" Component={EditProfile}></Route>
		<Route exact path="/view_register/:Eid" Component={ViewRegister}></Route>
		</Routes>
	);
};