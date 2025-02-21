export default function TabButton(props) {
  function handleClick(){
    console.log("Hello World!")
  }
  return (
    <li>
      <button onClick={props.onSelect}>{props.children}</button>
    </li>
  )
}