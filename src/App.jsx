import Select from './components/Select/Select';

const countries = [
  { label: 'United States', value: 'us' },
  { label: 'Canada', value: 'ca' },
  { label: 'United Kingdom', value: 'uk' },
  { label: 'Australia', value: 'au' },
  { label: 'Germany', value: 'de' },
  { label: 'France', value: 'fr' },
  { label: 'Italy', value: 'it' },
  { label: 'Spain', value: 'es' },
  { label: 'Japan', value: 'jp' },
  { label: 'China', value: 'cn' },
  { label: 'Brazil', value: 'br' },
  { label: 'India', value: 'in' },
  { label: 'South Africa', value: 'za' },
  { label: 'Mexico', value: 'mx' },
  { label: 'Ukraine', value: 'ua' },
];

function App() {
  return (
    <>
      <Select list={countries} />
    </>
  );
}

export default App;
