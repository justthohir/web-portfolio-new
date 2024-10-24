const GitlabRunner = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full lg:w-1/2 py-2 px-4">
        <h3 className="font-semibold text-base opacity-60">About Project</h3>

        <p className="mt-1 text-gray-500">
          URL Demo : #
          <br />
          Repo :{' '}
          <a
            href="https://github.com/justthohir/ansible-gitlab-runner"
            target="_blank"
            className="underline hover:no-underline"
          >
            https://github.com/justthohir/ansible-gitlab-runner
          </a>
        </p>

        <h3 className="font-semibold text-base opacity-60 mt-4">Objective</h3>
        <p className="mt-1 text-gray-500">
          Develop an automated solution for configuring GitLab Runner on Ubuntu
          cloud VMs using Ansible.
        </p>

        <h3 className="font-semibold text-base opacity-60 mt-4">
          Tools & Technologies
        </h3>
        <p className="mt-1 text-gray-500 font-semibold">
          Ansible / Ubuntu / GitLab Runner / Cloud VM
        </p>
      </div>
    </div>
  );
};

export default GitlabRunner;
