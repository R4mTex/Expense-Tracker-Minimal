import NavBar from "./layout/NavigationBar";
import { useState } from "react";
import { Route, Routes } from "react-router";
import Followed from "./pages/Followed/Followed";
import HomePage from "./pages/HomePage";

function App() {
    const [followed, setFollowed] = useState<number[]>([]);

    const handleClick = (id: number) => {
        if (followed.includes(id)) {
            setFollowed(followed.filter((item) => item !== id));
        } else {
            setFollowed([...followed, id]);
        }
    };

    return (
        <>
            <NavBar followed={followed} />
            <Routes>
                <Route path="/" element={<HomePage followed={followed} handleClick={handleClick} />}>
                    {" "}
                </Route>
                <Route path="/followed" element={<Followed />}>
                    {" "}
                </Route>
            </Routes>
        </>
    );
}

export default App;
