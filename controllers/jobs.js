const getAllJobs = (req, res) => {
  res.send("get all jobs");
};

const getJob = (req, res) => {
  res.send("get a job");
};

const createjob = (req, res) => {
  res.send("create a job");
};

const updateJob = (req, res) => {
  res.send("updateJob  job");
};

const deleteJob = (req, res) => {
  res.send("deleteJob job");
};

module.exports = {
  getAllJobs,
  getJob,
  createjob,
  updateJob,
  deleteJob,
};
