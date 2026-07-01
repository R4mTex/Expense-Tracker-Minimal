import type { AmountInterface } from "../interfaces/amountInterface";
import type { ChangeEvent } from "react";

interface AmountComponentInterface {
    amountInfos: AmountInterface;
}

const handleOnClick = async (event: ChangeEvent<HTMLInputElement>) => {
    const number = event.target.value;
    console.log(number);
};

const Amount = ({ amountInfos }: AmountComponentInterface) => {
    return (
        <>
            <h5>Montant</h5>
            <form>
                <input type="number" onChange={handleOnClick} />
            </form>
            <p>{amountInfos.amount}</p>
        </>
    );
};

export default Amount;
