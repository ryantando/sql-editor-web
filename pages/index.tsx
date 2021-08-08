import Head from 'next/head'
import LeftSidebar from '../src/components/LeftSidebar';
import MainQuery from '../src/components/MainQuery';

export default function Home() {
  return (
    <div>
      <Head>
        <title>SQL Editor Web</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="SQL web editor" />
      </Head>

      <main>
        <div className="md:flex flex-col md:flex-row md:min-h-screen w-full">
          <LeftSidebar />
          <MainQuery />
        </div>
      </main>
    </div>
  )
}
