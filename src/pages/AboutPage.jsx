import Slider from '../components/Slider/Slider';

const AboutPage = () => {
  return (
    <section>
      <h1>About page</h1>
      <Slider
        min={0}
        max={100}
        render={(value) => (
          <div style={{height:'50px', backgroundColor: 'pink'}}>
            <div style={{height:'100%', backgroundColor: 'red', width: `${value}%`}}></div>
          </div>
        )}
      />
      <Slider
        min={100}
        max={1000}
        render={(value) => <p>current value = {value}</p>}
      />
    </section>
  );
};

export default AboutPage;
