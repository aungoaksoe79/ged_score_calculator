let studentName;
let mathsScore;
let englishScore;
let scienceScore;
let social_studiesScore;
let totalScore;
let averageScore;
let percentageScore

document.getElementById("submit").onclick = function(){
    studentName = document.getElementById("name").value;
    mathsScore = Number(document.getElementById("maths").value);
    englishScore = Number(document.getElementById("english").value);
    scienceScore = Number(document.getElementById("science").value);
    social_studiesScore = Number(document.getElementById("social_studies").value);

    totalScore = mathsScore + scienceScore + englishScore + social_studiesScore;
    averageScore = totalScore/4;
    percentageScore = (totalScore / 800) * 100;

    document.getElementById("name1").textContent = studentName;
    document.getElementById("total1").textContent = `${totalScore}`;
    document.getElementById("average1").textContent = `${averageScore.toFixed(2)}`;
    document.getElementById("percentage1").textContent = `${percentageScore.toFixed(2)}%`; 
}
