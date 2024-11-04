import { useState, useEffect } from 'react';
import Wrapper from './components/Wrapper/Wrapper';
import Timer from './components/Timer/Timer';
import ModalWindow from './components/ModalWindow/ModalWindow';

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  useEffect(() => {
    const idTimeOut = setTimeout(() => {
      setIsOpenModal(true)
    }, 2000);
    return () => {
      clearTimeout(idTimeOut);
    };
  }, []);
  const closeModal = ()=>{setIsOpenModal(false)}
  return (
    <>
      {isOpenModal && (
        <ModalWindow closeModal={closeModal}>
          <h3>modal window</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            quae ipsam libero deleniti ut suscipit.
          </p>
        </ModalWindow>
      )}
      <Wrapper>
        <h2>Timer</h2>
        <Timer />
      </Wrapper>
      <Wrapper>
        <h2>Hi!</h2>
      </Wrapper>
      <Wrapper>
        <h2>Hello!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          voluptates maiores provident ullam necessitatibus, illo debitis neque
          molestiae dicta odio!
        </p>
      </Wrapper>
    </>
  );
}

export default App;
