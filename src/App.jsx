import FunctionAsProps from './FunctionAsProps';

export default function App() {
  function showName(name) {
    alert(name);
  }
  const password = () => {
    alert('password is: 880946');
  };
  return (
    <div style={{ fontFamily: 'sans-serif', padding: 24 }}>
      <FunctionAsProps showName={showName} name="Wardah" password={password} />
      <FunctionAsProps showName={showName} name="Zahida" password={password} />
      <FunctionAsProps showName={showName} name="Ahmad" password={password} />
      <FunctionAsProps showName={showName} name="Arsalan" password={password} />
      <FunctionAsProps showName={showName} name="Asad" password={password} />
    </div>
  );
}
