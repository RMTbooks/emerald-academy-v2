import type { Overview } from './content-overview.interface';

export interface CourseData {
	overview: CourseOverview;
	contents: CourseContents;
}

export interface CourseOverview extends Overview { }

export interface CourseContents {
	[chapter: string]: Array<{
		slug: string;
		metadata: {
			title: string;
			day: number;
			language: string;
			excerpt: string;
			headings: Array<{
				level: number;
				title: string;
			}>;
		};
	}>;
}
