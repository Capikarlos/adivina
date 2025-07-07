import React from 'react';

export default function Message({ text }) {
    if (!text) return null;
    return <div className="message">{text}</div>;
}
