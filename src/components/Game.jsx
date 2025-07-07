// src/components/Game.jsx
import React, { useState } from 'react';
import InputNumber from './InputNumber';
import Message from './message';
import RestartButton from './RestartButton';

export default function Game() {
    const [target] = useState(() => Math.floor(Math.random() * 100) + 1);
    const [currentGuess, setCurrentGuess] = useState('');
    const [feedback, setFeedback] = useState('');
    const [attempts, setAttempts] = useState(0);
    const [won, setWon] = useState(false);

    const handleGuess = () => {
        const num = Number(currentGuess);
        if (!num || num < 1 || num > 100) {
            setFeedback('Ingresa un número válido entre 1 y 100');
            return;
        }
        setAttempts(a => a + 1);

        if (num === target) {
            setFeedback('¡Correcto! 🎉');
            setWon(true);
        } else if (num < target) {
            setFeedback('El número es mayor 🔼');
        } else {
            setFeedback('El número es menor 🔽');
        }
    };

    const handleRestart = () => {
        window.location.reload();
    };

    return (
        <div className="game">
            <h1>Adivina el Número</h1>

            {!won && (
                <>
                    <InputNumber value={currentGuess} onChange={setCurrentGuess} />
                    <button
                        onClick={handleGuess}
                        disabled={!currentGuess}
                        className="btn"
                    >
                        ¡Adivina!
                    </button>
                </>
            )}

            <Message text={feedback} />
            <p>Intentos: {attempts}</p>
            {won && <RestartButton onRestart={handleRestart} />}
        </div>
    );
}
