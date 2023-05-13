import { Box, Button, Modal, } from "@mui/material"
import { FormEvent, useCallback, useState } from "react";
import { RJSFSchema, } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';
import Form, { IChangeEvent } from '@rjsf/core';

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
		title: 'Create/Update Account Users',
		type: 'object',
		required: ['username, fullName'],
		properties: {
			fullName: { type: 'string', title: 'Full Name', enum: matchingPeople},
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
	const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => setOpen(false);
	const handleOpen = () => setOpen(true);

	const onSubmit = async (data: IChangeEvent<any>, _event: FormEvent<any>) => {
		const accountDetails = data.formData;
		try {
				await fetch('http://127.0.0.1:18088/accountuser/', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						id: accountId,
						displayName: accountDetails.displayName
					}),
				});
				setOpen(false);
				console.log('success');
		} catch (error) {
			throw error
		}
	}

	const onChange = useCallback(async (event:any) => {
		// type data = () => Promise<unknown>;
		let json:any;
			try {
					const response = await fetch(`http://127.0.0.1:18095/People/GetMatchingPeople?SearchText=${event.target.value}`);
					json = await response.json();
					setMatchingPeople([]);
					json.forEach((data:any) => {
						setMatchingPeople((prevData:any) => [...prevData, data.fullName])
					})
			} catch (error) {
				return error;
			}
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
					<Form
						schema={schema}
						uiSchema={uiSchema}
						validator={validator}
						onChange={onChange}
						onSubmit={onSubmit}
					>
					</Form>
				</Box>
				</Modal>
		</div>
	)
}