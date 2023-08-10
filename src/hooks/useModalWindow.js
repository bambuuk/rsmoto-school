import { useState, useEffect } from "react";

function useModalWindow() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scroll, setScroll] = useState("0px");
  const [modalText, setModalText] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  function calcScroll() {
    let div = document.createElement("div");

    div.style.width = "50px";
    div.style.height = "50px";
    div.style.overflowY = "scroll";
    div.style.visibility = "hidden";

    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  }

  const handleOpenModal = (e, text) => {
    e.stopPropagation();
    setIsModalOpen(true);
    setModalText(text);

    document.body.classList.add("no-scroll");
    document.body.style.marginRight = `${scroll}px`;
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalText("");
    setName('');
    setPhone('');
    setEmail('');
    setIsSubmitted(false);

    document.body.classList.remove("no-scroll");
    document.body.style.marginRight = "0px";
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (isSubmitted === false) {
      setIsSubmitted(true);

      setTimeout(() => {
        handleCloseModal();
        setIsSubmitted(false);
      }, 3000);
    }
  };

  useEffect(() => {
    setScroll(calcScroll());
  }, []);

  return {
    handleCloseModal,
    handleOpenModal,
    isModalOpen,
    modalText,
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    onSubmit,
    isSubmitted
  };
}

export default useModalWindow;
