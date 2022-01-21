const { expect } = require("chai")
const { ethers } = require("hardhat")

describe("SimpleStorage", function () {
  let simpleStorage
  let SimpleStorageFactory
  beforeEach(async () => {
    SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
    simpleStorage = await SimpleStorageFactory.deploy()
  })
  it("Should start with a favorite number of 0", async function () {
    let currentValue = await simpleStorage.retrieve()
    expect(currentValue).to.equal(0)
  })
  it("Should update when we call store", async function () {
    let expectedValue = 7
    let transactionResponse = await simpleStorage.store(expectedValue)
    let transactionReceipt = await transactionResponse.wait()
    let currentValue = await simpleStorage.retrieve()
    expect(currentValue).to.equal(expectedValue)
  })
})
