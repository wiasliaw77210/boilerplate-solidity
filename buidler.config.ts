import { BuidlerConfig, usePlugin } from '@nomiclabs/buidler/config';

usePlugin('@nomiclabs/buidler-ethers');
usePlugin('@nomiclabs/buidler-waffle');
usePlugin('buidler-typechain');
usePlugin('@nomiclabs/buidler-solhint');

const config: BuidlerConfig = {
  defaultNetwork: 'buidlerevm',
  solc: {
    version: '0.5.12',
  },
  paths: {
    sources: './src',
    cache: './cache',
    artifacts: './build/artifacts',
  },
  typechain: {
    outDir: './build/typings',
    target: 'ethers'
  }
};

export default config;
