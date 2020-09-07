import React, { useState } from "react";

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

	console.log(state);

	const { text } = props;
	const { name } = state;

	return (
		<div>
			<div>{text}</div>
			<div>{name}</div>
		</div>
	);
}
