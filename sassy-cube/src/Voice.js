import Speech from 'speak-tts'

var triggerSpeak = (message) => {
    const speech = new Speech() // will throw an exception if not browser supported
    speech.speak({
        text: message, 
    }).then(() => {
        console.log("Success !")
    }).catch(e => {
        console.error("An error occurred :", e)
    })
}

//triggerSpeak('Oh... You couldn\'t solve me? ... How useless.')



/* Saved, just in case:

var sample = 'Oh... You couldn\'t solve me? ... How useless.'
speech.speak({
        text: sample, 
    }).then(() => {
        console.log("Success !")
    }).catch(e => {
        console.error("An error occurred :", e)
    })
*/