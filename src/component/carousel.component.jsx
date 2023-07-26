import Carousel from "react-bootstrap/Carousel";

function DarkVariantExample(props) {
  const {
    imgSrcOne,
    imgClassNameOne,
    imgAltOne,
    titleTextOne,
    titleClassOne,
    imgSrcTwo,
    titleTextTwo,
    onClick,
  } = props;
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img src={imgSrcOne} className={imgClassNameOne} alt={imgAltOne} />
        <Carousel.Caption>
          <h2 className={titleClassOne}>{titleTextOne}</h2>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={imgSrcTwo} className={imgClassNameOne} alt={imgAltOne} />
        <Carousel.Caption>
          <h2 className={titleClassOne}>{titleTextOne}</h2>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={imgSrcOne} className={imgClassNameOne} alt={imgAltOne} />
        <Carousel.Caption>
          <h2 className={titleClassOne}>{titleTextOne}</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
