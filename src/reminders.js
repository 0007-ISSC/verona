// Simple in-process scheduler. For production use node-cron or a queue.
const jobs = new Map();
function schedule(name, ms, fn) {
  cancel(name);
  jobs.set(name, setInterval(fn, ms));
}
function cancel(name) {
  if (jobs.has(name)) { clearInterval(jobs.get(name)); jobs.delete(name); }
}
module.exports = { schedule, cancel };
