import './custom-button.styles.css'

const CustomButton = ({children,...props}) => (
    <button className='button' {...props}>
        <span>{children}</span>
    </button>
)

export default CustomButton;