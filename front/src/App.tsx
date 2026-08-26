import NavBar from "./layout/NavigationBar";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import FollowedPage from "./pages/Followed/FollowedPage";
import HomePage from "./pages/HomePage";
import { amountData } from "./data/amountData";
import type { AmountInterface } from "./interfaces/amountInterface";
import { getAmounts } from "./services/amountService";

function App() {
    const [followed, setFollowed] = useState<number[]>([]);
    const [isInitialized, setIsInitialized] = useState<boolean>(false);
    const [totalAmount, setTotalAmount] = useState<number>(0);
    const [amountDataState, setAmountDataState] = useState<AmountInterface[]>(amountData);
    /*const [counter, setCounter] = useState(55);
    const [minutes, setMinutes] = useState(0);*/

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

    const randomModificationOnAmountData = () => {
        const newAmount: AmountInterface = {
            id: 21,
            titre: "Voiture",
            amount: 450,
            currency: "EUR",
            description: "Changer pneu",
            category: "Véhicule",
            image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
            status: "Payé",
            created_at: "21/08/2026",
        };
        setAmountDataState((previous) => [...previous, newAmount]);
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

    useEffect(() => {
        localStorage.setItem("amountDataState", JSON.stringify(amountDataState));
    }, [amountDataState]);

    async function loadAmounts() {
        try {
            const amounts = await getAmounts();
            console.log("Here amounts : ", amounts);
            // ...
        } catch (error) {
            console.log("Here error : ", error);
            // ...
        }
    }
    loadAmounts();

    /*
    useEffect(() => {
        const timer = setInterval(() => {
            setCounter((previous) => {
                if (previous >= 59) {
                    setMinutes((previousMinutes) => previousMinutes + 1);
                    return 0;
                }

                return previous + 1;
            });
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    console.log("Temps passé : ", minutes, " minutes et ", counter, " secondes");*/

    return (
        <>
            <button
                onClick={() => {
                    randomModificationOnAmountData();
                }}>
                ADD
            </button>
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
