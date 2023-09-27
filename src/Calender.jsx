import { useState } from 'react';
import Calendar from 'react-calendar';
import './App.css';

export default function MyApp(props) {
  const [value, onChange] = useState(new Date());

  return (
    <div className={props.className}>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
