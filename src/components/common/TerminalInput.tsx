import React from 'react';

interface TerminalInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  maxLength?: number;
  required?: boolean;
}

export function TerminalInput({
  value,
  onChange,
  placeholder,
  disabled,
  maxLength,
  required
}: TerminalInputProps) {
  return (
    <div className="flex gap-2">
      <span className="text-green-300">{'>'}</span>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="flex-1 bg-transparent border-none outline-none text-green-500"
        placeholder={placeholder}
        disabled={disabled}
        maxLength={maxLength}
        required={required}
      />
    </div>
  );
}