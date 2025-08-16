import { useRef, useState } from 'react';

export default function UncontrolledRefInput() {
  const inputRef = useRef(null);
  const [value, setValue] = useState('');

  const readValue = () => {
    setValue(inputRef.current?.value ?? '');
  };

  const clearValue = () => {
    if (inputRef.current) inputRef.current.value = '';
    setValue('');
  };

  return (
    <div>
      <input
        ref={inputRef}
        placeholder="Type something (uncontrolled)"
        defaultValue="Hello"
        style={{ padding: 8, borderRadius: 8, border: '1px solid #ccc' }}
      />
      <div style={{ marginTop: 8, display: 'flex', gap: 8 }}>
        <button onClick={readValue}>Read via ref</button>
        <button onClick={clearValue}>Clear</button>
      </div>
      <p style={{ marginTop: 8 }}>
        Last read value: <b>{value || '—'}</b>
      </p>
    </div>
  );
}
