function Category(props: any) {
    const { categories } = props;
    return (
        <>
            <ul>
                {categories.map((category: string, index: number) => (
                    <li key={index}>{category}</li>
                ))}
            </ul>
        </>
    );
}

export default Category;
