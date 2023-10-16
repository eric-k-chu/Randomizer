function Popup({ popupText, isActive }: {popupText: string, isActive: Function}) {
  return (
    <div className='flex items-center justify-center absolute top-0 left-0 w-full h-full'>
      <div className="btn-modal animate-appear-out bg-dark-gray-1" onAnimationEnd={() => isActive(false)}>{popupText}</div>
    </div>
  )
}

export default Popup