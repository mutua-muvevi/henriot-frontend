import { Outlet } from "react-router-dom";
import Page from "src/components/UI/Page";

const Configuration = () => {
	return (
		<Page title="Configuration">
            <Outlet/>
        </Page>
	);
};

export default Configuration;
