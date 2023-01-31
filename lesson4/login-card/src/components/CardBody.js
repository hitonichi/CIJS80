import Input from './Input';
import Button from './Button';
import Socials from './Socials';
import NavLink from './NavLink';

const CardBody = () => (
    <div className='card-body'>
        <Input type='text' placeHolder='Email, sdt'></Input>
        <Input type='password' placeHolder='matkhau'></Input>
        <Button title={'ĐĂNG NHẬP'}></Button>
        
        <div className='nav-container'>
            <NavLink title={'Quên mật khẩu'} align='left'></NavLink>
            <NavLink title={'Đăng nhập với SMS'} align='right'></NavLink>
        </div>

        <Socials></Socials>
    </div>
)

export default CardBody