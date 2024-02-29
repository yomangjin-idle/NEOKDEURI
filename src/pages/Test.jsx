import ModalBottom from "components/atoms/ModalBottom";
import ModalDescription from "components/molecules/ModalDescription";
import { useState } from "react";

const Test = () => {
  const [open, setOpen] = useState(false);
  const onClickCloseModalHandler = () => {
    setOpen(false);
  };
  return (
    <>
      <button onClick={() => setOpen(true)}>모달열기</button>
      <ModalBottom open={open} onClickCloseModal={onClickCloseModalHandler}>
        <ModalDescription />
      </ModalBottom>
    </>
  );
};

export default Test;
