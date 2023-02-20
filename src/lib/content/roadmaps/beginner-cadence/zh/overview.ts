import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { ExpertiseEnum } from '$lib/types/content/metadata/expertise.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { RoadmapOverview } from '$lib/types/content/roadmap.interface';
import { generateSlug } from '$lib/utilities/dataTransformation/generateSlug';

export const overview: RoadmapOverview = {
	title: 'AAAAAAA Cadence Roadmap',
	contentType: ContentTypeEnum.Roadmap,
	slug: generateSlug(import.meta.url),
	excerpt: 'Lorem ipsum dolor sit amet.',
	metadata: {
		expertise: ExpertiseEnum.beginner,
		duration: '3 chapters',
		prerequisites: ['javascript'],
		subjects: [SubjectsEnum.Backend, SubjectsEnum.Frontend]
	},
	contents: [
		{
			title: 'Beginner Cadence Course',
			excerpt: 'Lorem ipsum',
			contentType: ContentTypeEnum.Course,
			duration: '4 chapters',
			subjects: [SubjectsEnum.Cadence],
			url: 'catalog/courses/beginner-cadence'
		},
		{
			title: 'Flow documentation',
			excerpt: 'Lorem ipsum',
			contentType: ContentTypeEnum.External,
			duration: '4 chapters',
			subjects: [SubjectsEnum.Cadence],
			url: 'https://developers.flow.com/tools/unity-sdk/guides/dev-wallet'
		},
		{
			title: 'Basic Dapp',
			excerpt: 'Lorem ipsum',
			contentType: ContentTypeEnum.Course,
			duration: '4 chapters',
			subjects: [SubjectsEnum.Cadence],
			url: 'catalog/courses/basic-dapp'
		}
	],
	chapters: [
		{
			excerpt: 'This is the first chapter'
		},
		{
			excerpt: 'This is the second chapter'
		},
		{
			excerpt: 'This is the third chapter'
		}
	]
};
