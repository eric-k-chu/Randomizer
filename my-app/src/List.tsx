function List({ customList }: {customList: string[]}) {
    return (
        <ul className="text-center">{customList.map(n => <li key={n}>{n}</li>)}</ul>
    )
}

export default List