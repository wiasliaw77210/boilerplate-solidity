import chai from 'chai';
import { Wallet } from 'ethers';
import { ethers } from '@nomiclabs/buidler';
import { deployContract, solidity } from 'ethereum-waffle';

import CounterArtifact from '../build/artifacts/Counter.json';
import { Counter } from '../build/typings/Counter';

chai.use(solidity);
const { expect } = chai;

describe('Counter', () => {
  let counter: Counter;

  const deployFunc = async () => {
    const [signers] = await ethers.signers();
    const wallet = (signers as Wallet);
    counter = await deployContract(wallet, CounterArtifact) as Counter;
  };

  beforeEach(async () => {
    await deployFunc();
  });

  it('Should Count Up', async () => {
    await expect(counter.countUp())
      .to.emit(counter, 'CountedTo')
      .withArgs(1);
  });

  it('Should Count Down', async () => {
    await expect(counter.countDown())
      .to.revertedWith('Uint256 underflow');
  });
});
