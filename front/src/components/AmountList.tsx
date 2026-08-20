import Amount from "./Amount";
import { amountData } from "../data/amountData";
import type { AmountInterface } from "../interfaces/amountInterface";

const randomAmountData: AmountInterface[] = [];

while (randomAmountData.length < 4) {
    const randomIndex = Math.floor(Math.random() * amountData.length);

    const alreadyExists = randomAmountData.some((amount) => amount.id === amountData[randomIndex].id);

    if (!alreadyExists) {
        randomAmountData.push(amountData[randomIndex]);
    }
}

function AmountList({ followed, handleClick }: { followed: number[]; handleClick: (id: number) => void }) {
    return (
        <>
            <div className="grid grid-cols-2 gap-4">
                {randomAmountData.map((amount) => (
                    <Amount key={amount.id} {...amount} followed={followed} handleClick={handleClick} />
                ))}
            </div>
        </>
    );
}
export default AmountList;
