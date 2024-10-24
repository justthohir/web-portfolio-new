const WebPortfolio = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full lg:w-1/2 py-2 px-4">
        <h3 className="font-semibold text-base opacity-60">About Project</h3>

        <p className="mt-1 text-gray-500">
          URL Demo :{' '}
          <a
            href="https://justthohir.in"
            target="_blank"
            className="underline hover:no-underline"
          >
            https://justthohir.in
          </a>
          <br />
          Repo :{' '}
          <a
            href="https://github.com/justthohir/web-portfolio-new/actions"
            target="_blank"
            className="underline hover:no-underline"
          >
            https://github.com/justthohir/web-portfolio-new/actions
          </a>
        </p>

        <h3 className="font-semibold text-base opacity-60 mt-4">Objective</h3>
        <p className="mt-1 text-gray-500">
          Implementing a seamless auto-deployment pipeline for ReactJS
          applications using Docker on a self-hosted Cloud VM, while leveraging
          GitHub Actions for continuous integration and delivery. Also ensuring
          proper HAProxy routing for the deployed services
        </p>

        <h3 className="font-semibold text-base opacity-60 mt-4">
          Tools & Technologies
        </h3>
        <p className="mt-1 text-gray-500 font-semibold">
          ReactJS / Docker / GitHub Action / HAProxy / Cloud VM
        </p>
      </div>
    </div>
  );
};

export default WebPortfolio;
