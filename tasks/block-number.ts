import { task } from "hardhat/config"
import { ethers } from "hardhat"

export default task(
  "block-number",
  "Prints the current block number"
).setAction(async (taskArgs, hre) => {
  await ethers.provider.getBlockNumber().then((blockNumber) => {
    console.log(`Current block number: ${blockNumber}`)
  })
})
