import "./index.css";
import Navbar from "./Navbar";
import Card from "./Card";
import Data from "./Data";

function App() {
  const cards = Data.map(function (item) {
    return (
      <div>
        <Card title={item.title} currencies={item.currencies} key={item.id} />
      </div>
    );
  });

  return (
    <div>
      <Navbar />
      <div className="card-list">{cards}</div>
    </div>
  );
}

export default App;
