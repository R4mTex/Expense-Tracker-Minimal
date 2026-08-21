import NavBar from "./layout/NavigationBar";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import FollowedPage from "./pages/Followed/FollowedPage";
import HomePage from "./pages/HomePage";
import { amountData } from "./data/amountData";

function App() {
    const [followed, setFollowed] = useState<number[]>([]);
    const [isInitialized, setIsInitialized] = useState<boolean>(false);
    const [totalAmount, setTotalAmount] = useState<number>(0);

    const handleClick = (id: number) => {
        if (followed.includes(id)) {
            setFollowed(followed.filter((item) => item !== id));
        } else {
            setFollowed([...followed, id]);
            if (followed.length === 4) {
                alert("5 Expenses Followed ! ");
            }
        }
    };

    const calculateTotalAmount = () => {
        const amounts: number[] = [];
        followed.forEach((id) => {
            const amount = amountData.find((item) => item.id === id)?.amount;

            if (amount !== undefined) {
                amounts.push(amount);
            }
        });
        let calculatedTotalAmount = 0;
        for (let i = 0; i < amounts.length; i++) {
            calculatedTotalAmount += amounts[i];
        }
        setTotalAmount(calculatedTotalAmount);
        /*REFACTO WITH reduce()*/
    };

    useEffect(() => {
        const storedFollowed = localStorage.getItem("followed");
        const parsedFollowed = storedFollowed ? JSON.parse(storedFollowed) : [];
        setFollowed(parsedFollowed);
        setIsInitialized(true);
    }, []);

    useEffect(() => {
        if (isInitialized === true) {
            localStorage.setItem("followed", JSON.stringify(followed));
        }
    }, [followed, isInitialized]);

    useEffect(() => {
        calculateTotalAmount();
    }, [followed]);

    return (
        <>
            <NavBar followed={followed} totalAmount={totalAmount} />
            <Routes>
                <Route path="/" element={<HomePage followed={followed} handleClick={handleClick} />}>
                    {" "}
                </Route>
                <Route path="/followed" element={<FollowedPage followed={followed} handleClick={handleClick} />}>
                    {" "}
                </Route>
            </Routes>
        </>
    );
}

export default App;
