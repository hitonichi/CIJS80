import './App.css';
import Card from './components/Card';
import { useState } from 'react';


// function App({people}) {
//   return (
//     <div>
//       {people.map(person => (<Card person={person}></Card>))}
//     </div>
//   );
// }

const App = ({people}) => {
  return (
    <div>
      <h1>Namecards</h1>
      {people.map(person => (<Card person={person}></Card>))}
    </div>
  )
}

export default App;
