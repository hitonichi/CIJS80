import { useContext } from "react"
import { CartContext } from "../CartContext"
import FontAwesome from 'react-fontawesome'
import faStyles from 'font-awesome/css/font-awesome.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Cart = ({
    toggleModal,
}) => {
    const {cart} = useContext(CartContext)

    const quantity = cart.reduce((prev, cur) => 
        prev += cur.quantity, 0)

    return (
        <div className="cart-container">
            <div className=" btn d-flex rounded-pill gap-2 fw-bold text-primary cart-btn" onClick={toggleModal}>
                <div 
                    className=""
                >Your Cart</div>
                <div className="bg-danger rounded-circle px-2">{quantity}</div>
            </div>
        </div>
    )
}

export default Cart