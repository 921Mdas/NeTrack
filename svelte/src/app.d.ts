// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface NetType {
		Arr: number;
		Budget: boolean;
		Category: 'Feeling Lucky' | 'Medium' | 'Hot';
		DM: boolean;
		Notes: string;
		Prospected: boolean;
		Timeline: boolean;
		Value: boolean;
		clientName: string;
		Rep: string;
		qcPoints: number;
		repName?: RepType;
		_id?: string;
	}

	interface RepType {
		name: string;
		office: string;
		cases: NetType[];
		_id: string;
	}

	interface DataSetsType {
		label: string;
		data: number[];
		backgroundColor: string[];
		borderWidth: number;
		borderColor: string[];
	}

	interface GraphDataType {
		labels: string[];
		datasets: DataSetsType[];
	}
}
