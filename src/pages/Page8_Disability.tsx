import { useAppStore } from '../store/useAppStore';
import { DISABILITY_1000_PRICES, DISABILITY_1500_PRICES } from '../data/pricingData';

const Page8_Disability = () => {
    const { childDetails, disabilitySelection, setDisabilitySelection } = useAppStore();
    const age = childDetails.age; // calculated age between 0-16

    const price1000 = DISABILITY_1000_PRICES[age] || 0;
    const price1500 = age >= 10 ? (DISABILITY_1500_PRICES[age] || 0) : 0;

    const currentPrice = disabilitySelection.package1000 ? price1000 : (disabilitySelection.package1500 ? price1500 : 0);

    return (
        <section className="snap-section bg-stone-50">
            <div className="max-w-5xl w-full flex flex-col h-full py-12">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-stone-100">
                    <div>
                        <span className="text-xl text-[#4a4a49] font-bold">Erwerbsunfähigkeit durch Unfall oder Krankheit</span>
                    </div>
                    <div>
                        <span className="text-5xl font-bold text-stone-200">06</span>
                    </div>
                </div>

                <div className="mb-8 card bg-white">
                    <h2 className="text-2xl font-extrabold text-[#4a4a49] uppercase tracking-wide mb-4">
                        Gesetzliche Leistungen sind nur eine Basis.
                    </h2>
                    <p className="text-stone-600 leading-relaxed max-w-4xl">
                        Es gibt viele gute Gründe das eigene Kind bestmöglich abzusichern. Zwei davon liefert die Statistik:
                        Ein Großteil der Erwerbsunfähigkeit bei Kindern entsteht durch schwere Krankheiten wie Diabetes,
                        Leukämie oder Epilepsie. In all diesen Fällen zahlt der Staat keinen Cent.
                    </p>

                    <div className="bg-[#e85d04]/10 p-4 rounded-xl mt-6 border-l-4 border-[#e85d04]">
                        <h4 className="font-bold text-[#e85d04] mb-2 uppercase text-sm">Beispiel:</h4>
                        <ul className="list-disc list-inside text-sm text-stone-700 space-y-1">
                            <li>Ein Kind wird nie erwerbsfähig</li>
                            <li>Es fehlt ihm somit sein gesamtes Lebenseinkommen</li>
                            <li>Ein Kind, das nie arbeiten kann, verliert über <strong>1,5 Mio. Euro</strong> Lebenseinkommen.</li>
                        </ul>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow">
                    {/* Package 1 */}
                    <div
                        className={`card cursor-pointer flex justify-between items-center transition-all border-2 ${disabilitySelection.package1000 ? 'border-[#7e9a14] bg-[#7e9a14]/5 shadow-xl scale-105' : 'border-transparent hover:border-stone-300'}`}
                        onClick={() => setDisabilitySelection({ package1000: !disabilitySelection.package1000 })}
                    >
                        <div>
                            <span className="text-stone-500 uppercase tracking-widest textxs font-bold mb-1 block">Leistungspaket</span>
                            <h3 className="text-4xl font-extrabold text-[#4a4a49]">1.000 € <span className="text-xl font-normal text-stone-500">Rente</span></h3>
                            <p className="text-xs text-stone-400 mt-2 uppercase">Beitrag ab Alter {age}</p>
                        </div>
                        <div className="text-right">
                            <div className="text-3xl font-bold text-[#4a4a49]">{price1000.toFixed(2).replace('.', ',')} €</div>
                            <span className="block text-xs text-stone-500 uppercase mt-1">monatlich</span>
                        </div>
                    </div>

                    {/* Package 2 */}
                    <div
                        className={`card flex justify-between items-center transition-all border-2 ${age < 10 ? 'opacity-50 cursor-not-allowed bg-stone-100 border-stone-200' :
                                disabilitySelection.package1500 ? 'border-[#7e9a14] bg-[#7e9a14]/5 shadow-xl scale-105 cursor-pointer' : 'border-transparent hover:border-stone-300 cursor-pointer'
                            }`}
                        onClick={() => {
                            if (age >= 10) setDisabilitySelection({ package1500: !disabilitySelection.package1500 })
                        }}
                    >
                        <div>
                            <span className="text-stone-500 uppercase tracking-widest textxs font-bold mb-1 block">Leistungspaket</span>
                            <h3 className="text-4xl font-extrabold text-[#4a4a49]">1.500 € <span className="text-xl font-normal text-stone-500">Rente</span></h3>
                            {age < 10 ? (
                                <p className="text-xs text-[#e85d04] font-bold mt-2">Erst ab 10 Jahren verfügbar</p>
                            ) : (
                                <p className="text-xs text-stone-400 mt-2 uppercase">Beitrag ab Alter {age}</p>
                            )}
                        </div>
                        <div className="text-right">
                            <div className="text-3xl font-bold text-[#4a4a49]">{age >= 10 ? `${price1500.toFixed(2).replace('.', ',')} €` : '-'}</div>
                            <span className="block text-xs text-stone-500 uppercase mt-1">monatlich</span>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex justify-between items-center bg-[#7e9a14] text-white p-6 rounded-xl shadow-lg">
                    <span>
                        Gewähltes Erwerbsunfähigkeits-Paket
                    </span>
                    <span className="text-4xl font-extrabold">
                        {currentPrice.toFixed(2).replace('.', ',')} €
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Page8_Disability;
