
function calculateNetSalary(basicSalary, benefits) {
    // Calculate Gross Salary
    let grossSalary = basicSalary + benefits;
  
    
    // Calculate PAYE (Tax)
    let paye;
    if (grossSalary <= 28895) {
      paye = grossSalary * 0.1;
    } else if (grossSalary <= 38895) {
      paye = 2889.5 + (grossSalary - 28895) * 0.15;
    } else if (grossSalary <= 56395) {
      paye = 5889.5 + (grossSalary - 38895) * 0.2;
    } else if (grossSalary <= 71695) {
      paye = 10589.5 + (grossSalary - 56395) * 0.25;
    } else {
      paye = 14989.5 + (grossSalary - 71695) * 0.3;
    }
  
  }
  
  