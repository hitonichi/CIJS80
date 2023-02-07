import './App.css';
import Card from './components/Card';
import CardHeader from './components/CardHeader';
import CardBody from './components/CardBody';
import {useState} from 'react';

const App = () => {
  const [newName, setNewName] = useState('')
  const [newPw, setNewPw] = useState('')
  
  const nameChangeHandle = (e) => {
    setNewName(e.target.value)
  }
  
  const pwChangeHandle = (e) => {
    setNewPw(e.target.value)
  }
  
  return (
    <Card>
      <CardHeader title={'Đăng nhập'}></CardHeader>
      <CardBody 
        newName={newName}
        newPw={newPw}  
        nameHandle={nameChangeHandle}
        pwHandle={pwChangeHandle}
      ></CardBody>
    </Card>
  );
}

export default App;
