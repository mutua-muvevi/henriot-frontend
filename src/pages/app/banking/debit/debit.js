import { Outlet } from "react-router-dom";
import Page from "../../../../components/Page"

const BankingDebitCard = () => {
	return (
		<Page title="Current account details">
			<Outlet/>
		</Page>
	)
}

export default BankingDebitCard