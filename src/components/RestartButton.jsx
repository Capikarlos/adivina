import React from 'react';

export default function RestartButton({ onRestart }) {
    return (
        <button onClick={onRestart} className="btn restart">
            🔄 Jugar de nuevo
        </button>
    );
}
