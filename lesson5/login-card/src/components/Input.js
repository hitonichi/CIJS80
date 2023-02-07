const Input = ({type, placeHolder, value, onChangeHandle}) => (
    <input 
        type={type}
        placeholder={placeHolder}
        value={value}
        onChange={(e) => onChangeHandle(e)}
        ></input>
)

export default Input