import { useState } from 'react';

function Modal({ modalText }: {modalText: string}) {
  return (
    <div className="btn-modal animate-appear-out bg-dark-gray-1">{modalText}</div>
  )
}

function Button({ text, onCustomClick, styles, modalText }: {text: string, onCustomClick?: Function, styles?: string, modalText?: string}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {(modalText && !showModal) && <Modal modalText={modalText}/>}
      <button className={styles} onClick={() => {
        onCustomClick?.();
        setShowModal(true);
        } }>{text}
      </button>
    </>
  )
}

export default Button