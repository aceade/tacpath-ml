import { isTraining, predict } from "./sketch.js";

const deathWeightingInput = document.getElementById("deathInput");
const enemyWeightingInput = document.getElementById("enemyInput");
const exposureWeightingInput = document.getElementById("exposureInput");

const blueScoreDisplay = document.getElementById("blueScoreDisplay");
const orangeScoreDisplay = document.getElementById("orangeScoreDisplay");

const resultPara = document.getElementById("result");
document.getElementById("submit").onclick = () => submit();

const showMessage = (message, clearInput) => {
    resultPara.textContent = message;
    if (clearInput) {
        setTimeout(() => {
            resultPara.textContent = "";
        }, 1000);
    }
}

const setScores = (blue, orange) => {
    blueScoreDisplay.textContent = `Blue: ${blue}`;
    orangeScoreDisplay.textContent = `Orange: ${orange}`;
}

const submit = async() => {
    if (!isTraining()) {
        let deathWeighting = parseInt(deathWeightingInput.value);
        let enemyWeighting = parseInt(enemyWeightingInput.value);
        let exposureWeighting = parseInt(exposureWeightingInput.value);
        await predict(deathWeighting, enemyWeighting, exposureWeighting).then((results) => {
            console.info("Results:", results);
            let blue = Math.round(results[0].value);
            let orange = Math.round(results[1].value);
            showMessage(`Predicted scores:`);
            setScores(blue, orange);
        })
    } else {
        console.warn("Wait for it!");
        showMessage("Wait until we're loaded!", true);
    }
}
