import React from "react";
import { Button } from "@material-ui/core";

export interface HelloProps {
    compiler: string;
    framework: string;
};

export const Hello = (props: HelloProps) => <Button variant="contained" color="primary">Hello from {props.compiler} and {props.framework}!</Button>;
