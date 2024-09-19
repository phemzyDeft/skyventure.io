const ImageComp = ({
  image,
  alt = "image",
  width,
  height,
  styles = "",
  handleClick,
}) => {
  return (
    <img
      src={image}
      alt={alt}
      width={width}
      height={height}
      className={styles}
      onClick={handleClick}
    />
  );
};

export default ImageComp;
