import { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { SelectChangeEvent } from '@mui/material';
import React from 'react';

// type SelectionChange = (event: SelectChangeEvent<any>) => void
// const accountData = [
//   {id: 10031, displayName: 'Internal Trading Book'},
//   {id: 11413, displayName: 'Private Clients Fund TTXX'},
//   {id: 22214, displayName: 'Test Account 20'},
//   {id: 42422, displayName: 'Algo Execution Partners'},
//   {id: 44044, displayName: 'Trading Account 1'},
//   {id: 52355, displayName: 'Big Corporate Fund'},
//   {id: 62654, displayName: 'Hedge Fund'}
// ]

export const AccountsDropdown = ({handleChange, currentAccount}:any) => {
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
  const accountUsers = accounts.map((account:any) => {
    return (
      <MenuItem
        value={account.id}
        key={account.id}
      >
        {account.displayName}
      </MenuItem>
    )
  })

  return (
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel>UserAccount</InputLabel>
        <Select
          // labelId="demo-select-small-label"
          // id="demo-select-small"
          value={currentAccount}
          label="Accounts"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {accountUsers}
        </Select>
      </FormControl>
  );

  // const handleClick = useCallback(async (event:any) => {
  //   const accountId = event.target.key
  //   console.log(accountId);
  //   const response = await fetch(`http://127.0.0.1:18088/accountuser/${accountId}`);
  //   if (response.ok) {
  //     const selectedAccount = response.json();
  //     console.log(selectedAccount);
  //   }
  //   setShow(prevState => !prevState)
  // }, []);

  // return (
  //   <div onClick={handleClick} className='dropdown-container'>
  //     Accounts
  //     {show && <div className='dropdown-content'>
  //       {accountUsers}
  //     </div>}
  //   </div>
  // )
}