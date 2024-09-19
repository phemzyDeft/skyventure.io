import { Route, Routes, useLocation } from "react-router";
import { Helmet } from "react-helmet";
import { AnimatePresence } from "framer-motion";
import { Suspense } from "react";
import Home from "./pages/Home";

import TermsAndCondition from "./pages/TermsAndCondition";
import PrivacyAndPolicy from "./pages/PrivacyAndPolicy";
import ComingSoon from "./pages/Coming-soon";

function App() {
	const location = useLocation();

	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>sky Ventures Studio</title>
				<link rel="canonical" href="https://www.skyventure.xyz/" />
			</Helmet>
			<section>
				<main className="text-app-white mx-auto body-size overflow-hidden ">
					<Suspense fallback={<p>Loading...</p>}>
						<AnimatePresence mode="wait">
							<Routes location={location} key={location.key}>
								<Route path="/" element={<Home />} />
								<Route
									path="/terms-and-conditions"
									element={<TermsAndCondition />}
								/>
								<Route
									path="/privacy-and-policy"
									element={<PrivacyAndPolicy />}
								/>
								<Route path="/coming-soon" element={<ComingSoon />} />
								<Route path="*" element={<Home />} />
							</Routes>
						</AnimatePresence>
					</Suspense>
				</main>
			</section>
		</>
	);
}

export default App;
