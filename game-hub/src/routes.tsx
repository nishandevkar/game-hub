import { createBrowserRouter } from "react-router-dom";
import GamesDetailsPage from "./components/GamesDetailsPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
const router = createBrowserRouter([
	{
		path: "",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "games/:id",
				element: <GamesDetailsPage />,
			},
		],
	},
]);

export default router;
