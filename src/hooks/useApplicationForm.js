import { useState } from "react";

function useApplicationForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (isSubmitted === false) {
      setName("");
      setPhone("");
      setEmail("");
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return {
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    isSubmitted,
    onSubmit
  };
}

export default useApplicationForm;
