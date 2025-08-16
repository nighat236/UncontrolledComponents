import { useState } from 'react';

export default function UncontrolledFormData() {
  const [result, setResult] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    setResult(data);
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input name="name" placeholder="Your name" />
      </label>
      <br />
      <br />

      <label>
        Email:
        <input name="email" type="email" placeholder="you@example.com" />
      </label>
      <br />
      <br />

      <button type="submit">Submit</button>

      {result && (
        <pre style={{ marginTop: 12, background: '#f7f7f7', padding: 12 }}>
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </form>
  );
}
