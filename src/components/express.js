import React, { useState } from 'react';
export function Expres() {
    const [state, setState] = useState(0);
    return <div>{state}</div>;
}