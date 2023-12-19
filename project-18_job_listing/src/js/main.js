import '../scss/global.scss';
// import '../components/**/*.js';
import '../components/layout/layout';
import '../components/header/header';
import '../components/job-list/job-list';
import '../components/footer/footer';

import JobList from '../components/job-list/job-list';

document.addEventListener('DOMContentLoaded', () => {
  const jobListEl = document.querySelector('.js-job-list');

  new JobList(jobListEl).init();
});
