import { Box } from '@monorepo/ui/core';
import { Icon2fa, IconAbacus, Icon360View } from '@monorepo/icons';

export default function App() {
	return (
		<div>
			<Box as="a" href="https://example.com">
				example.com
			</Box>
			<Icon2fa />
			<IconAbacus />
			<Icon360View />
		</div>
	);
}
