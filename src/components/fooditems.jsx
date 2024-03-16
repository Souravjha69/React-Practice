import  Item from "./Item";
function Fooditems ({item})  {

  let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad", "Milk", "Ghee"];
  return (
    <>
    <ol className="Listing">
        {item.map((item) => (
          <Item  key={item} foodItem ={item}></Item>
        ))}
      </ol>
    </>
  )
}

export default Fooditems;