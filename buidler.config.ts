import { BuidlerConfig, usePlugin } from '@nomiclabs/buidler/config';

usePlugin('@nomiclabs/buidler-ethers');
usePlugin('@nomiclabs/buidler-waffle');
usePlugin('@nomiclabs/buidler-solhint');

const config: BuidlerConfig = {
  defaultNetwork: 'buidlerevm',
  solc: {
    version: '0.5.12',
  },
  paths: {
    sources: './src',
    cache: './build/cache',
    artifacts: './build/artifacts',
  }
};

export default config;
