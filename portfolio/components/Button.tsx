"use client";

import React from "react";

type ButtonProps = {
    children: React.ReactNode;
    className: string;
    onClick?: () => void;
}

export default function Button(props: ButtonProps) {
    return (
        <button onClick={props.onClick} className={`${props.className} bg-main text-sm hover:bg-main/90 cursor-pointer text-white px-5 py-2.5 rounded-full`}>
            {props.children}
        </button>
    )
}