const generateMessage = (from, msg) => { return { from, msg, createAd: new Date().getTime() } }

module.exports = { generateMessage }