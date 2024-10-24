const RestApi = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full lg:w-1/2 py-2 px-4">
        <h3 className="font-semibold text-base opacity-60">About Project</h3>

        <p className="mt-1 text-gray-500">
          URL Demo :{' '}
          <a
            href="https://justthohir.in/demo/dummy-rest-api/"
            target="_blank"
            className="underline hover:no-underline"
          >
            https://justthohir.in/demo/dummy-rest-api/
          </a>
          <br />
          Repo :{' '}
          <a
            href="https://gitlab.com/mthohirin11/dummy-rest-api/-/pipelines"
            target="_blank"
            className="underline hover:no-underline"
          >
            https://gitlab.com/mthohirin11/dummy-rest-api/-/pipelines
          </a>
        </p>

        <h3 className="font-semibold text-base opacity-60 mt-4">Objective</h3>
        <p className="mt-1 text-gray-500">
          Implementing a seamless auto-deployment pipeline for Golang Rest API
          using Docker on a self-hosted Cloud VM with HAProxy, while leveraging
          GitLab CI/CD for continuous integration and delivery. Also ensuring
          proper HAProxy routing for the deployed services
        </p>

        <h3 className="font-semibold text-base opacity-60 mt-4">
          Tools & Technologies
        </h3>
        <p className="mt-1 text-gray-500 font-semibold">
          Golang / Docker / GitHub Action / HAProxy / Cloud VM
        </p>
      </div>
    </div>
  );
};

export default RestApi;
