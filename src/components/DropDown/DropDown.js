import './DropDown.css'
const DropDown = (props) => (
<div className='drop-down'>
<label htmlFor="category" className="label">Choose a Category:</label>
<select name="category" className="drop-down-menu" onChange={props.change}>
  <option value='All'>All</option>
  {props.filterValues.map(value => (
    <option key={value} value={value}>{value}</option>
  ))}
</select>
</div>
)
export default DropDown;