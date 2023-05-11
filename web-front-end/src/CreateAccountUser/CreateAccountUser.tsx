import { Autocomplete, Box, Button, Modal, TextField } from "@mui/material"
import { FormEvent, useCallback, useState } from "react";
import { RJSFSchema, } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';
import Form, { IChangeEvent } from '@rjsf/core';
import React from "react";

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

export const CreateAccountUser = ({accountId}:any) => {
	const [matchingPeople, setMatchingPeople] = useState<any>([]);
	const schema: RJSFSchema = {
		title: 'Create Account User',
		type: 'object',
		required: ['username'],
		properties: {
			username: { type: 'string', title: 'Username' },
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
		const response = await fetch('http://127.0.0.1:18088/accountuser/', {
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

	const onChange = useCallback(async (event:any) => {
		// type data = () => Promise<unknown>;
		let json:any;
			try {
				const response = await fetch(`http://127.0.0.1:18095/People/GetMatchingPeople?SearchText=${event.target.value}`);
				if (response.ok) {
					json = await response.json();
					console.log(json);
					setMatchingPeople(json);
				}
			} catch (error) {
				return error;
			}
		// return positionsData;
		}, [])
	return (
		<div className="button-modal-container">
			<Button onClick={handleOpen} variant="contained">Create Account User</Button>
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
				<Box sx={style}>
					{/* <TextField id="outlined-basic" label="Find User to Add" variant="outlined" /> */}
					<Autocomplete
						disablePortal
						id="combo-box-demo"
						options={matchingPeople}
						sx={{ width: 300 }}
						renderInput={(params) => <TextField onChange={onChange} {...params} label="Find User to Add" />}
					/>
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