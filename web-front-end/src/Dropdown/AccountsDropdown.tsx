import { useCallback, useEffect, useState } from 'react';

export const AccountsDropdown = () => {
  const [accounts, setAccounts] = useState<any>([]);
  const [selectedAccountId, setSelectedAccountId] = useState<any>();
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    const loadAccounts = async () => {
      const response = await fetch("http://127.0.0.1:18088/accountuser/");
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
    return <div id={account.accountId}>{account.username}</div>
  })

  const handleClick = useCallback((event:any) => {
    console.log(event.target.id);
    setSelectedAccountId(event.target.id);
  }, []);

  return (
    <div onClick={handleClick} className='dropdown-container'>
      {accountUsers}
    </div>
  )
}