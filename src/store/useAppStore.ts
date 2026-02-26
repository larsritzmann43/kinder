import { create } from 'zustand';

export type ChildDetails = {
    familyName: string;
    firstName: string;
    birthDate: string; // or age string directly
    age: number;
    consultationDate: string;
};

export type Savings = {
    mediumTerm: {
        apartment: string;
        driverLicense: string;
        education: string;
    };
    longTerm: {
        monthlyInvestment: string;
    };
};

export type HealthInsuranceSelection = {
    ambulant: boolean;
    stationar: boolean;
    zahn: boolean;
    pflege: boolean;
};

export type DisabilityInsuranceSelection = {
    package1000: boolean;
    package1500: boolean;
};

export type AccidentInsuranceSelection = {
    package1: boolean;
    package2: boolean;
    package3: boolean;
};

interface AppState {
    childDetails: ChildDetails;
    setChildDetails: (details: Partial<ChildDetails>) => void;
    
    savings: Savings;
    setSavings: (savings: Partial<Savings>) => void;
    
    accidentSelection: AccidentInsuranceSelection;
    setAccidentSelection: (selection: Partial<AccidentInsuranceSelection>) => void;

    healthSelection: HealthInsuranceSelection;
    setHealthSelection: (selection: Partial<HealthInsuranceSelection>) => void;

    disabilitySelection: DisabilityInsuranceSelection;
    setDisabilitySelection: (selection: Partial<DisabilityInsuranceSelection>) => void;

    calculateAge: (birthDate: string) => number;
}

export const useAppStore = create<AppState>((set, get) => ({
    childDetails: {
        familyName: '',
        firstName: '',
        birthDate: '',
        age: 0,
        consultationDate: new Date().toLocaleDateString('de-DE'),
    },
    setChildDetails: (details) => 
        set((state) => ({ childDetails: { ...state.childDetails, ...details } })),

    savings: {
        mediumTerm: { apartment: '', driverLicense: '', education: '' },
        longTerm: { monthlyInvestment: '' },
    },
    setSavings: (details) =>
        set((state) => ({ savings: { ...state.savings, ...details } })),

    accidentSelection: { package1: false, package2: false, package3: false },
    setAccidentSelection: (selection) =>
        set((state) => {
            // mutually exclusive
            const newSelection = { ...state.accidentSelection, ...selection };
            if (selection.package1) { newSelection.package2 = false; newSelection.package3 = false; }
            if (selection.package2) { newSelection.package1 = false; newSelection.package3 = false; }
            if (selection.package3) { newSelection.package1 = false; newSelection.package2 = false; }
            return { accidentSelection: newSelection };
        }),

    healthSelection: { ambulant: false, stationar: false, zahn: false, pflege: false },
    setHealthSelection: (selection) =>
        set((state) => ({ healthSelection: { ...state.healthSelection, ...selection } })),

    disabilitySelection: { package1000: false, package1500: false },
    setDisabilitySelection: (selection) =>
        set((state) => {
            // mutually exclusive
            const newSelection = { ...state.disabilitySelection, ...selection };
            if (selection.package1000) newSelection.package1500 = false;
            if (selection.package1500) newSelection.package1000 = false;
            return { disabilitySelection: newSelection };
        }),

    calculateAge: (birthDate: string) => {
        // basic German date parsing DD.MM.YYYY
        const parts = birthDate.split('.');
        if (parts.length === 3) {
            const bd = parseInt(parts[0]), bm = parseInt(parts[1]), by = parseInt(parts[2]);
            const now = new Date();
            let age = now.getFullYear() - by;
            if (now.getMonth() + 1 < bm || (now.getMonth() + 1 === bm && now.getDate() < bd)) age--;
            if (age < 0) age = 0;
            if (age > 16) age = 16;
            return age;
        }
        const n = parseInt(birthDate);
        if (!isNaN(n)) return Math.min(Math.max(n, 0), 16);
        return 0;
    },
}));
