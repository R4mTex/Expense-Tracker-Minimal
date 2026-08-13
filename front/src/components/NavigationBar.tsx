function NavBar(props: any) {
    const { menuList } = props;
    return (
        <>
            <p className="align-item-center">
                {menuList.map((menu: string, index: number) => (
                    <p key={index}>{menu}</p>
                ))}
            </p>
        </>
    );
}

export default NavBar;
