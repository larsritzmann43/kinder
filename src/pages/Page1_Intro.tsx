import { useAppStore } from '../store/useAppStore';

const Page1_Intro = () => {
    const { childDetails, setChildDetails, calculateAge } = useAppStore();

    const handleDateChange = (val: string) => {
        setChildDetails({ birthDate: val });
        const age = calculateAge(val);
        setChildDetails({ age });
    };

    return (
        <section className="snap-section bg-stone-50 bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb046eb9?q=80&w=2669&auto=format&fit=crop')] bg-cover bg-center">
            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm shadow-xl"></div>

            <div className="relative z-10 max-w-4xl w-full flex flex-col items-center justify-center h-full">

                <h1 className="text-6xl font-extrabold text-[#4a4a49] mb-8 text-center drop-shadow-md">
                    Schutz und Chancen
                </h1>

                <p className="text-2xl text-[#7e9a14] mb-12 text-center font-hand text-4xl font-semibold tracking-wide">
                    Träume ermöglichen - Pläne schützen - Zukunft gestalten.
                </p>

                <div className="card w-full max-w-2xl bg-white/90 backdrop-blur-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label className="block text-sm font-semibold text-stone-600 uppercase tracking-wider mb-2">Familienname</label>
                            <input
                                type="text"
                                className="form-input"
                                value={childDetails.familyName}
                                onChange={(e) => setChildDetails({ familyName: e.target.value })}
                                placeholder="Müller"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-stone-600 uppercase tracking-wider mb-2">Vorname</label>
                            <input
                                type="text"
                                className="form-input"
                                value={childDetails.firstName}
                                onChange={(e) => setChildDetails({ firstName: e.target.value })}
                                placeholder="Max"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-stone-600 uppercase tracking-wider mb-2">Alter des Kindes (oder TT.MM.JJJJ)</label>
                            <input
                                type="text"
                                className="form-input"
                                value={childDetails.birthDate}
                                onChange={(e) => handleDateChange(e.target.value)}
                                placeholder="05.10.2015"
                            />
                            {childDetails.age > 0 && <p className="text-xs text-green-600 mt-1">Erkanntes Alter: {childDetails.age} Jahre</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-stone-600 uppercase tracking-wider mb-2">Datum der Beratung</label>
                            <input
                                type="text"
                                className="form-input bg-stone-100 text-stone-500 cursor-not-allowed"
                                value={childDetails.consultationDate}
                                readOnly
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page1_Intro;
