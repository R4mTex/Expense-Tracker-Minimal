import type { AmountInterface } from "../interfaces/amountInterface";

function Amount(props: AmountInterface) {
    return (
        <>
            <div className="border rounded-lg p-4 text-center">
                <h5>{props.titre}</h5>
                <p>{props.amount}</p>
                <p>{props.description}</p>

                <img className="h-32 w-48 object-cover mx-auto" src={props.image} />

                <div className="flex flex-col items-center">
                    <button>Like</button>
                    <button>Add to Total Amount</button>
                </div>
            </div>
        </>
    );
}

export default Amount;
