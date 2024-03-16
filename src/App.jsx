import "bootstrap/dist/css/bootstrap.min.css";
//import "/App.css";
import Fooditems from "./components/fooditems";
import Errormessage from "./components/error-message";

function App() {
  let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad", "Milk", "Ghee"];

  //let foodItems = [];
   //Here I'm storing the condition into the variable and putting the variable into the JSX file.

  /* The truthy falsy value condition is also there like"-
  {foodItems.length === 0 && <h5>I am still hungry.</h5>}
 */
  return (
    <>
      <h1>Healthy Food</h1>
      <Errormessage item = {foodItems}></Errormessage>
      <Fooditems item = {foodItems}></Fooditems>
    </>
  );
}

export default App;
