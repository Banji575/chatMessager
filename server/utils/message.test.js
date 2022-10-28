const {expect} = require('expect')
const { describe } = require('mocha')
const { generateMessage } = require('./message')

describe("generateMessage", () => {
    it('should generate correct message object', () => {
        const from = "WDJ"
        const msg = "some random text"
        const message = generateMessage(from, msg)
        // console.log(message)
       // console.log(expect())
         expect(typeof message.createAd).toBe('number')
         expect(message).toMatchObject({from, msg})
    })
})