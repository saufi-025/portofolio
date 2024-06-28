import React, { useState } from 'react';export function Tailwind() {
    const [state, setState] = useState(0);
    return <div>{state}</div>;
}