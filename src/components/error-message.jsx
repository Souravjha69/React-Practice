function Errormessage (item) {
  let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad", "Milk", "Ghee"];
  return (
    <>
    {item.length === 0 ? <h5>I am still hungry</h5> : null}
    </>
  )
}

export default Errormessage;