import { useEffect, useState } from "react";

export const GetTrades = (accountId:number) => {
	const [tradesData, setTradesData] = useState<any>([]);
	type data = () => Promise<unknown>;

	useEffect(() => {
		let json:any;
		const fetchData: data = async () => {
			try {
				const response = await fetch(`http://127.0.0.1:18090/trades/${accountId}`);
				if (response.ok) {
					console.log('trades response');
					json = await response.json();
					setTradesData(json);
				}
			} catch (error) {
				return error;
			}
		};
		fetchData();
	}, [accountId]);
	return tradesData;
}