export default function createReportObject(employeesList) {
  const allEmployees = {};

  for (const employee of employeesList.employeeList) {
    const department = employeesList.department;
    if (!allEmployees[department]) {
      allEmployees[department] = [];
    }
    allEmployees[department].push(employee);
  }

  const getNumberOfDepartments = () => Object.keys(allEmployees).length;

  return {
    allEmployees,
    getNumberOfDepartments,
  };
}
