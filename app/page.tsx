import dynamic from 'next/dynamic';

const App = dynamic(() => import('./App'), { ssr: false })
'force-dynamic'


export default App;