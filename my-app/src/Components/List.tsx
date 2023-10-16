import React from 'react'

function List({ customList, styles }: {customList: string[], styles?: string}) {
  return (
    <ul className={styles}>{customList.map(n => <li key={React.useId()} className="animate-appear-in">{n}</li>)}</ul>
  )
}

export default List