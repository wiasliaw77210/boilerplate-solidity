import { BuidlerConfig, usePlugin } from '@nomiclabs/buidler/config';

usePlugin('@nomiclabs/buidler-ethers');
usePlugin('@nomiclabs/buidler-waffle');
usePlugin('buidler-typechain');
usePlugin('@nomiclabs/buidler-solhint');
usePlugin('solidity-coverage');

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
  },
  networks: {
    coverage: {
      url: "http://127.0.0.1:8555"
    }
  },
};

export default config;
