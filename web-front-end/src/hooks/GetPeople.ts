import { useEffect, useState } from "react";

export const GetPeople = () => {
	const [people, setPeople] = useState<any>([]);
	type data = () => Promise<unknown>;
  useEffect(() => {
		let json:any;
    const loadPeople:data = async () => {
			try {
				const response = await fetch("http://127.0.0.1:18095/People/");
				if (response.ok) {
					json = await response.json();
					setPeople(json);
				}
			} catch (error) {
				return error;
			}
    }
    loadPeople();
  }, []);
	return people;
}