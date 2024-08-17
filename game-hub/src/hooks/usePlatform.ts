import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
    const { data: platforms } = usePlatforms();
    return platforms.results.find(
		(eachPlatform) => eachPlatform?.id === id
	);
}

export default usePlatform;