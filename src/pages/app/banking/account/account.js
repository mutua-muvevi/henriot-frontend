import { Outlet } from "react-router-dom";
import Page from "../../../../components/Page"

const BankingCurrentAccount = () => {
	return (
		<Page title="Current account details">
			<Outlet/>
		</Page>
	)
}

export default BankingCurrentAccount