type ListProps = {
  customList: string[];
  styles?: string;
  maxSize?: string;
}

function List({ customList, styles }: ListProps) {
  return (
    <ul className={styles}>{customList.map((n, i) => <li key={i} className="animate-appear-in text-black dark:text-white">{n}</li>)}</ul>
  )
}

function SearchList({ customList, styles, maxSize }: ListProps) {
  const limit = Number(maxSize);
  return (
    <ul className={styles}>{customList.map((n, i) => <li key={i} className="px-2 hover:bg-slate-300 py-2 w-full">{n}</li>).slice(0, limit)}</ul>
  )
}

export {
  List,
  SearchList
} 