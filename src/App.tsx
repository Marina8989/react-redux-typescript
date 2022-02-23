import React, {FC} from 'react';
import { Person, HairColor } from './components/Person';

const App:FC = () => {
  return (
    <>
    <Person name="marina" age={32} email="marg@gmail.com" hairColor={HairColor.Pink}/>
    </>
  );
}

export default App;
