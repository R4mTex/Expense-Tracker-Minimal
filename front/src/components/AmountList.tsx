import Amount from "./Amount";
import { amountData } from "../data/amountData";
import type { AmountInterface } from "../interfaces/amountInterface";

const randomAmountData: AmountInterface[] = [];

for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * amountData.length);
    randomAmountData.push(amountData[randomIndex]);
}

function AmountList() {
    return (
        <>
            {randomAmountData.map((amount) => (
                <Amount key={amount.id} {...amount} />
            ))}
        </>
    );
}
export default AmountList;
