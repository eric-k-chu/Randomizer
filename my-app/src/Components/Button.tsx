type ButtonType =  "button" | "submit" | "reset" | undefined;

type ButtonProps = {
  text?: string;
  onCustomClick?: Function;
  styles?: string;
  type?: ButtonType;
}


function Button({ text, onCustomClick, styles, type }: ButtonProps) {
  return (
    <button className={styles} onClick={() => onCustomClick?.()} type={type ? type : "button"}>{text}</button>
  )
}

export default Button