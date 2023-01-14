import './App.css';
import Card from './components/Card';
import Form from './components/Form';
import Card2 from './components/Card2';
import { useState } from 'react';

const App = ({people}) => {
  const [list, setList] = useState(people);
  const [newName, setName] = useState('');
  const [newAge, setAge] = useState('')
  
  const handleAddPerson = (event) => {
    event.preventDefault();

    if (newAge === '' || newName === '') {
      alert('Information cannot be empty!')
    }
    else if (isNaN(newAge) || newAge <= 0) {
      alert('Invalid age!')
      setAge('')
    }
    else {
      const newPerson = {
        name: newName,
        age: newAge
      }
  
      setList(list.concat(newPerson))
      setAge('')
      setName('')
    }
  }
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  }

  return (
    <div>
      <h1>Add new entry:</h1>
      <Form 
        newName={newName}
        newAge={newAge}
        handleNameChange={handleNameChange}
        handleAgeChange={handleAgeChange}
        handleAddPerson={handleAddPerson}
      >
      </Form>
      <h1>Namecards</h1>
      <div className='group-wrapper'>
        <div className='cards-wrapper'>
          <h2>List No.1:</h2>
          {list.map(person => (<Card key={person.name} person={person}></Card>))}
        </div>
        <div className='cards-wrapper'>
          <h2>List No.2:</h2>
          {list.map(person => (<Card2 key={person.name} person={person}></Card2>))}
        </div>

      </div>
    </div>
  )
}

export default App;
