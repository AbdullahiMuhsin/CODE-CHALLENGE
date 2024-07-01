
function calculateNetSalary(basicSalary, benefits) {

  const taxRate = 0.3
  const nhifRate = 1500
  const nssfRate = 0.06


  const grossSalary = basicSalary + benefits;


  const tax = grossSalary * taxRate;
  const nhif =   nhifRate;
  const nssf = grossSalary * nssfRate;





const netSalary = grossSalary - (tax + nhif + nssf);

  return {
    grossSalary,
    tax,
    nhif,
    nssf,
    netSalary
  };
}



const basicSalary = 80000; 
const benefits = 0.16 * basicSalary; 
const result = calculateNetSalary(basicSalary, benefits);

console.log("Net Salary Calculation Results:");
console.log("Gross Salary:", result.grossSalary);
console.log("tax:", result.tax);
console.log("nhif Deductions:", result.nhif);
console.log("nssf Deductions:", result.nssf);
console.log("Net Salary:", result.netSalary);



