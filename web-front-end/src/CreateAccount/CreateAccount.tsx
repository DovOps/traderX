import { Box, Button, Modal } from "@mui/material"
import { FormEvent, useEffect, useState } from "react";
import { RJSFSchema, } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';
import Form, { IChangeEvent } from '@rjsf/core';
import React from "react";
import { GetAccounts } from "../hooks";

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

export const CreateAccount = () => {
	const accountId = Math.floor(Math.random() * 10000)
	const accounts = GetAccounts()
	// setRefData([])
	// 		data.forEach((refData:any) => {
	// 			return (
	// 				setRefData((prevData:any) => [...prevData, refData.companyName]))
	// 		})
	const [accountDisplayNames, setAccountDisplayNames] = useState<any>([])
	useEffect(() => {
		setAccountDisplayNames([])
		accounts.forEach((account:any) => {
			return (
				setAccountDisplayNames((prevData:any) => [...prevData, account.displayName])
			)
		})
	}, [accounts])
	const schema: RJSFSchema = {
		title: 'Create Account',
		type: 'object',
		required: ['displayName'],
		properties: {
			availableUserAccounts: { type: 'string', title: 'Available User Accounts', enum: accountDisplayNames},
			displayName: { type: 'string', title: 'Display Name' },
		},
	};
	const uiSchema = {
		"type": "VerticalLayout",
		"elements": [
			{
				"type": "Control",
				"scope": "#/properties/''",
				"options": {
					"ui:widget": "button",
					"autocomplete": true
				}
			}
		],
	}
	const log = (type:string) => console.log.bind(console, type);
	const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => setOpen(false);
	const handleOpen = async () => {
		setOpen(true);
		// try {
		// 	const response = await fetch("http://127.0.0.1:18085/stocks");
		// 	const data = await response.json();
		// 	console.log(data);
		// 	setRefData([])
		// 	data.forEach((refData:any) => {
		// 		return (
		// 			setRefData((prevData:any) => [...prevData, refData.companyName]))
		// 	})
		// } catch (error) {
		// 	throw error
		// }
	}
	const onSubmit = async (data: IChangeEvent<any>, _event: FormEvent<any>) => {
		const accountDetails = data.formData;
		const response = await fetch('http://127.0.0.1:18088/account/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				id: accountId,
				displayName: accountDetails.displayName
			}),
		});
		if (response.ok) {
			setOpen(false);
			console.log('success');
		} else {
			console.log('error');
		}
	}
	return (
		<div className="button-modal-container">
			<Button onClick={handleOpen} variant="contained">Create Account</Button>
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
				<Box sx={style}>
					<Form
						schema={schema}
						uiSchema={uiSchema}
						validator={validator}
						onChange={log('changed')}
						onSubmit={onSubmit}
						// onError={log('errors')}
					>
						{/* <Button variant="contained">Buy</Button>
						<Button variant="contained">Sell</Button> */}
					</Form>
				</Box>
				</Modal>
		</div>
	)
}