import React, { useCallback, useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { GetPositions } from '../hooks/GetPositions';
import { GetTrades } from '../hooks/GetTrades';
import { AccountsDropdown } from '../Dropdown/AccountsDropdown';
import { Button, SelectChangeEvent } from '@mui/material';
import { CreateTradeButton } from '../CreateTradeButton/CreateTradeButton';
import { socket } from '../socket';
import { CreateAccount } from '../CreateAccount';
import { CreateAccountUser } from '../CreateAccountUser/CreateAccountUser';

const PUBLISH='publish';
const SUBSCRIBE='subscribe';
const UNSUBSCRIBE='unsubscribe';



export const Datatable = () => {
	const [tradeRowData, setTradeRowData] = useState<any>([]);
	const [tradeColumnDefs, setTradeColumnDefs] = useState<any>([]);
	const [positionRowData, setPositionRowData] = useState<any>([]);
	const [positionColumnDefs, setPositionColumnDefs] = useState<any>([]);
	const [selectedId, setSelectedId] = useState<number>(0);
	const [currentAccount, setCurrentAccount] = useState<string>('');

	const positionData = GetPositions(selectedId);
	const tradeData = GetTrades(selectedId);

	const handleChange = useCallback((event:SelectChangeEvent<any>) => {
		if (selectedId !== 0){
			socket.emit(UNSUBSCRIBE,`/accounts/${selectedId}/trades`);
			socket.emit(UNSUBSCRIBE,`/accounts/${selectedId}/positions`);
		}
		setSelectedId(event.target.value);
		setCurrentAccount(event.target.value);
		const positionKeys = Object.keys(positionData[0]);
		const tradeKeys = Object.keys(tradeData[0]);
		setPositionRowData(positionData);
		setTradeRowData(tradeData);
		setPositionColumnDefs([])
		setTradeColumnDefs([]);
		positionKeys.forEach((key:string) => setPositionColumnDefs((current: any) => [...current, {field: key}]));
		tradeKeys.forEach((key:string) => setTradeColumnDefs((current: any) => [...current, {field: key}]));
		socket.emit(SUBSCRIBE,`/accounts/${event.target.value}/trades`);
		socket.emit(SUBSCRIBE,`/accounts/${event.target.value}/positions`);
  }, [positionData, tradeData, selectedId])


return (
	<>
		<div style={{width: "100%"}}>
			<AccountsDropdown currentAccount={currentAccount} handleChange={handleChange} />
			<CreateTradeButton accountId={selectedId} />
			<CreateAccount />
			<CreateAccountUser />
		</div>
		<div className="ag-theme-alpine" style={{height: "80vh", width: "50%", float: "left"}}>
				<AgGridReact
						rowData={tradeRowData}
						columnDefs={tradeColumnDefs}>
				</AgGridReact>
		</div>
		<div className="ag-theme-alpine" style={{height: "80vh", width: "50%", float: "right"}}>
			<AgGridReact
					rowData={positionRowData}
					columnDefs={positionColumnDefs}>
			</AgGridReact>
		</div>
	</>
);
}