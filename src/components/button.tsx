import React, { ReactElement } from "react";

interface Props {
    children: JSX.Element[] | JSX.Element;
}

export default function Button({ children }: Props): ReactElement {
    return (
        <button className="px-8 py-4 rounded m-3 font-bold bg-purple-600 text-white">
            {children}
        </button>
    );
}
