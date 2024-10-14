const HeroSection = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div>
          <h1>Heading 1</h1>
          <p>Paragraph</p>
        </div>
        <div>
          <div>
            <p>Browse our collection</p>
            <img src="path/to/your/image.jpg" alt="Arrow Icon" />
          </div>
          <div>
            <p>Shop Now</p>
            <img src="path/to/your/image.jpg" alt="Arrow Icon" />
          </div>
        </div>
      </div>
      <div
        className="bg-cover bg-center"
        style={{
          backgroundImage: "url(path/to/your/image.jpg)",
          height: "500px",
        }}
      ></div>
    </div>
  );
};

export default HeroSection;
