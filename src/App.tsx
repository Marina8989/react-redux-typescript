import React, {FC, createContext} from 'react';
import { Person, HairColor } from './components/Person';

interface AppContextInterface {
   name:string;
   age: number;
   country: string;
}

const AppContext = createContext<AppContextInterface | null>(null)

const App:FC = () => {

  const contextValue: AppContextInterface = {
     name:'Pedro',
     age: 20,
     country: 'Brazil'
  }
  return (
    <AppContext.Provider value={contextValue}>
    <Person name="marina" age={32} email="marg@gmail.com" hairColor={HairColor.Pink}/>
    </AppContext.Provider>
  );
}

export default App;
