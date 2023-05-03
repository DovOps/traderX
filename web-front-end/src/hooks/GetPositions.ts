import { useEffect, useState } from "react";

export const GetPositions = () => {
	const [positionsData, setPositionsData] = useState<any>([]);
	useEffect(() => {
		let json:any;
		type data = () => Promise<unknown>;

		const fetchData: data = async () => {
			try {
				const response = await fetch("http://127.0.0.1:18090/positions/");
				if (response.ok) {
					json = await response.json();
					setPositionsData(json);
				}
			} catch (error) {
				return error;
			}
		};
		fetchData()
	}, [positionsData])
	return positionsData;
}