import { useState } from "react";
import organisationIcon from "../assets/icons/charm--organisation.svg";
import { useNavigate } from "react-router";
/* import { NavLink } from "react-router";

/*
<button class="cursor-pointer ...">Submit</button>
<button class="cursor-progress ...">Saving...</button> "cursor-pointer active:cursor-progress"
<button class="cursor-not-allowed ..." disabled>Confirm</button>
*/
interface MenuItem {
    name: string;
    path: string;
}

const menuList: MenuItem[] = [
    {
        name: "Expenses",
        path: "/",
    },
    {
        name: "Travel",
        path: "/travel",
    },
    {
        name: "Housing",
        path: "/housing",
    },
    {
        name: "Food",
        path: "/food",
    },
    {
        name: "Deverses",
        path: "/deverses",
    },
    {
        name: "Followed",
        path: "/followed",
    },
];

function NavBar({ followed, totalAmount }: { followed: number[]; totalAmount: number }) {
    const [clickedMenu, setClickedMenu] = useState<string | null>(null);
    const navigate = useNavigate();
    return (
        <>
            <nav className="navbar">
                {/*
                <NavLink to="/" className={({ isActive }) => (isActive ? "activeLink" : undefined)}>
                    Home
                </NavLink>
                */}
                <div className="flex flex-col md:flex-row border justify-end">
                    <img className="" src={organisationIcon} alt="organisation tree" height="25" width="50" />
                    {menuList.map((menu) => (
                        <button
                            key={menu.path}
                            className={`p-2 ${clickedMenu === menu.path ? "cursor-progress" : "cursor-pointer"}`}
                            onClick={() => {
                                setClickedMenu(menu.path);
                                navigate(menu.path);
                            }}>
                            {menu.name}
                            {menu.name === "Followed" && (
                                <span className="ml-2">{`(${followed.length}) Total : ${totalAmount}€`}</span>
                            )}
                        </button>
                    ))}
                </div>
            </nav>
        </>
    );
}

export default NavBar;
