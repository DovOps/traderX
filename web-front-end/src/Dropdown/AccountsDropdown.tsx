import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import "./AccountsDropdown.css"

export const AccountsDropdown = () => {
  const [accounts, setAccounts] = useState<any>([]);
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
    return (
      <div
        key={account.id}
        className='dropdown-item'
      >
        {account.displayName}
      </div>
    )
  })

  const handleClick = useCallback(async (event:any) => {
    const accountId = event.target.key
    console.log(accountId);
    const response = await fetch(`http://127.0.0.1:18088/accountuser/${accountId}`);
    if (response.ok) {
      const selectedAccount = response.json();
      console.log(selectedAccount);
    }
    setShow(prevState => !prevState)
  }, []);

  return (
    <div onClick={handleClick} className='dropdown-container'>
      Accounts
      {show && <div className='dropdown-content'>
        {accountUsers}
      </div>}
    </div>
  )
}