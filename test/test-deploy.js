const { ethers } = require("hardhat")
const { assert } = require("chai")

// describe("SimpleStorage", () => {})
describe("SimpleStorage", function () {
  // let simpleStorageFactory
  // let simpleStorage
  let simpleStorageFactory, simpleStorage
  beforeEach(async function () {
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
    simpleStorage = await simpleStorageFactory.deploy()
  })

  it("Should start with a favourite number of 0", async function () {
    const currentValue = await simpleStorage.retrieve()
    const expectedValue = "0"
    // assert
    // expect
    assert.equal(currentValue.toString(), expectedValue)
    // expect(currentValue.toString()).to.equal(expectedValue)
  })
  it("Should update when we call store", async function () {
    const expectedValue = "7"
    const transactionResponse = await simpleStorage.store(expectedValue)
    await transactionResponse.wait(1)

    const currentValue = await simpleStorage.retrieve()
    assert.equal(currentValue.toString(), expectedValue)
  })

  // Extra - this is not in the video
  it("Should work correctly with the people struct and array", async function () {
    const expectedPersonName = "Patrick"
    const expectedFavouriteNumber = "16"
    const transactionResponse = await simpleStorage.addPerson(
      expectedPersonName,
      expectedFavouriteNumber
    )
    await transactionResponse.wait(1)
    const { favouriteNumber, name } = await simpleStorage.people(0)
    // We could also do it like this
    // const person = await simpleStorage.people(0)
    // const favNumber = person.favouriteNumber
    // const pName = person.name

    assert.equal(name, expectedPersonName)
    assert.equal(favouriteNumber, expectedFavouriteNumber)
  })
})
