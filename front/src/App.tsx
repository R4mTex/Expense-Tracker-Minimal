import NavBar from "./components/NavigationBar";
/*import Category from "./components/Category";*/
import AmountList from "./components/AmountList";
import { useState } from "react";

function App() {
    /*
    const showMessage = true;
    const isLoggedIn = true;
    const isDisabled = false;
    const hundleClick = (message: any) => {
        alert(message);
    };
    const categories: string[] = ["Voyage", "Logement", "Nourriture"];
    */
    const [followed, setFollowed] = useState<number[]>([]);

    const handleClick = (id: number) => {
        if (followed.includes(id)) {
            setFollowed(followed.filter((item) => item !== id));
        } else {
            setFollowed([...followed, id]);
        }
    };
    return (
        <>
            <NavBar followed={followed} />
            <h1>Expense Tracker</h1>
            {/*
            <h2>{showMessage && (isLoggedIn ? "Welcome back !" : "Please dont leave me")}</h2>
            <button disabled={isDisabled} onClick={() => hundleClick("C'est moi")}>
                Click me
            </button>
            <Category categories={categories} />
            */}
            <AmountList handleClick={handleClick} followed={followed} />
        </>
    );
}

export default App;
