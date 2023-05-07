


function App() {

  let someFruit = ["apple", "mango", "banana", "orange"];

  function fruitClickLogger(fruit, event) {
    console.log(`You clicked on the ${fruit}. 
    This event was ${event.type} and occured in the ${event.target.nodeName} element.`);
  }


  function logWhenClicked() {
    console.log("We clicked a thing!")
  }

  return (

    <div className="App" onClick={logWhenClicked} style={{ backgroundColor: "darkblue", width: "100vw", height: "100vh" }}>
      {someFruit.map((fruit) => {
        return <p key={fruit} onClick={(event) => fruitClickLogger(fruit, event)}> Super awesome {fruit}</p>
      })}
    </div >
  );
}

export default App;
