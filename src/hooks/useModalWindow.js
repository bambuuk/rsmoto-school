import { useState, useEffect } from "react";

function useModalWindow() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scroll, setScroll] = useState('0px');
  const [modalText, setModalText] = useState('');

  function calcScroll() {
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  }

  const handleOpenModal = (e, text) => {
    e.stopPropagation()
    setIsModalOpen(true);
    setModalText(text);
    
    document.body.classList.add('no-scroll');
    document.body.style.marginRight = `${scroll}px`;
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalText('');

    document.body.classList.remove('no-scroll');
    document.body.style.marginRight = '0px';
  };

  useEffect(() => {
    setScroll(calcScroll());
  }, []);

  return {handleCloseModal, handleOpenModal, isModalOpen, modalText};
}

export default useModalWindow;