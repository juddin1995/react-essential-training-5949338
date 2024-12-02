import "./App.css";
import chef from './images/chef.avif';

function Header({ name, year }) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  );
}

const items = ["Macaroni and Cheese", "Salmon and Potatoes", "Tofu Stir Fry"];

const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish,
}));

function Main({ dishes }) {
  return (
    <main>
      <img src={chef} height={200} alt="chef" className="chef" />
      <ul>
        {dishes.map((dish) => (
          <li key={dish.id} style={{ listStyleType: "none" }}>
            {dish.title}
          </li>
        ))}
      </ul>
    </main>
  );
}

function App() {
  return (
    <div>
      <Header name="Jomir" year={new Date().getFullYear()} />
      <Main dishes={dishObjects} />
    </div>
  );
}

export default App;
