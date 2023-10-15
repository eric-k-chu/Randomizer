function List({ customList, styles }: {customList: string[], styles?: string}) {
  return (
    <ul className={styles}>{customList.map(n => <li key={n}>{n}</li>)}</ul>
  )
}

export default List