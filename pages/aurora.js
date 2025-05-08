import dynamic from 'next/dynamic';
import WalletProvider from '../assets/WalletProvider';
import TopMenu from '../assets/TopMenu';
import AuroraAsset from '../assets/AuroraAsset';
import Sidebar from '../assets/Sidebar';
import Head from 'next/head';

const AuroraAssetWithNoSSR = dynamic(() => import('../assets/AuroraAsset'), {
  ssr: false,
});

export default function Aurora() {
  return (
    <div className="min-h-screen bg-white-100">
      <WalletProvider>
        {({ provider, account, connectWallet, disconnectWallet }) => (
          <>
            <TopMenu account={account} connectWallet={connectWallet} disconnectWallet={disconnectWallet} />
            
            <Head>
              <title>Aurora Token Creation Tool</title>
              <meta name="description" content="Create and launch your own meme token on Aurora" />
              <meta property="og:title" content="Launch Your Meme Coin on Aurora" />
              <meta property="og:description" content="Build and deploy a meme coin instantly on Aurora. Fast, secure, and 100% code-free." />
              <meta property="og:type" content="website" />
              <meta property="og:url" content="/aurora" />
            </Head>

            <div className="container mx-auto p-4 max-w-7xl flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <AuroraAssetWithNoSSR provider={provider} account={account} connectWallet={connectWallet} />
              </div>
              <div className="md:w-[300px] flex-shrink-0">
                <Sidebar />
              </div>
            </div>
          </>
        )}
      </WalletProvider>
    </div>
  );
}
