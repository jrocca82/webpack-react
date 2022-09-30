import React from "react";
const Loader = ({ isLoading, pastDelay, error }) => {
	if (isLoading && pastDelay) {
		return <p>Loading...</p>;
	} else if (error && !isLoading) {
		return <p>Error</p>;
	} else {
		return null;
	}
};

export default Loader;
