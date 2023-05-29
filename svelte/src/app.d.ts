// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface NetCase {
		clientName: string;
		Rep: string;
		Value: boolean;
		Budget: boolean;
		Timeline: boolean;
		DM: boolean;
		ARR: number;
		Notes: string;
		QC: number;
		Category: 'Feeling Lucky' | 'Medium' | 'Hot';
		isProspected: boolean;
	}

	interface NetStoreType {
		allNetCases: NetCase[] | null;
		allHotCases: NetCase[] | null;
		allMediumCases: NetCase[] | null;
		allFeelingLuckies: NetCase[] | null;
		reps: Rep[] | null;
	}

	interface Rep {
		name: string;
		office: string;
		cases: NetCase[];
		_id: string;
	}
}
