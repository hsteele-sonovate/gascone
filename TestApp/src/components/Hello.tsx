import * as React from "react";

export interface IHelloProps { text: string; }

export const Hello = (props: IHelloProps) => <h1>Text: {props.text}!</h1>;