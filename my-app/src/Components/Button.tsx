function Button({ text, onCustomClick, styles }: {text: string, onCustomClick?: Function, styles?: string }) {
  return (
    <button className={styles} onClick={() => onCustomClick?.()}>{text}</button>
  )
}

export default Button