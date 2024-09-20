

const Picture = (props) => {
  const {src, alt} = props;
  return (
    <img src={src} alt={alt}/>
  );
}

export default Picture;
