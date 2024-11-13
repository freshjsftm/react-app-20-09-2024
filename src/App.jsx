import Wrapper from './components/Wrapper/Wrapper';
import Timer from './components/Timer/Timer';
import DropdownMenu from './components/DropdownMenu/DropdownMenu';
import Tooltip from './components/Tooltip/Tooltip';

function App() {
  return (
    <>
      <Wrapper>
        <Tooltip textTooltip="this is a timer, click START for start timer">
          <h2>Timer</h2>
        </Tooltip>
        <Timer />
      </Wrapper>
      <Wrapper>
        <Tooltip textTooltip='click button and select'>
          <h2>Dropdown Menu!</h2>
        </Tooltip>
        <DropdownMenu text="hi, user!">
          <button>account</button>
          <button>logout</button>
        </DropdownMenu>
        <DropdownMenu text="type" widthList={300}>
          <p>Lorem, ipsum dolor.</p>
          <p>Quo, nesciunt sapiente!</p>
          <p>Tenetur, dolore sit!</p>
        </DropdownMenu>
        <DropdownMenu text="links">
          <a href="">lorem 1</a>
          <a href="">lorem 2</a>
          <a href="">lorem 3</a>
        </DropdownMenu>
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
