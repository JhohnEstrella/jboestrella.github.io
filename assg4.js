document.addEventListener("DOMContentLoaded", () => {
    const employees = [];
    
    let tempVariable; 

    const convertToDecimal = (value, decimals) => 
        isNaN(value) ? '' : value.toFixed(decimals);

    const showList = () => {
        const tableBody = employees.map((employee, index) => {
            const grossPay = employee.grossPay();
            const netPay = grossPay - employee.deductAmount;
            return `
                <tr>
                    <td>${index + 1}</td>
                    <td>${employee.name}</td>
                    <td style="text-align:right">${convertToDecimal(employee.daysWorked, 0)}</td>
                    <td style="text-align:right">${convertToDecimal(employee.dailyRate, 2)}</td>
                    <td style="text-align:right">${convertToDecimal(grossPay, 2)}</td>
                    <td style="text-align:right">${convertToDecimal(employee.deductAmount, 2)}</td>
                    <td style="text-align:right">${convertToDecimal(netPay, 2)}</td>
                </tr>
            `;
        }).join('');
        document.getElementById("tablebody").innerHTML = tableBody;
    };

    document.getElementById("btnaddEmployee").addEventListener("click", () => {
        const name = document.getElementById("employeeName").value.trim();
        const daysWorked = parseFloat(document.getElementById("daysWorked").value);
        const dailyRate = parseFloat(document.getElementById("dailyRate").value);
        const deductAmount = parseFloat(document.getElementById("deduct").value);

        if (!name || isNaN(daysWorked) || isNaN(dailyRate) || isNaN(deductAmount)) {
            alert("Please fill all fields correctly.");
            return;
        }

        const newEmployee = {
            name,
            daysWorked,
            dailyRate,
            deductAmount,
            grossPay: () => daysWorked * dailyRate,
            netPay: () => daysWorked * dailyRate - deductAmount,
        };
        employees.push(newEmployee);
        showList();
    });

    document.getElementById("btndelete").addEventListener("click", () => {
        const index = parseInt(prompt("Enter the employee number to delete:"), 10) - 1;
        if (index >= 0 && index < employees.length) {
            employees.splice(index, 1);
            showList();
        } else {
            alert("Invalid employee number.");
        }
    });

    document.getElementById("btnclearList").addEventListener("click", () => {
        if (confirm("Are you sure you want to clear all employees?")) {
            employees.length = 0;
            showList();
        }
    });
});