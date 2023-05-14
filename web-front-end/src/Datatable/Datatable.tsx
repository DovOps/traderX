import React, { useCallback, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { SelectChangeEvent } from '@mui/material';
import { socket } from '../socket';
import { GetPositions, GetTrades } from '../hooks';
import { CreateAccount, CreateAccountUser, CreateTradeButton } from '../ActionButtons';
import { ColDef } from 'ag-grid-community';
import { PositionData, TradeData } from './types';
import { AccountsDropdown } from '../AccountsDropdown';

// const PUBLISH='publish';
const SUBSCRIBE='subscribe';
const UNSUBSCRIBE='unsubscribe';



export const Datatable = () => {
	const [tradeRowData, setTradeRowData] = useState<TradeData[]>([]);
	const [tradeColumnDefs, setTradeColumnDefs] = useState<ColDef[]>([]);
	const [positionRowData, setPositionRowData] = useState<PositionData[]>([]);
	const [positionColumnDefs, setPositionColumnDefs] = useState<ColDef[]>([]);
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
		positionKeys.forEach((key:string) => setPositionColumnDefs((current: ColDef<PositionData>[]) => [...current, {field: key}]));
		tradeKeys.forEach((key:string) => setTradeColumnDefs((current: ColDef<TradeData>[]) => [...current, {field: key}]));
		socket.emit(SUBSCRIBE,`/accounts/${event.target.value}/trades`);
		socket.emit(SUBSCRIBE,`/accounts/${event.target.value}/positions`);
  }, [positionData, tradeData, selectedId])


return (
	<>
		<div className="accounts-dropdown">
			<AccountsDropdown currentAccount={currentAccount} handleChange={handleChange} />
		</div>
		<div className="action-buttons" style={{width: "100%", display: "flex"}}>
			<CreateTradeButton accountId={selectedId} />
			<CreateAccount />
			<CreateAccountUser accountId={selectedId} />
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