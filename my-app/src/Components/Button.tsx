type ButtonType =  "button" | "submit" | "reset";

type ButtonProps = {
  text: string;
  onCustomClick: Function;
  styles?: string;
  type?: ButtonType;
}

function Button({ text, onCustomClick, styles, type = 'button' }: ButtonProps) {
  return (
    <button className={styles} onClick={() => onCustomClick()} type={type}>{text}</button>
  )
}

export default Button