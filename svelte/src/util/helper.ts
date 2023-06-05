export const Counter = (formData: App.NetType, condition: boolean) => {
	if (formData.qcPoints < 4 && condition) {
		formData.qcPoints += 1;
	}
	if (formData.qcPoints > 0 && !condition) {
		formData.qcPoints -= 1;
	}
	if (formData.qcPoints > 4) {
		formData.qcPoints = 4;
	}
	if (formData.qcPoints < 0) {
		formData.qcPoints = 0;
	}
};

export const calcQualifyingStage = (input: number) => {
	switch (input) {
		case 0:
		case 1:
			return 'Feeling Lucky';
		case 2:
		case 3:
			return 'Medium';
		case 4:
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
			return 'Hot';
		default:
			return 'Feeling Lucky';
	}
};

export const setLocalStorage = (data: App.NetType | App.RepType, name: string) => {
	if (typeof localStorage !== 'undefined') {
		localStorage.setItem(name, JSON.stringify(data));
	}
};

export const getLocalStorage = (name: string) => {
	if (typeof localStorage !== 'undefined') {
		const value = localStorage.getItem(name);
		if (value !== null) {
			return JSON.parse(value);
		}
	}
	return null;
};

export const caseStatus = {
	Medium: 'Medium',
	Hot: 'Hot',
	Lucky: 'Feeling Lucky'
};
