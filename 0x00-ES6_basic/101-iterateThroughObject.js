export default function iterateThroughObject(reportWithIterator) {
  let employeesString = '';
  for (const employee of reportWithIterator) {
    employeesString += `${employee}|`;
  }
  return employeesString.slice(0, -1);
}
