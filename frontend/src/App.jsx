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

const App = () => {
	return (
		<BrowserRouter>
			<div className="w-full h-full min-h-screen flex flex-col bg-[#fefaf6] text-[#16191E]">
				<Header />
				<main className="flex-1 w-full">
					<AppRouter />
				</main>
				<Footer />
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
				path="/campaign"
				element={<Campaign />}
			/>
			<Route
				path="/news"
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
		</Routes>
	);
};