import React from 'react';
import { useAppStore } from '../store/useAppStore';
import { Home, Car, GraduationCap } from 'lucide-react';

const Page3_SavingsMedium = () => {
    const { savings, setSavings } = useAppStore();

    const handleMediumTermChange = (field: 'apartment' | 'driverLicense' | 'education', value: string) => {
        setSavings({
            mediumTerm: {
                ...savings.mediumTerm,
                [field]: value,
            }
        });
    };

    const total = (parseFloat(savings.mediumTerm.apartment || '0') +
        parseFloat(savings.mediumTerm.driverLicense || '0') +
        parseFloat(savings.mediumTerm.education || '0')).toFixed(2);

    return (
        <section className="snap-section bg-stone-50">
            <div className="max-w-5xl w-full flex flex-col h-full py-12">
                <div className="text-center mb-10">
                    <span className="text-5xl font-bold text-stone-200 block mb-2">02</span>
                    <h2 className="text-3xl font-extrabold text-[#4a4a49] uppercase tracking-wide">
                        Früh anfangen heißt: Zukunft möglich machen.
                    </h2>
                    <p className="text-xl text-[#7e9a14] mt-2 font-light">
                        Investitionen für den Start ins Leben.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-grow">
                    {/* Card 1 */}
                    <div className="card flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-[#7e9a14] text-white rounded-full flex items-center justify-center mb-6">
                            <Home size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-[#4a4a49] mb-4">Erste eigene <br /> Wohnung</h3>
                        <p className="text-stone-600 text-sm flex-grow">
                            Die erste eigene Wohnung ist ein großer Schritt – gleichzeitig ist das erste Einkommen oft noch begrenzt. Die Kosten für Kaution, Umzug und Einrichtung kommen auf einen Schlag.
                        </p>
                        <div className="w-full mt-6">
                            <label className="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">Benötigter Betrag €</label>
                            <input
                                type="number"
                                className="form-input text-center text-[#4a4a49] font-bold text-2xl"
                                value={savings.mediumTerm.apartment}
                                onChange={(e) => handleMediumTermChange('apartment', e.target.value)}
                                placeholder="0"
                            />
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="card flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-[#7e9a14] text-white rounded-full flex items-center justify-center mb-6">
                            <Car size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-[#4a4a49] mb-4">Führerschein & <br /> Auto</h3>
                        <p className="text-stone-600 text-sm flex-grow">
                            Mobilität ist für viele junge Menschen ein ersehnter Meilenstein – aber sie kostet. Eltern zahlen durchschnittlich 3.400 € für den Führerschein und 16.559 € für das erste Fahrzeug.
                        </p>
                        <div className="w-full mt-6">
                            <label className="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">Benötigter Betrag €</label>
                            <input
                                type="number"
                                className="form-input text-center text-[#4a4a49] font-bold text-2xl"
                                value={savings.mediumTerm.driverLicense}
                                onChange={(e) => handleMediumTermChange('driverLicense', e.target.value)}
                                placeholder="0"
                            />
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="card flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-[#7e9a14] text-white rounded-full flex items-center justify-center mb-6">
                            <GraduationCap size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-[#4a4a49] mb-4">Ausbildung, Studium & <br /> Berufseinstieg</h3>
                        <p className="text-stone-600 text-sm flex-grow">
                            Mit einer Ausbildung oder Studium stehen viele Ausgaben an. Eine fünfjährige Studienzeit kostet die spendablen Eltern dann gern um die 30.000 €.
                        </p>
                        <div className="w-full mt-6">
                            <label className="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">Benötigter Betrag €</label>
                            <input
                                type="number"
                                className="form-input text-center text-[#4a4a49] font-bold text-2xl"
                                value={savings.mediumTerm.education}
                                onChange={(e) => handleMediumTermChange('education', e.target.value)}
                                placeholder="0"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex justify-between items-center bg-[#7e9a14] text-white p-6 rounded-xl shadow-lg">
                    <div>
                        <span className="block text-sm font-hand text-4xl font-semibold tracking-wide lowercase capitalize text-[#d8e5a3]">Benötigter Gesamtbetrag</span>
                        <span className="text-4xl font-extrabold">{total} €</span>
                    </div>
                    <div className="text-right">
                        <span className="block text-sm font-hand text-4xl font-semibold tracking-wide lowercase capitalize text-[#d8e5a3]">Monatliche Investition</span>
                        <input
                            type="number"
                            className="bg-white/10 border-b-2 border-white/30 px-4 py-2 text-3xl font-bold text-white w-48 text-right focus:outline-none focus:border-white"
                            placeholder="0"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page3_SavingsMedium;
