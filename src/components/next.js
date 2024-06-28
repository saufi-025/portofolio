import React, { useState } from 'react';export function Next() {
    const [state, setState] = useState(0);
    return <div>{state}</div>;
}