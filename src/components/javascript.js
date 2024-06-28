import React, { useState } from 'react';export function Javascript() {
    const [state, setState] = useState(0);
    return <div>{state}</div>;
}