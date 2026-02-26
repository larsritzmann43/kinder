import React from 'react';
import { useAppStore } from '../store/useAppStore';
import { ACCIDENT_PRICES } from '../data/pricingData';
import { ShieldAlert, Shield, ShieldCheck } from 'lucide-react';

const Page6_Accident = () => {
    const { accidentSelection, setAccidentSelection } = useAppStore();

    let currentPrice = 0;
    if (accidentSelection.package1) currentPrice = ACCIDENT_PRICES.pack1;
    if (accidentSelection.package2) currentPrice = ACCIDENT_PRICES.pack2;
    if (accidentSelection.package3) currentPrice = ACCIDENT_PRICES.pack3; // normally 0 or custom

    return (
        <section className="snap-section bg-stone-50">
            <div className="max-w-6xl w-full flex flex-col h-full py-12">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-stone-100">
                    <div>
                        <span className="text-xl text-[#4a4a49] font-bold">Unfallvorsorge</span>
                    </div>
                    <div>
                        <span className="text-5xl font-bold text-stone-200">04</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 flex-grow">
                    {/* Information Column */}
                    <div className="col-span-1 border-r border-stone-200 pr-8">
                        <div className="text-center mb-8">
                            <h3 className="text-5xl font-black text-[#e85d04] mb-2">4</h3>
                            <p className="text-stone-600 uppercase font-bold text-sm tracking-widest">Alle Sekunden<br />passiert ein Unfall<br />in Deutschland</p>
                        </div>
                        <div className="text-center mb-8">
                            <h3 className="text-5xl font-black text-[#e85d04] mb-2">70%</h3>
                            <p className="text-stone-600 uppercase font-bold text-sm tracking-widest">der Unfälle ereignen<br />sich in der Freizeit.<br />Gerade Kinder sind gefährdet.</p>
                        </div>
                    </div>

                    {/* Packages Column */}
                    <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* Package 1 */}
                        <div
                            className={`card cursor-pointer border-2 transition-all ${accidentSelection.package1 ? 'border-[#7e9a14] bg-[#7e9a14]/5 shadow-xl scale-105' : 'border-transparent hover:border-stone-300'} flex flex-col`}
                            onClick={() => setAccidentSelection({ package1: !accidentSelection.package1 })}
                        >
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-bold text-[#4a4a49]">Leistungspaket 1</h3>
                                <Shield className={accidentSelection.package1 ? "text-[#4a4a49]" : "text-stone-400"} size={28} />
                            </div>
                            <ul className="space-y-3 text-sm text-stone-600 flex-grow mb-6">
                                <li className="flex items-center">✓ 100.000 € Grundinvalidität</li>
                                <li className="flex items-center">✓ 350 % Progression</li>
                                <li className="flex items-center">✓ 10.000 € Todesfall</li>
                                <li className="flex items-center">✓ 25 € KTG / GG</li>
                                <li className="flex items-center font-bold text-[#4a4a49]">✓ 1.000 € Unfallrente</li>
                            </ul>
                            <div className="text-center pt-4 border-t border-stone-200">
                                <span className="text-3xl font-extrabold text-[#4a4a49]">{ACCIDENT_PRICES.pack1.toFixed(2).replace('.', ',')} €</span>
                                <span className="block text-xs text-stone-500 uppercase">monatlich</span>
                            </div>
                        </div>

                        {/* Package 2 */}
                        <div
                            className={`card cursor-pointer border-2 transition-all ${accidentSelection.package2 ? 'border-[#7e9a14] bg-[#7e9a14]/5 shadow-xl scale-105' : 'border-transparent hover:border-stone-300'} flex flex-col`}
                            onClick={() => setAccidentSelection({ package2: !accidentSelection.package2 })}
                        >
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-bold text-[#4a4a49]">Leistungspaket 2</h3>
                                <ShieldCheck className={accidentSelection.package2 ? "text-[#4a4a49]" : "text-stone-400"} size={28} />
                            </div>
                            <ul className="space-y-3 text-sm text-stone-600 flex-grow mb-6">
                                <li className="flex items-center">✓ 100.000 € Grundinvalidität</li>
                                <li className="flex items-center">✓ 500 % Progression</li>
                                <li className="flex items-center">✓ 10.000 € Todesfall</li>
                                <li className="flex items-center">✓ 25 € KTG / GG</li>
                                <li className="flex items-center font-bold text-[#4a4a49]">✓ 1.500 € Unfallrente</li>
                            </ul>
                            <div className="text-center pt-4 border-t border-stone-200">
                                <span className="text-3xl font-extrabold text-[#4a4a49]">{ACCIDENT_PRICES.pack2.toFixed(2).replace('.', ',')} €</span>
                                <span className="block text-xs text-stone-500 uppercase">monatlich</span>
                            </div>
                        </div>

                        {/* Package 3 */}
                        <div
                            className={`card cursor-pointer border-2 transition-all ${accidentSelection.package3 ? 'border-[#7e9a14] bg-[#7e9a14]/5 shadow-xl scale-105' : 'border-transparent hover:border-stone-300'} flex flex-col`}
                            onClick={() => setAccidentSelection({ package3: !accidentSelection.package3 })}
                        >
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-bold text-[#4a4a49]">Leistungspaket 3</h3>
                                <ShieldAlert className={accidentSelection.package3 ? "text-[#4a4a49]" : "text-stone-400"} size={28} />
                            </div>
                            <p className="text-sm text-stone-500 italic flex-grow mb-6">
                                Individuelle Konfiguration basierend auf separaten Angeboten.
                                <br /><br />Die Werte können im Beratungsbogen manuell eingetragen werden.
                            </p>
                            <div className="text-center pt-4 border-t border-stone-200">
                                <span className="text-3xl font-extrabold text-[#4a4a49]">Individuell</span>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="mt-8 flex justify-between items-center bg-[#7e9a14] text-white p-6 rounded-xl shadow-lg">
                    <span>
                        Gewähltes Unfallvorsorge-Paket
                    </span>
                    <span className="text-4xl font-extrabold">
                        {currentPrice > 0 ? `${currentPrice.toFixed(2).replace('.', ',')} €` : '0,00 €'}
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Page6_Accident;
