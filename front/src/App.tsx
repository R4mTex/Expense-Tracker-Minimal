import NavBar from "./layout/NavigationBar";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import FollowedPage from "./pages/Followed/FollowedPage";
import HomePage from "./pages/HomePage";

function App() {
    const [followed, setFollowed] = useState<number[]>([]);
    const [isInitialized, setIsInitialized] = useState<boolean>(false);

    const handleClick = (id: number) => {
        if (followed.includes(id)) {
            setFollowed(followed.filter((item) => item !== id));
        } else {
            setFollowed([...followed, id]);
        }
    };

    useEffect(() => {
        const storedFollowed = localStorage.getItem("followed");
        const parsedFollowed = storedFollowed ? JSON.parse(storedFollowed) : [];
        setFollowed(parsedFollowed);
        setIsInitialized(true);
    }, []);

    useEffect(() => {
        if (isInitialized === true) {
            localStorage.setItem("followed", JSON.stringify(followed));
        }
    }, [followed, isInitialized]);

    return (
        <>
            <NavBar followed={followed} />
            <Routes>
                <Route path="/" element={<HomePage followed={followed} handleClick={handleClick} />}>
                    {" "}
                </Route>
                <Route path="/followed" element={<FollowedPage />}>
                    {" "}
                </Route>
            </Routes>
        </>
    );
}

export default App;
