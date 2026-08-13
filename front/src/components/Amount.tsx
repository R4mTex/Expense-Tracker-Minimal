import type { AmountInterface } from "../interfaces/amountInterface";

function Amount(props: any) {
    const { amountList } = props;
    console.log(props);
    return (
        <>
            {amountList.map((amount: AmountInterface) => (
                <p key={amount.id}>{amount.titre}</p>
            ))}
        </>
    );
}

export default Amount;
