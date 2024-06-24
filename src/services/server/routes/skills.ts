import { Server, Response } from 'miragejs';

export const regiterSkillsRoute = (context: Server) => {
	return [
		context.get('/skills', (schema, request) => {
			return new Response(
				200,
				{},
				{ result: schema.all('skill').models }
			);
		}),
		context.post('/skills', (schema, request) => {
			console.log('skills create');

			const attrs = JSON.parse(request.requestBody);
			const newSKill = schema.create('skill', attrs);

			return new Response(
				201,
				{},
				{ result: { ...newSKill.attrs, id: newSKill.id } }
			);
		}),
	];
};
