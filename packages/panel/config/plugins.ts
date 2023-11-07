export default ({ env }) => ({
	redirects: {
		enabled: true,
	},
	menus: {
		config: {
			maxDepth: 3,
		},
	},
	publisher: {
		enabled: true,
	},
	email: {
		provider: 'sendgrid',
		providerOptions: {
			apiKey: env('SENDGRID_API_KEY'),
		},
		settings: {
			defaultFrom: env('MAIL_FROM'),
			defaultReplyTo: env('MAIL_FROM'),
		},
	},
	graphql: {
		config: {
			endpoint: '/graphql',
			depthLimit: 7,
			shadowCRUD: true,
			amountLimit: 100,
			generateArtifacts: true,
			artifacts: {
				schema: true,
				typegen: false
			},
			apolloServer: {
				tracing: false,
			},
		},
	},
	upload: {
		config: {
			provider: 'aws-s3',
			providerOptions: {
				baseUrl: env('CDN_URL'),
				rootPath: env('CDN_ROOT_PATH'),
				s3Options: {
					accessKeyId: env('AWS_ACCESS_KEY_ID'),
					secretAccessKey: env('AWS_ACCESS_SECRET'),
					region: env('AWS_REGION'),
					params: {
						ACL: env('AWS_ACL', 'public-read'),
						signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 15 * 60),
						Bucket: env('AWS_BUCKET'),
					},
				},
			},
		},
	},
})