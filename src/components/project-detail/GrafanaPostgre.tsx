import ImageModal from './ImageModal';

const GrafanaPostgre = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full min-[1440px]:w-1/2 py-2 px-4">
        <h3 className="font-semibold text-base opacity-60">Objective</h3>
        <p className="mt-1 text-gray-500">
          - Create Database PostgreSQL Monitoring with Grafana
        </p>

        <h3 className="font-semibold text-base opacity-60 mt-4">Strategy</h3>
        <p className="mt-1 text-gray-500">
          - Use Telegraf as data collection agent that collects, processes, and
          sends metrics from PostgreSQL to InfluxDB
          <br />- Use InfluxDB to stores and manages time-series data
          <br />- Use Grafana panel to create UI Monitoring and get the data
          from InfluxDB
        </p>

        <h3 className="font-semibold text-base opacity-60 mt-4">
          Tools & Technologies
        </h3>
        <p className="mt-1 text-gray-500 font-semibold">
          Telegraf / InfluxDB / Grafana / PostgreSQL / Docker
        </p>
      </div>
      <div className="flex w-full min-[1440px]:w-1/2 py-2 px-4 items-center justify-start flex-col">
        <img
          className="h-52 rounded-lg mb-2"
          src="/images/dash-postgre.jpg"
          alt=""
        />
        <ImageModal imageUrl="/images/dash-postgre.jpg" />
      </div>
    </div>
  );
};

export default GrafanaPostgre;
