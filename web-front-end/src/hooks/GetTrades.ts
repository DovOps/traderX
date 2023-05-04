import { useEffect, useState } from "react";

export const GetTrades = (accountId:number) => {
	const [tradesData, setTradesData] = useState<any>([]);
	type data = () => Promise<unknown>;

	useEffect(() => {
		let json:any;
		const fetchData: data = async () => {
			try {
				// const response = await fetch(`http://127.0.0.1:18086/${accountId}/trades/`);
				const response = await fetch(`https://finos-traderx.ngrok.app/positions/trades/22214`)
				if (response.ok) {
					json = await response.json();
					setTradesData(json);
				}
			} catch (error) {
				return error;
			}
		};
		fetchData();
	}, []);
	return tradesData;
}