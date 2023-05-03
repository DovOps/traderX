import React from 'react';
import { useCallback, useEffect, useState } from 'react';

export const AccountsDropdown = () => {
  const [accounts, setAccounts] = useState<any>([]);
  const [selectedAccountId, setSelectedAccountId] = useState<any>();
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    const loadAccounts = async () => {
      const response = await fetch("http://127.0.0.1:18088/account/");
      if (response.ok) {
        const accounts = await response.json();
        setAccounts(accounts);
      } else {
        console.log('error');
      }
    }
    loadAccounts();
  }, [setAccounts]);
  const accountUsers = accounts.map((account:any) => {
    return <div id={account.id}>{account.displayName}</div>
  })

  const handleClick = useCallback(async (event:any) => {
    const accountId = event.target.id
    console.log(accountId);
    setSelectedAccountId(accountId);
    const response = await fetch(`http://127.0.0.1:18088/accountuser/${accountId}`);
    if (response.ok) {
      const selectedAccount = response.json();
      console.log(selectedAccount);
    }
  }, []);

  return (
    <div onClick={handleClick} className='dropdown-container'>
      {accountUsers}
    </div>
  )
}