import { useEffect, useState } from "react";

export const GetAccounts = () => {
	const [accounts, setAccounts] = useState<any>([]);
  useEffect(() => {
    const loadAccounts = async () => {
      const response = await fetch("http://127.0.0.1:18088/account/");
      // const response = await fetch(`/account/`)
      if (response.ok) {
        const accounts = await response.json();
        setAccounts(accounts);
      }
      else {
        console.log('error');
      }
      // setAccounts(accountData);
    }
    loadAccounts();
  }, [setAccounts]);
	return accounts
}