// src/components/Info.js
import React, { useState, useEffect } from 'react';

function Info() {
    const [info, setInfo] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setInfo('React is a powerful library for building UIs!');
        }, 2000);
    }, []);

    return (
        <div>
            <h2>Did you know?</h2>
            <p>{info || 'Loading...'}</p>
        </div>
    );
}

export default Info;
