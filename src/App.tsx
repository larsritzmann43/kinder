import Page1_Intro from './pages/Page1_Intro';
import Page2_Overview from './pages/Page2_Overview';
import Page3_SavingsMedium from './pages/Page3_SavingsMedium';
import Page4_SavingsLong from './pages/Page4_SavingsLong';
import Page5_RiskIntro from './pages/Page5_RiskIntro';
import Page6_Accident from './pages/Page6_Accident';
import Page7_Health from './pages/Page7_Health';
import Page8_Disability from './pages/Page8_Disability';
import Page9_SummaryNavigation from './pages/Page9_SummaryNavigation';

// We skip pages 10-13 as they are appendix data pages
// Or we render them as modals / hidden sections if needed.

function App() {
  return (
    <div className="snap-container relative">
      <Page1_Intro />
      <Page2_Overview />
      <Page3_SavingsMedium />
      <Page4_SavingsLong />
      <Page5_RiskIntro />
      <Page6_Accident />
      <Page7_Health />
      <Page8_Disability />
      <Page9_SummaryNavigation />
    </div>
  );
}

export default App;
