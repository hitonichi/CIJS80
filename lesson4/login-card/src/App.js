import './App.css';
import Card from './components/Card';
import CardHeader from './components/CardHeader';
import CardBody from './components/CardBody';

function App() {
  return (
    <Card>
      <CardHeader title={'Đăng nhập'}></CardHeader>
      <CardBody></CardBody>
    </Card>
  );
}

export default App;
