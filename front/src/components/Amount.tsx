import type { AmountInterface } from "../interfaces/amountInterface";

function Amount(props: AmountInterface) {
    return (
        <>
            <p>{props.id}</p>
        </>
    );
}

export default Amount;
