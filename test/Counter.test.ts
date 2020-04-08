import chai from 'chai';
import { waffle } from '@nomiclabs/buidler';
import { deployContract, solidity } from 'ethereum-waffle';

import CounterArtifact from '../build/artifacts/Counter.json';
import { Counter } from '../build/typings/Counter';

chai.use(solidity);
const { expect } = chai;

describe('Counter', () => {
  const provider = waffle.provider;
  let [wallet] = provider.getWallets();
  let counter: Counter;

  beforeEach(async () => {
    counter = await deployContract(wallet, CounterArtifact) as Counter;
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
