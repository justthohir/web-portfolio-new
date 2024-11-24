import { useState, useEffect } from 'react';
type Props = {
  imageUrl?: string;
};

const ImageModal: React.FC<Props> = ({ imageUrl }) => {
  const [isImg1Open, setIsImg1Open] = useState(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsImg1Open(false);
      }
    };

    // Add event listener for keydown
    document.addEventListener('keydown', handleEscape);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <div className="relative flex justify-center">
      <button
        onClick={() => setIsImg1Open(true)}
        className="btn btn-outline btn-sm text-xs mt-6 opacity-50"
      >
        Zoom In
      </button>

      {isImg1Open && (
        <div
          className="fixed inset-0 z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="bg-black bg-opacity-25 relative inline-block h-full p-6 pb-12 overflow-hidden text-left align-middle transition-all transform shadow-lg w-[90%] rounded-md">
              <div className="flex items-start justify-end mx-auto">
                <button
                  onClick={() => setIsImg1Open(false)}
                  className="text-xs font-medium capitalize bg-white btn btn-outline btn-xs opacity-50"
                >
                  X
                </button>
              </div>
              <br />
              <div className="flex items-center justify-center mx-auto">
                <img className="w-full rounded-lg" src={imageUrl} alt="" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageModal;
