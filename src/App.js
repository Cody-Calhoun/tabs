import React, {useState} from 'react';
import './App.css';
import Tabs from './components/Tabs';

function App() {

  const [tabs, setTabs] = useState([
    {
    title: "Tab1",
    content: "Tab One content",
    selected: false
    },
    {
      title: "Tab2",
      content: "Tab Two content",
      selected: false
    },
    {
      title: "Tab3",
      content: "Tab three content",
      selected: false
    }
  ])
  return (
    <div className="App">
      <Tabs tabs={tabs} setTabs={setTabs}/>
    </div>
  );
}

export default App;
