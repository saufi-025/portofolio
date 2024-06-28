import React, { useState } from 'react';export function Jquery() {
    const [state, setState] = useState(0);
    return <div>{state}</div>;
}