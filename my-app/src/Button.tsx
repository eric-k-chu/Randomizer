function Button({ text, onCustomClick, rounded }: {text: string, onCustomClick?: Function, rounded?: boolean }) {
    return (
        <button className={rounded ? "rounded-3xl" : undefined} onClick={() => onCustomClick?.()}>{text}</button>
    )
}

export default Button