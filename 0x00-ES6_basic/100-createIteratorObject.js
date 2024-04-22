export default function createIteratorObject(report) {
  function* employeeGenerator() {
    for (const department in report.allEmployees) {
      if (report.allEmployees.hasOwnProperty(department)) {
        for (const employee of report.allEmployees[department]) {
          yield employee;
        }
      }
    }
  }

  return employeeGenerator();
}
