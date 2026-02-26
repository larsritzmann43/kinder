import { useAppStore } from '../store/useAppStore';

const Page4_SavingsLong = () => {
    const { savings, setSavings } = useAppStore();

    return (
        <section className="snap-section bg-white border-b border-stone-200">
            <div className="max-w-5xl w-full flex flex-col h-full py-12">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-stone-100">
                    <div>
                        <span className="text-xl text-[#4a4a49] font-bold">Langfristiges Sparen für das Alter des Kindes</span>
                    </div>
                    <div>
                        <span className="text-5xl font-bold text-stone-200">02</span>
                    </div>
                </div>

                <div className="mb-6">
                    <h2 className="text-3xl font-extrabold text-[#4a4a49] uppercase tracking-wide">
                        Kindergeld clever nutzen!
                    </h2>
                    <p className="text-stone-600 mt-4 leading-relaxed max-w-3xl">
                        Im Ruhestand zählt neben der Gesundheit vor allem eines: Das Geld soll zuverlässig reichen.
                        Monat für Monat, auch wenn man sehr alt wird. Wenn Eltern für ihr Kind das Thema Rente schon
                        heute anpacken, entsteht finanzielle Freiheit im Alter.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="card bg-stone-50 border-none col-span-1">
                        <h4 className="font-bold text-[#4a4a49] mb-2 uppercase text-sm tracking-wider">Finanzielle Unterstützung vom Staat</h4>
                        <div className="text-4xl font-extrabold text-[#91a739] mb-6">259,- € <span className="text-sm text-stone-500 font-normal">mtl. ab 2026</span></div>

                        <ul className="space-y-4 text-sm text-stone-600">
                            <li className="flex items-center justify-between border-b border-stone-200 pb-2">
                                <span>Alle Kinder</span>
                                <span className="font-bold">bis 18 Jahre</span>
                            </li>
                            <li className="flex items-center justify-between border-b border-stone-200 pb-2">
                                <span>Arbeitslose Kinder</span>
                                <span className="font-bold">bis 21 Jahre</span>
                            </li>
                            <li className="flex items-center justify-between border-b border-stone-200 pb-2">
                                <span>Kinder in Ausbildung</span>
                                <span className="font-bold">bis 25 Jahre</span>
                            </li>
                        </ul>
                    </div>

                    <div className="card col-span-2 relative overflow-hidden flex flex-col justify-center items-center h-full">
                        {/* Mock Chart Area */}
                        <div className="absolute inset-0 bg-[#7e9a14]/5 pattern-dots pattern-stone-400 pattern-bg-transparent pattern-size-4 pattern-opacity-10 opacity-50"></div>
                        <div className="relative z-10 text-center w-full">
                            <h3 className="text-2xl font-bold text-[#4a4a49] mb-8">Vermögen aufbauen</h3>

                            {/* Placeholder for actual chart if needed */}
                            <div className="h-48 w-full flex items-end justify-center space-x-4 border-b-2 border-stone-300 pb-2 px-8">
                                <div className="w-16 bg-[#91a739]/30 rounded-t-md h-[20%] relative group cursor-pointer transition-all hover:bg-[#91a739]/50"><span className="absolute -top-6 left-1/2 -translate-x-1/2 font-bold text-[#4a4a49]">18</span></div>
                                <div className="w-16 bg-[#91a739]/50 rounded-t-md h-[40%] relative group cursor-pointer transition-all hover:bg-[#91a739]/70"><span className="absolute -top-6 left-1/2 -translate-x-1/2 font-bold text-[#4a4a49]">25</span></div>
                                <div className="w-16 bg-[#91a739]/70 rounded-t-md h-[70%] relative group cursor-pointer transition-all hover:bg-[#91a739]/90"><span className="absolute -top-6 left-1/2 -translate-x-1/2 font-bold text-[#4a4a49]">40</span></div>
                                <div className="w-16 bg-[#91a739] rounded-t-md h-[100%] relative group cursor-pointer transition-all hover:bg-[#91a739]"><span className="absolute -top-6 left-1/2 -translate-x-1/2 font-bold text-[#4a4a49]">67</span></div>
                            </div>
                            <p className="text-xs text-stone-400 mt-2">Alter des Kindes</p>
                        </div>
                    </div>
                </div>

                <div className="mt-auto flex justify-between items-center bg-[#7e9a14] text-white p-6 rounded-xl shadow-lg">
                    <div className="flex-1">
                        <span className="block text-sm font-light uppercase tracking-widest text-[#d8e5a3]">Monatliche Investition für den Vermögensaufbau</span>
                    </div>
                    <div className="text-right flex items-center gap-4">
                        <input
                            type="number"
                            className="bg-white/10 border-b-2 border-white/30 px-4 py-2 text-3xl font-bold text-white w-48 text-right focus:outline-none focus:border-white"
                            value={savings.longTerm.monthlyInvestment}
                            onChange={(e) => setSavings({ longTerm: { monthlyInvestment: e.target.value } })}
                            placeholder="0"
                        />
                        <span className="text-3xl font-bold">€</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page4_SavingsLong;
