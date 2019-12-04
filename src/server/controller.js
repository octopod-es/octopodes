const db = require('./model');

const jobController = {};

jobController.getData = (req, res, next) => {
  const getDataQuery = 'SELECT * FROM jobs;'
  db.query(getDataQuery)
    .then((queryRes) => {
    //   console.log(queryRes);
      res.locals.data = queryRes.rows;
    //   console.log(res.locals.data);
      return next();
    });
};


jobController.addJob = (req, res, next) => {
  const incomingJob = req.body;
  // console.log(incomingJob);
  const jobInsertionQuery = `INSERT INTO jobs (company, role, link) VALUES ('${incomingJob.company}', '${incomingJob.role}', '${incomingJob.link}')
    RETURNING *;`;
  // console.log(jobInsertionQuery);
  db.query(jobInsertionQuery)
    .then(queryRes => {
      res.locals.jobInsertionInfo = queryRes.rows[0];
      next();
    })
    .catch((err) => res.status(500).json({ error: err.message }));
};

jobController.deleteJob = (req, res, next) => {
  const incomingJobLink = req.body;
  // console.log(incomingJobLink);
  const jobDeletionQuery = `DELETE FROM jobs WHERE link='${incomingJobLink.link}';`;
  // console.log(jobDeletionQuery);
  db.query(jobDeletionQuery)
    .then(queryRes => {
      // console.log(queryRes);
      res.locals.jobDeletionInfo = 'Job has been deleted';
      next();
    })
    .catch((err) => res.status(500).json({ error: err.message }));
};

module.exports = jobController;
