import "./style/Button.css";

const CustomButton = ({inputValue, textButton, setTextButton}) => {
    return ( <button onClick={() => setTextButton(inputValue)}>
        <span>{textButton ? textButton : "Click me"}</span>
    </button> );
}
 
export default CustomButton;