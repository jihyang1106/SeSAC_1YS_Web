import './App.css';
import Swal from 'sweetalert2';
import { useState } from 'react';
import Counter from './components/Counter';
import Condition from './components/Condition';
import Pick from './components/Pick';
import ClassState from './components/ClassState';
import StateVariable from './components/StateVariable';
import ArrayState from './components/ArrayState';
import ObjState from './components/ObjState';

function App() {
  let [teacher, setTeacher] = useState('코딩온');

  function customSetTeacher(name) {
    teacher = name;
    setTeacher(name);
    Swal.fire(teacher);
  }

  return (
    <div className="App">
      <button onClick={() => customSetTeacher('codingon')}>영어로!</button>
      <br />
      <span>{teacher}</span>
      <Counter />
      <br />
      <Condition />
      <br />
      <Pick />
      <br />
      <ClassState />
      <br />
      <StateVariable />
      <br />
      <ArrayState />
      <br />
      <ObjState />
    </div>
  );
}

export default App;
