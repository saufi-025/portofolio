import React, { useState } from 'react';
export function Home() {
    const [state, setState] = useState(0);
    return <div>{state}</div>;
}