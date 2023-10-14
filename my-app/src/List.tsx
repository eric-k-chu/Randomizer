function List({ customList }: {customList: string[]}) {
    return (
        <ul>{customList.map(n => <li key={n}>{n}</li>)}</ul>
    )
}

export default List