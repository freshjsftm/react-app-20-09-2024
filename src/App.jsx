import RadioMap from "./components/RadioMap/RadioMap";

const transportation = [
  { label: "Car", value: "car" },
  { label: "Bicycle", value: "bicycle" },
  { label: "Bus", value: "bus" },
  { label: "Train", value: "train" },
  { label: "Airplane", value: "airplane" },
  { label: "Boat", value: "boat" },
  { label: "Motorcycle", value: "motorcycle" },
  { label: "Tram", value: "tram" },
  { label: "Subway", value: "subway" },
  { label: "Scooter", value: "scooter" }
];

const drinks = [
  { label: "Water", value: "water" },
  { label: "Coffee", value: "coffee" },
  { label: "Tea", value: "tea" },
  { label: "Juice", value: "juice" },
  { label: "Milk", value: "milk" },
  { label: "Soda", value: "soda" },
  { label: "Smoothie", value: "smoothie" },
  { label: "Cocktail", value: "cocktail" }
];

function App() {
  return (
    <>
     <RadioMap list={transportation} name='transport'/>
     <hr />
     <RadioMap list={drinks} name='drink'/>
    </>
  );
}

export default App;
