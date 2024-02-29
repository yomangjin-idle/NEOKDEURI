import useIsModalOpen from "hooks/useIsModalOpen";
import styled from "styled-components";

const ModalBottom = ({ open, onClickCloseModal, children }) => {
  const isOpen = useIsModalOpen(open, 100);
  if (!isOpen) return null;

  return (
    <Wrapper open={open} onClick={onClickCloseModal}>
      <Container>
        <Section onClick={(e) => e.stopPropagation()}>
          <Main>
            <ModalButton />
            {children}
          </Main>
        </Section>
      </Container>
    </Wrapper>
  );
};

export default ModalBottom;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Section = styled.section`
  width: 375px;
  position: fixed;
  bottom: 8.5rem;
  overflow: hidden;
  z-index: 10;
  animation: ${(props) => (props.open ? `opened 0.3s` : `closed 0.3s`)};

  @keyframes opened {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(100%);
    }
  }

  @keyframes closed {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0%);
    }
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1.25rem 1.25rem 0 0;

  padding: 1rem;
  position: relative;
  color: white;
  background-color: ${(props) => props.theme.colors.background.primary};
`;

const ModalButton = styled.span`
  width: 1.875rem;
  height: 0.25rem;
  border-radius: 1.25rem;
  background-color: #d9d9d9;
  margin-bottom: 1rem;
  border: 0;
`;
