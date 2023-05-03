import { useEffect, useState } from "react";

export const GetTrades = () => {
	const [tradesData, setTradesData] = useState<any>([]);
	useEffect(() => {
		let json:any;
		type data = () => Promise<unknown>;

		const fetchData: data = async () => {
			try {
				const response = await fetch("http://127.0.0.1:/trades/");
				if (response.ok) {
					json = await response.json();
					setTradesData(json);
				}
			} catch (error) {
				return error;
			}
		};
		fetchData()
	}, [tradesData])
	return tradesData;
}