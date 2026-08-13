import NavBar from "./components/NavigationBar";
import Amount from "./components/Amount";
import Category from "./components/Category";
import { amounts } from "./data/amountData";

function App() {
    const menuList: string[] = ["Voyage", "Logement", "Nourriture", "Divers"];
    const showMessage = true;
    const isLoggedIn = true;
    const isDisabled = false;
    const hundleClick = (message: any) => {
        alert(message);
    };
    const categories: string[] = ["Voyage", "Logement", "Nourriture"];
    return (
        <>
            <NavBar menuList={menuList} />
            <h1>Expense Tracker</h1>
            <h2>{showMessage && (isLoggedIn ? "Welcome back !" : "Please dont leave me")}</h2>
            <Amount amount={amounts} />
            <button disabled={isDisabled} onClick={() => hundleClick("C'est moi")}>
                Click me
            </button>
            <Category categories={categories} />
        </>
    );
}

export default App;
