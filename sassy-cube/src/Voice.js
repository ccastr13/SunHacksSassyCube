import Speech from 'speak-tts'

const speech = new Speech() // will throw an exception if not browser supported

speech.speak({
    text: 'Hello, how are you today ?',
}).then(() => {
    console.log("Success !")
}).catch(e => {
    console.error("An error occurred :", e)
})