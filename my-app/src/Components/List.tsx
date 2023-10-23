import data from '../data'

type ListProps = {
  customList: string[];
  styles?: string;
  maxSize?: string;
  setCurrentList?: Function;
  closeList?: Function;
}

function List({ customList, styles }: ListProps) {
  return (
    <ul className={styles}>{customList.map((n, i) => <li key={i} className="animate-appear-in text-black dark:text-white">{n}</li>)}</ul>
  )
}

function SearchList({ customList, styles, maxSize, setCurrentList, closeList }: ListProps) {
  const limit = Number(maxSize);

  function handleOnListItemClick(e: any): void {
    const target = e.target as HTMLLIElement;
    if (data[target.textContent as string]) {
      setCurrentList?.(data[target.textContent as string]);
      closeList?.();
    }
  }

  return (
    <ul className={styles}>
      {customList.map((n, i) => <li key={i} className="px-2 hover:bg-slate-300 hover:cursor-pointer py-2 w-full" onClick={handleOnListItemClick}>{n}</li>).slice(0, limit)}
    </ul>
  )
}

export {
  List,
  SearchList
} 