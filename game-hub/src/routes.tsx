import { createBrowserRouter } from "react-router-dom";
import GamesDetailsPage from "./components/GamesDetailsPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
const router = createBrowserRouter([
	{
		path: "",
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "games/:slug",
				element: <GamesDetailsPage />,
			},
		],
	},
]);

export default router;
