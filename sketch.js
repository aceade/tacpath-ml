
let training = true;

const options = {
    dataUrl: 'data/stats.csv',
    inputs: ['deaths', 'enemies', 'exposure'],
    outputs: ['blue', 'orange'],
    task: 'classification',
    debug: false
}

// when loaded, normalise the data (on a scale of 0 to 1) and then train it
const modelLoaded = async() => {
    console.info("Loaded!")
    nn.normalizeData();
    nn.train({ epochs: 50, batchSize: 10 }, finishedTraining);
}

const finishedTraining = () => {
    console.log("Done");
    training = false;
}

const nn = ml5.neuralNetwork(options, modelLoaded);

export const isTraining = () => {
    return training;
}

export const predict = async(deathWeighting, enemyWeighting, exposureWeighting) => {
    
    // has to match the inputs we specify
    const inputs = [deathWeighting, enemyWeighting, exposureWeighting];
    console.info("Inputs:", inputs);
    return await nn.predict(inputs).then((results) => {
       return results;
    }).catch((err) => {
        console.error(err);
    })
}
