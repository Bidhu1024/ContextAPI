import React,{createContext, useState} from 'react';
import Child from './Child';
import './App.css';
import ThirdChild from './ThirdChild';

export const globalinfo = createContext();
function App() {
  const [color,setColor] = useState('red');
  const [day,setDay] = useState('Monday')
  const getDay=(Item)=>{
    console.log(Item);
    setDay(Item)
  }
  return (
    <globalinfo.Provider value={{AppColor:color, getDay:getDay}}>
    <div>
    <div>
      AppComponent {day}
    </div>
     <Child/>
     <ThirdChild/>
    </div>
    </globalinfo.Provider>
  );
}

export default App;
