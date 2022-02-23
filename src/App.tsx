import React, {FC} from 'react';
import { Person } from './components/Person';

const App:FC = () => {
  return (
    <>
    <Person name="marina" age={32} email="marg@gmail.com"/>
    </>
  );
}

export default App;
