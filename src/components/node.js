import React, { useState } from 'react';export function Node() {
    const [state, setState] = useState(0);
    return <div>{state}</div>;
}