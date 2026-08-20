import { useEffect } from "react";

function FollowedPage() {
    useEffect(() => {
        console.log("Bienvenue dans Expense Tracker - Followed !");
        document.title = "Expense Tracker - Followed";
    }, []);
    return (
        <>
            <p>HI</p>
        </>
    );
}
export default FollowedPage;
