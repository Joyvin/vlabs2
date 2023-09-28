import { useState } from "react";

export default function Message({ value }) {
    return (
        <div className="mt-3 inline-flex text-blue-700 p-2 border border-blue-700 rounded-xl">{value}</div>
    )
}