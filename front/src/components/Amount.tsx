import { useState } from "react";

function Amount() {
    const [amount, setAmount] = useState(0);
    const [userInput, setUserInput] = useState("");

    const handleOnSubmit = (event: React.ChangeEvent) => {
        event.preventDefault();

        setAmount(Number(userInput));
    };

    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <input
                    type="number"
                    placeholder="Enter amount"
                    value={userInput}
                    onChange={(event) => setUserInput(event.target.value)}
                />

                <button type="submit">Add Amount</button>
            </form>

            <p>{amount}</p>
        </>
    );
}

export default Amount;
