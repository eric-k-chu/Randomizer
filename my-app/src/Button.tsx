function Button({ text, onCustomClick }: {text: string, onCustomClick: Function }) {
    return (
        <button onClick={() => onCustomClick()}>{text}</button>
    )
}

export default Button