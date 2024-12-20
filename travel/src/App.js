const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 1, description: "Charger", quantity: 22, packed: true },
  { id: 2, description: "Tourch", quantity: 4, packed: false },
  { id: 1, description: "Passports", quantity: 4, packed: true },
];
function App() {
  return (
    <div className="app">
      <Header />
      <From />
      <PackingList />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <div>
      <h1>🌴🌴Travel List🌴🌴</h1>
    </div>
  );
}
function From() {
  let option = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <div className="add-form">
      what do you need for you 🥰trip?
      <select>
        {/* <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
        <option value="">4</option> */}
        {/* Method first to caraet */}
        {/* {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num}>{num}</option>
        ))} */}
      </select>
      <input type="text" placeholder="Item..." />
      <button>ADD</button>
    </div>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <li>
            <span
              style={
                item.packed
                  ? {
                      textDecoration: "line-through",
                    }
                  : {}
              }
            >
              {item.quantity} 
              {item.description}
            </span>
            <button>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
function Footer() {
  return <div className="stats">You have x item list </div>;
}
export default App;
