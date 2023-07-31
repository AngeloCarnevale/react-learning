import './styles.css'


export default function TextInput (props) {
    return (
        <input 
        className='text-input'
        type="search" 
        value={props.searchValue}
        onChange={props.handleChange}
        placeholder='Type your search'
        />
    )
}