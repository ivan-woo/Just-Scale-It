import http from 'k6/http';
import { sleep } from 'k6';
import { Rate } from 'k6/metrics'

let errorRate = new Rate('error_rate')

// anything out here only runs once per virtual user
export let options = {
  stages: [
    { duration: '30s', target: 1000 },
    { duration: '1m', target: 1300},
    { duration: '2m', target: 1700 },
    { duration: '1m', target: 1300 },
    { duration: '30s', target: 1000 },
  ],
};

export default function () {
  let res = http.get('http://localhost:3002/api/shoes'); // anything inside here repeats for as long as the test is running
  errorRate.add(res.status >= 400)
  sleep(1);
}

