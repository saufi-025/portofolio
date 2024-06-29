import React, { useState } from 'react';
export function Home() {
    return(<h1>hello world</h1>)
    const [state, setState] = useState(0);
    return <div>{state}</div>;
}