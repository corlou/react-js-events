


function App() {

  let someFruit = ["apple", "mango", "banana", "orange"];

  function fruitClickLogger(fruit, event) {
    console.log(`You clicked on the ${fruit}. 
    This event was ${event.type} and occured in the ${event.target.nodeName} element.`);
  }


  function logWhenClicked() {
    console.log("We clicked a thing!")
  }

  /* 
  {(event variable) => {
    whatever block of code we wanna run when the event happens
  }}
  */

  function mouseOverHeading(event) {
    console.log("Element we moused over is \n" + event.target);
    event.target.style.backgroundColor = "red";
    console.log("Mouse over the heading");
  }

  function mouseOutOfHeading(event) {
    console.log("Stopped mousing over the heading");
    event.target.style.backgroundColor = null;
  }

  // onkeydown
  function logKeyPress(event) {

    switch (event.key) {
      case "ArrowLeft":
      case "ArrowRight":
      case "ArrowUp":
      case "ArrowDown":
        console.log("User pressed " + event.key)
        break;
      default:
        break;
    }
  }

  // onblur & onfocus

  // onoffline & ononline

  // oncontextmenu (it's in Ed)

  // ondrag, ondragstart, ondragover, ondrop

  return (

    <div className="App"
      onClick={logWhenClicked}
      tabIndex={0}
      onKeyDown={logKeyPress}

      style={{ backgroundColor: "lightgrey", width: "100vw", height: "100vh" }
      }>

      <h1 onMouseOver={(event) => { mouseOverHeading(event) }}
        onMouseOut={(event) => { mouseOutOfHeading(event) }}>Cool Website Name</h1>

      {
        someFruit.map((fruit) => {
          return <p key={fruit} onClick={(event) => fruitClickLogger(fruit, event)}> Super awesome {fruit}</p>
        })
      }
    </div >
  );
}

export default App;
