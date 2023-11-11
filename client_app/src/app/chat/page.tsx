import type {Metadata} from 'next';
import Chat from './chat';
import ConnectionInit from './ConnectionInit';

export const metadata: Metadata = {
	title: 'Chat',
	description: 'Let\'s chat'
};

export default function Index(): JSX.Element {
	// const [isConnected, setIsConnected] = useState(socket.connected);

	return (
		<div className='justify-center'>
			<ConnectionInit />
			<Chat />
		</div>
	);
}
//       <ConnectionState isConnected={isConnected} />
