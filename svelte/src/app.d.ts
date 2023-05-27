// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface NetCase {
		ClientName: string;
		Rep: string;
		Value: boolean;
		Budget: boolean;
		Timeline: boolean;
		DM: boolean;
		ARR: number;
		Notes: string;
		QC: number;
		Category: 'Feeling Lucky' | 'Medium' | 'Hot';
		Stage: (num: number) => 'Feeling Lucky' | 'Medium' | 'Hot';
	}

	interface NetStoreType {
		allNetCases: NetCase[] | null;
		allHotCases: NetCase[] | null;
		allMediumCases: NetCase[] | null;
		allFeelingLuckies: NetCase[] | null;
	}
}
