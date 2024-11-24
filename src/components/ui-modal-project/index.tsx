import { useState, useEffect } from 'react';
import WebPortfolio from '../project-detail/WebPortfolio';
import RestApi from '../project-detail/RestApi';
import GitlabRunner from '../project-detail/GitlabRunner';
import WebRestaurant from '../project-detail/WebRestaurant';
import CostOptimization from '../project-detail/CostOptimization';

type Item = {
  title: string;
  description?: string;
  imageUrl?: string;
  link: string;
};

type Props = {
  item: Item;
};

const UIModalProject: React.FC<Props> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
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
        onClick={() => setIsOpen(true)}
        className="btn btn-outline btn-sm text-xs mt-6 opacity-50"
      >
        See Detail
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-25"
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

            <div className="relative inline-block h-[725px] overflow-y-auto p-6 pb-12 overflow-hidden text-left align-middle transition-all transform bg-base-100 shadow-lg w-4/5 min-[1440px]:w-3/5 rounded-md">
              <div className="flex items-start justify-end mx-auto">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-xs font-medium capitalize btn btn-outline btn-xs opacity-50"
                >
                  X
                </button>
              </div>

              <div className="flex items-center justify-center mx-auto">
                <img className="h-52 rounded-lg" src={item.imageUrl} alt="" />
              </div>

              <div className="pt-8 pb-4 px-4">
                <h3 className="font-semibold text-lg opacity-60">
                  {item.title}
                </h3>

                <p className="mt-2 text-gray-500">{item.description}</p>
              </div>

              {item.link == 'cost-optimization' ? <CostOptimization /> : null}
              {item.link == 'web-portfolio' ? <WebPortfolio /> : null}
              {item.link == 'rest-api' ? <RestApi /> : null}
              {item.link == 'gitlab-runner' ? <GitlabRunner /> : null}
              {item.link == 'web-restaurant' ? <WebRestaurant /> : null}

              <div className="flex items-start mt-4 ml-4 justify-start mx-auto">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-xs font-medium capitalize btn btn-outline btn-sm opacity-50"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UIModalProject;
