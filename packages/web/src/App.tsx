import { Text } from '@monorepo/ui/core';
import { IconLogout } from '@monorepo/icons';

export default function App() {
	return (
		<div>
			<Text
				as="a"
				size="xl"
				decoration="none"
				color="red-400"
				href="https://example.com"
				target="_blank"
			>
				example.com <IconLogout />
			</Text>
		</div>
	);
}
