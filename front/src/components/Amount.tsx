import { useState } from "react";
import type { AmountInterface } from "../interfaces/amountInterface";

function Amount(props: AmountInterface) {
    const [clickedButton, setClickedButton] = useState<number | null>(null);

    const [followed, setFollowed] = useState<number[]>([]);
    console.log("Step 1 : ", followed);

    const [numberCount, setNumberCount] = useState(0);

    const handleClick = (id: number) => {
        if (followed.includes(id)) {
            setClickedButton(0);
            setFollowed(followed.filter((item) => item !== id));
            console.log("Step 2 : ", followed);
            setNumberCount((number) => number - 1);
        } else {
            setClickedButton(1);
            setFollowed([...followed, id]);
            console.log("Step 3 : ", followed);
            setNumberCount((number) => number + 1);
        }
    };
    return (
        <>
            <div className="border rounded-lg p-4 text-center">
                <h5>{props.titre}</h5>
                <p>{props.amount}</p>
                <p>{props.description}</p>

                <img className="h-32 w-48 object-cover mx-auto" src={props.image} />

                <div className="flex flex-col items-center">
                    <button
                        className={`${clickedButton === 1 ? "cursor-pointer rounded-lg p-2 border-2 bg-red-500" : "cursor-pointer rounded-lg p-2 border-2 border-red-500"}`}
                        onClick={() => {
                            handleClick(props.id);
                        }}>
                        Like
                    </button>
                    <p>{numberCount}</p>
                    <button className="cursor-pointer rounded-lg p-2 border-2 border-green-500">
                        Add to Total Amount
                    </button>
                </div>
            </div>
        </>
    );
}

export default Amount;
