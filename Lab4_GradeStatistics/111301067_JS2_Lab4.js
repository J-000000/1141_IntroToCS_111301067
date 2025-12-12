
var mathInput = document.getElementById("mathInput");
var englishInput = document.getElementById("englishInput");
var submitBtn = document.getElementById("submitBtn");
var tableBody = document.getElementById("gradeTableBody");


var count = 0;


submitBtn.addEventListener("click", function () {

    var mathScore = parseFloat(mathInput.value);
    var englishScore = parseFloat(englishInput.value);

    if (isNaN(mathScore) || isNaN(englishScore)) {
        alert("請輸入有效的數字 (Math 和 English)！");
        return;
    }

    if (mathScore < 0 || mathScore > 100 || englishScore < 0 || englishScore > 100) {
        alert("分數必須介於 0 到 100 之間！");
        return;
    }


    count++;


    var rowAverage = (mathScore + englishScore) / 2;


    var newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${count}</td>
        <td>${mathScore}</td>
        <td>${englishScore}</td>
        <td>${rowAverage.toFixed(2)}</td>
    `;


    tableBody.appendChild(newRow);

 
    mathInput.value = "";
    englishInput.value = "";


    updateColumnAverages();
});

function updateColumnAverages() {
    var rows = tableBody.getElementsByTagName("tr");
    var totalMath = 0;
    var totalEnglish = 0;
    var numRows = rows.length;


    if (numRows === 0) return;


    for (var i = 0; i < numRows; i++) {

        totalMath += parseFloat(rows[i].cells[1].innerText);
        totalEnglish += parseFloat(rows[i].cells[2].innerText);
    }


    var avgMath = totalMath / numRows;
    var avgEnglish = totalEnglish / numRows;

    var avgOverall = (avgMath + avgEnglish) / 2;

    document.getElementById("mathAvgTotal").innerText = avgMath.toFixed(2);
    document.getElementById("engAvgTotal").innerText = avgEnglish.toFixed(2);
    document.getElementById("overallAvg").innerText = avgOverall.toFixed(2);
}