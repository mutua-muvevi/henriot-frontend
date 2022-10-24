import { Outlet } from "react-router-dom";
import Page from "../../../../components/Page"

const BankingCryptoAccount = () => {
	return (
		<Page title="Crypto">
			<Outlet/>
		</Page>
	)
}

export default BankingCryptoAccount