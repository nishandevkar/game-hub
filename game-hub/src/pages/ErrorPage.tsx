import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
	const routeError = useRouteError();
	return (
		<div>
			<Box padding={5}>
				<Navbar />
				<Heading>Oops...</Heading>
				{isRouteErrorResponse(routeError) ? (
					<Text>Looks like this page does not exist.</Text>
				) : (
					<Text>An unexpected error occurred.</Text>
				)}
			</Box>
		</div>
	);
};

export default ErrorPage;
