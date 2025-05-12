export default function Message() {

  const handleClick=()=>{
    console.log('messageHere');
  }  
  return (
    <div>
      <button onClick={handleClick} >Click me</button>
    </div>
  );
}
