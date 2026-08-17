import { useState } from "react";
import organisationIcon from "../assets/icons/charm--organisation.svg";

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
        path: "/home",
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

function NavBar() {
    const [clickedMenu, setClickedMenu] = useState<string | null>(null);
    return (
        <>
            <div className="flex flex-col md:flex-row border justify-end">
                <img className="" src={organisationIcon} alt="organisation tree" height="25" width="50" />
                {menuList.map((menu) => (
                    <button
                        key={menu.path}
                        className={`p-2 ${clickedMenu === menu.path ? "cursor-progress" : "cursor-pointer"}`}
                        onClick={() => setClickedMenu(menu.path)}>
                        {menu.name}
                    </button>
                ))}
            </div>
        </>
    );
}

export default NavBar;
