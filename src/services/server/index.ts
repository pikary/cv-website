/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createServer, Server, Model } from 'miragejs';
import { regiterSkillsRoute } from './routes/skills';
import { regiterEducationRoute } from './routes/education';
import { Education } from './models/timeline';
import { Skill } from './models/skills';
import { number } from 'yup';

export function setupMirage(): Server {
	const server = createServer({
		models: {
			//@ts-ignore
			skill: Model.extend<Skill>({}),
			education: Model.extend<Education>({
				title: '',
				date: 2000,
				text: '',
			}),
		},
		seeds(server) {
			//@ts-ignore
			server.create('skill', { name: 'JavaScript', range: 80 });
			//@ts-ignore
			server.create('skill', { name: 'TypeScript', range: 70 });
		},
		routes() {
			this.namespace = '/api';

			regiterEducationRoute(this);
			regiterSkillsRoute(this);

			// You can define more routes here
		},
	});
	return server;
}
