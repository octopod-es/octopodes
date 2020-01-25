const db = require('./model');

const jobController = {};

jobController.getData = (req, res, next) => {
  const getDataQuery = 'SELECT * FROM jobs;';
  db.query(getDataQuery)
    .then((queryRes) => {
      res.locals.data = queryRes.rows;
      return next();
    })
    .catch((err) => console.log('DB query for "jobs" failed in jobController.getData.', err));
};

jobController.addJob = (req, res, next) => {
  const incomingJob = req.body;
  const jobInsertionQuery = `INSERT INTO jobs (company, role, link, applicationstatus, editable) VALUES ('${incomingJob.company}',
  '${incomingJob.role}', '${incomingJob.link}', '${incomingJob.applicationstatus}', '${incomingJob.editable}')
    RETURNING *;`;
  db.query(jobInsertionQuery)
    .then((queryRes) => {
      res.locals.jobInsertionInfo = queryRes.rows[0];
      next();
    })
    .catch((err) => res.status(500).json({ error: err.message }));
};

module.exports = jobController;
