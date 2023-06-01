


export const ListOfComments = (props: {
    ids: number[]
}) => {
    const {ids} = props;
    return (
        <ul>
            {ids?.map((id: number) => (
                <li key={id}>
                    {id}
                </li>
            ))}
        </ul>
    )
}