// TechnologyHeader.tsx
import MenuList from './MenuList';

function TechnologyHeader() {
  const technologyData = ['AR', 'Blockchain', 'Healthtech', 'IoT', 'Quantumtech']; // This is the data you want to pass

  return (
    <header>
      <MenuList technologies={technologyData} /> {/* Pass the data as a prop */}
    </header>
  );
}

export default TechnologyHeader;