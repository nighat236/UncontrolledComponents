import UncontrolledRefInput from './demos/UncontrolledRefInput';
import UncontrolledFormData from './demos/UncontrolledFormData';

export default function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: 24 }}>
      <h1>Uncontrolled Components</h1>
      <UncontrolledRefInput />
      <hr />
      <UncontrolledFormData />
    </div>
  );
}
