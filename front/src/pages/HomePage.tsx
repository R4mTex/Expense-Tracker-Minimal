import { useEffect } from "react";
import AmountList from "../components/AmountList";

function HomePage({ followed, handleClick }: { followed: number[]; handleClick: (id: number) => void }) {
    useEffect(() => {
        console.log("Bienvenue dans Expense Tracker !");
        document.title = "Expense Tracker";
    }, []);
    return (
        <>
            <h1>Expense Tracker</h1>
            <AmountList followed={followed} handleClick={handleClick} />
        </>
    );
}
export default HomePage;
