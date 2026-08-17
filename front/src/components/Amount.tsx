import { useState } from "react";
import type { AmountInterface } from "../interfaces/amountInterface";

function Amount(props: AmountInterface) {
    const [clickedButton, setClickedButton] = useState<number | null>(null);
    return (
        <>
            <div className="border rounded-lg p-4 text-center">
                <h5>{props.titre}</h5>
                <p>{props.amount}</p>
                <p>{props.description}</p>

                <img className="h-32 w-48 object-cover mx-auto" src={props.image} />

                <div className="flex flex-col items-center">
                    <button
                        id="1"
                        className={`${clickedButton === 1 ? "cursor-pointer rounded-lg p-2 border-2 bg-red-500" : "cursor-pointer rounded-lg p-2 border-2 border-red-500"}`}
                        onClick={() => setClickedButton(1)}>
                        Like
                    </button>
                    <button id="2" className="cursor-pointer rounded-lg p-2 border-2 border-green-500">
                        Add to Total Amount
                    </button>
                </div>
            </div>
        </>
    );
}

export default Amount;
