import React from 'react';

export default function InputNumber({ value, onChange }) {
  return (
    <input
      type="number"
      min="1"
      max="100"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder="Escribe un número (1-100)"
      className="input"
    />
  );
}
