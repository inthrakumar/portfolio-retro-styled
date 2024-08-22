import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image'
function Project_Carousel({ images }: { images: string[] }) {
  if (!images || images.length === 0) {
    return <div>No images found!</div>;
  }

  return (
    <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} interval={1500} stopOnHover={false}>
      {images.map((image, index) => (
        <div key={index} className='w-full h-full'>
          <Image src={image} width={"100"} height={100} onError={(error) => {
            console.log(error);
          }} alt={`Project Image ${index + 1}`} className='w-full h-full' />
        </div>
      ))}
    </Carousel>
  );
}

export default Project_Carousel;
