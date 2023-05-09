import { useEffect, useState } from "react";

export const GetPositions = (accountId:number) => {
	const [positionsData, setPositionsData] = useState<any>([]);
	type data = () => Promise<unknown>;
	useEffect(() => {
		let json:any;
		const fetchData: data = async () => {
			try {
				const response = await fetch(`http://127.0.0.1:18090/positions/${accountId}`);
				if (response.ok) {
					console.log(response);
					json = await response.json();
					setPositionsData(json);
				}
			} catch (error) {
				return error;
			}
		};
		fetchData()
	}, [accountId]);
	return positionsData;
}