import React, { useState } from 'react';export function Rect() {
    const [state, setState] = useState(0);
    return <div>{state}</div>;
}