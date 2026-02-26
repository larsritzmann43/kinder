import React from 'react';
import { useAppStore } from '../store/useAppStore';
import { HEALTH_PRICES, DISABILITY_1000_PRICES, DISABILITY_1500_PRICES, ACCIDENT_PRICES } from '../data/pricingData';
import { CheckCircle2, Download } from 'lucide-react';

const Page9_SummaryNavigation = () => {
    const { childDetails, savings, healthSelection, accidentSelection, disabilitySelection } = useAppStore();
    const age = childDetails.age;

    // Calc individual values
    const medTermTotal = parseFloat(savings.mediumTerm.apartment || '0') + parseFloat(savings.mediumTerm.driverLicense || '0') + parseFloat(savings.mediumTerm.education || '0');
    const longTermInvest = parseFloat(savings.longTerm.monthlyInvestment || '0');

    let accidentPrice = 0;
    if (accidentSelection.package1) accidentPrice = ACCIDENT_PRICES.pack1;
    if (accidentSelection.package2) accidentPrice = ACCIDENT_PRICES.pack2;

    const healthPrice =
        (healthSelection.ambulant ? HEALTH_PRICES.AMB[age] || 0 : 0) +
        (healthSelection.stationar ? HEALTH_PRICES.STAT[age] || 0 : 0) +
        (healthSelection.zahn ? HEALTH_PRICES.ZAHN[age] || 0 : 0) +
        (healthSelection.pflege ? HEALTH_PRICES.PFL[age] || 0 : 0);

    const disabilityPrice = disabilitySelection.package1000
        ? (DISABILITY_1000_PRICES[age] || 0)
        : (disabilitySelection.package1500 ? (DISABILITY_1500_PRICES[age] || 0) : 0);

    const totalCost = longTermInvest + accidentPrice + healthPrice + disabilityPrice;

    // For scrolling to sections within the One-Pager (simulating PDF Links)
    const scrollToSection = (index: number) => {
        const sections = document.querySelectorAll('.snap-section');
        if (sections[index]) {
            sections[index].scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="snap-section bg-stone-50" id="summary-section">
            <div className="max-w-6xl w-full flex flex-col h-full py-12">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone-200">
                    <div>
                        <span className="text-xl text-[#4a4a49] font-bold">Zusammenfassung & Entscheidung</span>
                    </div>
                    <div>
                        <span className="text-5xl font-bold text-stone-200">07</span>
                    </div>
                </div>

                <div className="mb-4">
                    <h2 className="text-3xl font-extrabold text-[#4a4a49] uppercase tracking-wide">
                        Wie sieht der Plan konkret aus?
                    </h2>
                    <p className="text-xl text-[#91a739] mt-1 font-semibold">
                        Gesicherter Start ins Leben - Der Plan steht!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 flex-grow items-center">

                    {/* Left Side - Values */}
                    <div className="space-y-4">

                        {/* Savings Block */}
                        <div className="card border-l-4 border-l-[#91a739]">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-bold text-[#4a4a49] uppercase text-sm">Vermögen</h3>
                                <button onClick={() => scrollToSection(2)} className="text-xs text-blue-500 hover:underline">Bearbeiten</button>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <span className="block text-stone-500 text-xs uppercase">Mittelfristig (Ziel)</span>
                                    <span className="font-bold text-lg">{medTermTotal.toFixed(2).replace('.', ',')} €</span>
                                </div>
                                <div>
                                    <span className="block text-stone-500 text-xs uppercase">Langfristig (Invest)</span>
                                    <span className="font-bold text-lg">{longTermInvest.toFixed(2).replace('.', ',')} € <span className="text-xs font-normal">mtl.</span></span>
                                </div>
                            </div>
                        </div>

                        {/* Risks Block */}
                        <div className="card space-y-4 border-l-4 border-l-[#e85d04]">
                            <div className="flex justify-between items-center pb-2 border-b border-stone-100">
                                <h3 className="font-bold text-[#4a4a49] uppercase text-sm">Absicherung</h3>
                            </div>

                            <div className="flex justify-between items-center">
                                <div>
                                    <span className="block text-stone-700 font-semibold mb-1">Erwerbsunfähigkeitsvorsorge</span>
                                    <div className="flex space-x-2 text-xs text-stone-500">
                                        {disabilityPrice > 0 ? <span className="flex items-center"><CheckCircle2 size={12} className="mr-1 text-green-500" /> Gewählt</span> : <span>Nicht gewählt</span>}
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="font-bold text-lg">{disabilityPrice.toFixed(2).replace('.', ',')} €</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center border-t border-stone-100 pt-3">
                                <div>
                                    <span className="block text-stone-700 font-semibold mb-1">Krankheitskostenvorsorge</span>
                                    <div className="flex space-x-2 text-xs text-stone-500">
                                        {healthPrice > 0 ? <span className="flex items-center"><CheckCircle2 size={12} className="mr-1 text-green-500" /> Gewählt</span> : <span>Nicht gewählt</span>}
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="font-bold text-lg">{healthPrice.toFixed(2).replace('.', ',')} €</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center border-t border-stone-100 pt-3">
                                <div>
                                    <span className="block text-stone-700 font-semibold mb-1">Unfallvorsorge</span>
                                    <div className="flex space-x-2 text-xs text-stone-500">
                                        {accidentPrice > 0 || accidentSelection.package3 ? <span className="flex items-center"><CheckCircle2 size={12} className="mr-1 text-green-500" /> Gewählt</span> : <span>Nicht gewählt</span>}
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="font-bold text-lg">{accidentSelection.package3 ? 'Individuell' : `${accidentPrice.toFixed(2).replace('.', ',')} €`}</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right Side - Circular Navigation Component Mockup */}
                    <div className="flex flex-col items-center justify-center relative w-full h-full min-h-[400px]">
                        {/* Circular diagram mapping to sections */}
                        <div className="relative w-80 h-80 rounded-full border-[16px] border-[#7e9a14] flex items-center justify-center shadow-2xl">
                            <div className="absolute inset-0 m-auto w-40 h-40 bg-white rounded-full flex flex-col items-center justify-center z-20 shadow-inner">
                                <span className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-1">Gesamtpreis</span>
                                <span className="text-3xl font-extrabold text-[#4a4a49]">{totalCost.toFixed(2).replace('.', ',')} €</span>
                                <span className="text-stone-400 text-xs font-bold uppercase mt-1 tracking-widest">Monatlich</span>
                            </div>

                            {/* Nav Segments (Absolute Positioning) */}
                            <button onClick={() => scrollToSection(2)} className="absolute top-0 right-0 w-32 h-32 bg-[#91a739] rounded-full text-white text-xs font-bold shadow-lg transform translate-x-12 -translate-y-8 hover:scale-110 transition-transform">
                                Mittelfristiges<br />Vermögen
                            </button>
                            <button onClick={() => scrollToSection(3)} className="absolute bottom-0 right-0 w-32 h-32 bg-[#91a739] rounded-full text-white text-xs font-bold shadow-lg transform translate-x-12 translate-y-8 hover:scale-110 transition-transform">
                                Langfristiges<br />Vermögen
                            </button>

                            <button onClick={() => scrollToSection(7)} className="absolute top-1/2 -mt-16 -left-16 w-32 h-32 bg-yellow-500 rounded-full text-white text-xs font-bold shadow-lg hover:scale-110 transition-transform">
                                Erwerbsunf.-<br />Vorsorge
                            </button>

                            <button onClick={() => scrollToSection(6)} className="absolute bottom-0 left-8 w-24 h-24 bg-[#0ea5e9] rounded-full text-white text-xs font-bold shadow-lg transform -translate-y-2 hover:scale-110 transition-transform">
                                Krankheit
                            </button>

                            <button onClick={() => scrollToSection(5)} className="absolute top-0 left-8 w-24 h-24 bg-[#e85d04] rounded-full text-white text-xs font-bold shadow-lg transform translate-y-2 hover:scale-110 transition-transform">
                                Unfall
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex justify-end gap-4 border-t border-stone-200 pt-6">
                    <button className="btn-secondary">
                        Zurück ändern
                    </button>
                    <button className="btn-primary gap-2">
                        <Download size={20} />
                        PDF Zertifikat Generieren
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Page9_SummaryNavigation;
