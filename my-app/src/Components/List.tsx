type ListProps = {
  customList: string[];
  styles?: string;
}

function List({ customList, styles }: ListProps) {
  return (
    <ul className={styles}>{customList.map((n, i) => <li key={i} className="animate-appear-in text-black dark:text-white">{n}</li>)}</ul>
  )
}

export default List