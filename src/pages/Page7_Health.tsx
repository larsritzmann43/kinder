import React from 'react';
import { useAppStore } from '../store/useAppStore';
import { HEALTH_PRICES } from '../data/pricingData';
import { Stethoscope, Building2, UserPlus, HeartPulse } from 'lucide-react';

const Page7_Health = () => {
    const { childDetails, healthSelection, setHealthSelection } = useAppStore();
    const age = childDetails.age; // calculated age between 0-16

    // Get pricing for current age
    const ambPrice = HEALTH_PRICES.AMB[age] || 0;
    const statPrice = HEALTH_PRICES.STAT[age] || 0;
    const zahnPrice = HEALTH_PRICES.ZAHN[age] || 0;
    const pflPrice = HEALTH_PRICES.PFL[age] || 0;

    // Calculate total based on selection
    const total =
        (healthSelection.ambulant ? ambPrice : 0) +
        (healthSelection.stationar ? statPrice : 0) +
        (healthSelection.zahn ? zahnPrice : 0) +
        (healthSelection.pflege ? pflPrice : 0);

    return (
        <section className="snap-section bg-stone-50">
            <div className="max-w-6xl w-full flex flex-col h-full py-12">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-stone-100">
                    <div>
                        <span className="text-xl text-[#4a4a49] font-bold">Krankheitskostenvorsorge</span>
                    </div>
                    <div>
                        <span className="text-5xl font-bold text-stone-200">05</span>
                    </div>
                </div>

                <div className="mb-8">
                    <h2 className="text-3xl font-extrabold text-[#4a4a49] uppercase tracking-wide">
                        Gesundheit ist das Wertvollste!
                    </h2>
                    <p className="text-xl text-[#7e9a14] mt-2 font-light">
                        Sichern Sie Ihrem Kind die beste Absicherung.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 flex-grow">

                    {/* Ambulant */}
                    <div
                        className={`card cursor-pointer flex flex-col transition-all border-2 ${healthSelection.ambulant ? 'border-[#7e9a14] bg-[#7e9a14]/5 shadow-xl scale-105' : 'border-transparent hover:border-stone-300'}`}
                        onClick={() => setHealthSelection({ ambulant: !healthSelection.ambulant })}
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold text-[#4a4a49] uppercase tracking-wider">Ambulant</h3>
                            <Stethoscope className={healthSelection.ambulant ? "text-[#4a4a49]" : "text-stone-400"} />
                        </div>
                        <ul className="space-y-2 text-sm text-stone-600 flex-grow mb-4">
                            <li>✓ Sehhilfen</li>
                            <li>✓ Medikamente</li>
                            <li>✓ Heilpraktiker / alternative Heilmethoden</li>
                        </ul>
                        <div className="mt-auto pt-4 border-t border-stone-200 flex justify-between items-center">
                            <span className="text-stone-500 text-xs uppercase">Beitrag ab Alter {age}</span>
                            <span className="font-bold text-[#4a4a49] text-xl">{ambPrice.toFixed(2).replace('.', ',')} €</span>
                        </div>
                    </div>

                    {/* Stationär */}
                    <div
                        className={`card cursor-pointer flex flex-col transition-all border-2 ${healthSelection.stationar ? 'border-[#7e9a14] bg-[#7e9a14]/5 shadow-xl scale-105' : 'border-transparent hover:border-stone-300'}`}
                        onClick={() => setHealthSelection({ stationar: !healthSelection.stationar })}
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold text-[#4a4a49] uppercase tracking-wider">Stationär</h3>
                            <Building2 className={healthSelection.stationar ? "text-[#4a4a49]" : "text-stone-400"} />
                        </div>
                        <ul className="space-y-2 text-sm text-stone-600 flex-grow mb-4">
                            <li>✓ Krankenhaustagegeld</li>
                            <li>✓ Ein- oder Zweibettzimmer</li>
                            <li>✓ Privatärztliche Behandlung</li>
                            <li>✓ Freie Krankenhauswahl</li>
                        </ul>
                        <div className="mt-auto pt-4 border-t border-stone-200 flex justify-between items-center">
                            <span className="text-stone-500 text-xs uppercase">Beitrag ab Alter {age}</span>
                            <span className="font-bold text-[#4a4a49] text-xl">{statPrice.toFixed(2).replace('.', ',')} €</span>
                        </div>
                    </div>

                    {/* Zahn */}
                    <div
                        className={`card cursor-pointer flex flex-col transition-all border-2 ${healthSelection.zahn ? 'border-[#7e9a14] bg-[#7e9a14]/5 shadow-xl scale-105' : 'border-transparent hover:border-stone-300'}`}
                        onClick={() => setHealthSelection({ zahn: !healthSelection.zahn })}
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold text-[#4a4a49] uppercase tracking-wider">Zahn</h3>
                            <UserPlus className={healthSelection.zahn ? "text-[#4a4a49]" : "text-stone-400"} />
                        </div>
                        <ul className="space-y-2 text-sm text-stone-600 flex-grow mb-4">
                            <li>✓ Zahnprophylaxe</li>
                            <li>✓ Kieferorthopädie</li>
                            <li>✓ Zahnersatz</li>
                        </ul>
                        <div className="mt-auto pt-4 border-t border-stone-200 flex justify-between items-center">
                            <span className="text-stone-500 text-xs uppercase">Beitrag ab Alter {age}</span>
                            <span className="font-bold text-[#4a4a49] text-xl">{zahnPrice.toFixed(2).replace('.', ',')} €</span>
                        </div>
                    </div>

                    {/* Pflege */}
                    <div
                        className={`card cursor-pointer flex flex-col transition-all border-2 ${healthSelection.pflege ? 'border-[#7e9a14] bg-[#7e9a14]/5 shadow-xl scale-105' : 'border-transparent hover:border-stone-300'}`}
                        onClick={() => setHealthSelection({ pflege: !healthSelection.pflege })}
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold text-[#4a4a49] uppercase tracking-wider text-sm">Pflegetagegeld</h3>
                            <HeartPulse className={healthSelection.pflege ? "text-[#4a4a49]" : "text-stone-400"} />
                        </div>
                        <ul className="space-y-2 text-sm text-stone-600 flex-grow mb-4">
                            <li>✓ Planbares Tagegeld je nach Pflegegrad</li>
                            <li>✓ Flexibel einsetzbar</li>
                        </ul>
                        <div className="mt-auto pt-4 border-t border-stone-200 flex justify-between items-center">
                            <span className="text-stone-500 text-xs uppercase">Beitrag ab Alter {age}</span>
                            <span className="font-bold text-[#4a4a49] text-xl">{pflPrice.toFixed(2).replace('.', ',')} €</span>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex justify-between items-center bg-[#7e9a14] text-white p-6 rounded-xl shadow-lg">
                    <span>
                        Gewählte Krankheitskostenvorsorge
                    </span>
                    <span className="text-4xl font-extrabold">
                        {total.toFixed(2).replace('.', ',')} €
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Page7_Health;
