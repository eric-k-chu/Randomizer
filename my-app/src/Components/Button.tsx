type ButtonType =  "button" | "submit" | "reset" | undefined;


function Button({ text, onCustomClick, styles, type }: {text?: string, onCustomClick?: Function, styles?: string, type?: ButtonType}) {
  return (
    <button className={styles} onClick={() => onCustomClick?.()} type={type ? type : "button"}>{text}</button>
  )
}

export default Button