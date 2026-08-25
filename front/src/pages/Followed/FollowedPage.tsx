import { useEffect } from "react";
import { getAllAmounts } from "../../api/exercices";

function FollowedPage({ followed, handleClick }: { followed: number[]; handleClick: (id: number) => void }) {
    useEffect(() => {
        console.log("Bienvenue dans Expense Tracker - Followed !");
        document.title = "Expense Tracker - Followed";
        getAllAmounts();
    }, []);

    return (
        <>
            <ul>
                {followed.map((id: number) => (
                    <li key={id}>
                        {id}
                        <button
                            className={`cursor-pointer rounded-lg p-2 border-2`}
                            onClick={() => {
                                handleClick(id);
                            }}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}
export default FollowedPage;
