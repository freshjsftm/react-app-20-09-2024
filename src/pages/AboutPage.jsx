import MouseTracker from '../components/MouseTracker/MouseTracker';

const AboutPage = () => {
  return (
    <section>
      <h1>About page</h1>
      <MouseTracker
        render={(position) => (
          <h3>x={position.x}, y={position.y}</h3>
        )}
      />
      <hr />
      <MouseTracker render={(position) => (
        <div style={{ position:'absolute',top:position.y, left: position.x, backgroundColor: 'pink', pointerEvents: 'none'}}>X</div>
      )} />
    </section>
  );
};

export default AboutPage;
