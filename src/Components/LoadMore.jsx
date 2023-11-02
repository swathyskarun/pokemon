const imagePerRow = 4;
export const ImageGallery = ({ imageGallery }) => {
  const [next, setNext] = useState(imagePerRow);
const handleMoreImage = () => {
    setNext(next + imagePerRow);
  };
return (
    <>
      <div className="gap-y-4 flex flex-wrap justify-center">
        {imageGallery?.slice(0, next)?.map((image, index) => {
          return (
            <div
              key={index}
              className="px-2.5 md:px-0"
            >
              <img
                className="cursor-pointer"
                src={image?.url}
              />
            </div>
          );
        })}
       {next < imageGallery?.length && (
          <Button
            className="mt-4"
            onClick={handleMoreImage}
          >
            Load more
          </Button>
        )}
      </div>
    </>
  );
};