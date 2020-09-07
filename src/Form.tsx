import React, { useState } from "react";
import { omit } from "lodash";

interface IProps {
	text: string;
	age?: number;
}

interface IState {
	email: string;
	name: string;
}

export default function Form(props: IProps) {
	const [state, setState] = useState<IState>({
		name: "haris",
		email: "hpdipto@yahoo.com",
	});

	const { text } = omit(props, "age");
	const { name } = state;

	const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
		const { name, value }: any = e.target;
		setState({ ...state, [name]: value });
	};

	return (
		<div>
			<div>{text}</div>
			<div>{name}</div>

			<input name="name" value={name} onChange={handleChange} />
		</div>
	);
}
