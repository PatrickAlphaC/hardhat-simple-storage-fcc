import { task } from "hardhat/config"

export default task(
  "block-number",
  "Prints the current block number"
).setAction(async (_taskArgs, hre) => {
  await hre.ethers.provider.getBlockNumber().then((blockNumber: number) => {
    console.log(`Current block number: ${blockNumber}`)
  })
})
