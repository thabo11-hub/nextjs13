'use client'

import { useEffect } from 'react';

export default function Error({ error, reset }: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        console.log(error);
    }, [error]);

    return (
        <div>
            <p>Something went wrong SORRY!</p>
            <button onClick={() => reset()}>Reset error</button>
        </div>
    );
}

