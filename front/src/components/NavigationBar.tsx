import { useState } from "react";

/*
<button class="cursor-pointer ...">Submit</button>
<button class="cursor-progress ...">Saving...</button> "cursor-pointer active:cursor-progress"
<button class="cursor-not-allowed ..." disabled>Confirm</button>
*/
const menuList: string[] = ["Voyage", "Logement", "Nourriture", "Divers"];
function NavBar() {
    const [clickedMenu, setClickedMenu] = useState<number | null>(null);
    return (
        <>
            <div className="flex flex-col md:flex-row border justify-end">
                {menuList.map((menu: string, index: number) => (
                    <button
                        key={index}
                        className={`p-2 ${clickedMenu === index ? "cursor-progress" : "cursor-pointer"}`}
                        onClick={() => setClickedMenu(index)}>
                        {menu}
                    </button>
                ))}
            </div>
        </>
    );
}

export default NavBar;
