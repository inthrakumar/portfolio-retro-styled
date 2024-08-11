import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

function Project_Carousel({ images }: { images: string[] }) {
  if (!images || images.length === 0) {
    return <div>No images found!</div>;
  }

  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop>
      {images.map((image, index) => (
        <div key={index}>
          <img src={"https://www.dropbox.com/scl/fi/7fcvd1dbyedvuhvqfzhh3/userVolunteerPage-1.png?rlkey=03lr3joahxfi2ddkzsvtzxma7&st=5ix2uwpn&dl=0?raw=1"} onError={(error) => {
            console.log(error);
          }} alt={`Project Image ${index + 1}`} />
        </div>
      ))}
    </Carousel>
  );
}

export default Project_Carousel;
