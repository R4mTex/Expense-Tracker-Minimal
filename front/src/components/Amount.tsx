import type { AmountInterface } from "../interfaces/amountInterface";

function Amount(props: AmountInterface & { followed: number[]; handleClick: (id: number) => void }) {
    return (
        <>
            <div className="border rounded-lg p-4 text-center">
                <h5>{props.titre}</h5>
                <p>{props.amount}</p>
                <p>{props.description}</p>

                <img className="h-32 w-48 object-cover mx-auto" src={props.image} />

                <div className="flex flex-col items-center">
                    <button
                        className={`cursor-pointer rounded-lg p-2 border-2 ${
                            props.followed.includes(props.id) ? "bg-red-500" : "border-red-500"
                        }`}
                        onClick={() => {
                            props.handleClick(props.id);
                        }}>
                        Like
                    </button>
                    <button className="cursor-pointer rounded-lg p-2 border-2 border-green-500">
                        Add to Total Amount
                    </button>
                </div>
            </div>
        </>
    );
}

export default Amount;
