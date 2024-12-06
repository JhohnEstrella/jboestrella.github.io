document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});

function factSumAvg() {
    let result; 

    let num = 0, x = 1, count = 1;

    num = document.getElementById("nnumber").value * 1;
    console.log(num);

    while (count <= num) {
        x *= count;
        count++;
    }

    document.getElementById("factorResult").value = x;

    let totNum = 0, count2 = 1.0;

    do {
        totNum += count2;
        count2++;
    } while (count2 <= num);

    document.getElementById("summationResult").value = totNum;

    let avgNum = 0;

    for (let i = 0; i <= num; i++) {
        avgNum += i;
    }

    avgNum /= num;
    document.getElementById("avgResult").value = avgNum.toFixed(3);
}

(() => {
    document.getElementById("fsaBtn").addEventListener("click", () => {
        factSumAvg();
    });
    
    document.getElementById("nnumber").addEventListener("keyup", () => {
        factSumAvg();
    });
})();