import ImageModal from './ImageModal';

const CostOptimization = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full min-[1440px]:w-1/2 py-2 px-4">
        <h3 className="font-semibold text-base opacity-60">Main Goal</h3>
        <p className="mt-1 text-gray-500">
          - Optimizing Cloud cost ratio across billing service transaction
        </p>

        <h3 className="font-semibold text-base opacity-60 mt-4">Strategy</h3>
        <p className="mt-1 text-gray-500">
          - Utilize Spot VM Application instead of Regular VM
          <br />- Utilize HDD Storage instead of SSD Storage
        </p>

        <h3 className="font-semibold text-base opacity-60 mt-4">The Good</h3>
        <p className="mt-1 text-gray-500">
          - <span className="font-semibold">Spot VM</span> : Lower cost up to
          91% than regular VM, at least 60% off guarantee
          <br />- <span className="font-semibold">HDD Storage</span> : Lower
          cost 70% than SSD storage
        </p>

        <h3 className="font-semibold text-base opacity-60 mt-4">The Bad</h3>
        <p className="mt-1 text-gray-500">
          - <span className="font-semibold">Spot VM</span> : No uptime SLA,
          downtime any time
          <br />- <span className="font-semibold">HDD Storage</span> : Lower
          throughput and lower IOPS
        </p>

        <h3 className="font-semibold text-base opacity-60 mt-4">
          Mitigating Risk
        </h3>
        <p className="mt-1 text-gray-500">
          - <span className="font-semibold">No uptime SLA</span> : Deploying
          multiple VM replicas across zones to prevent downtime if a replica in
          one zone is shut down
          <br />-{' '}
          <span className="font-semibold">
            Lower throughput and lower IOPS
          </span>{' '}
          : HDD storage specifications are acceptable for low-traffic service
          applications
        </p>

        <h3 className="font-semibold text-base opacity-60 mt-4">
          Tools & Technologies
        </h3>
        <p className="mt-1 text-gray-500 font-semibold">
          Docker / Kubernetes / GKE / GCP
        </p>
      </div>
      <div className="flex w-full min-[1440px]:w-1/2 py-2 px-4 items-center justify-start flex-col">
        <img
          className="h-52 rounded-lg mb-2"
          src="/images/spec-vm.jpg"
          alt=""
        />
        <ImageModal imageUrl="/images/cost-ratio.jpg" />
        <img
          className="h-52 rounded-lg mt-4"
          src="/images/cost-ratio.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default CostOptimization;
