// import componentsImg from './assets/components.png'
import { CORE_CONCEPTS } from './data.js'
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  function handleSelect(name) {
    if(name == "component"){
      console.log("Hello")
    }
    console.log(name);
    console.log("Hello World!")
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              img={CORE_CONCEPTS[0].image} />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              img={CORE_CONCEPTS[1].image} />
            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              img={CORE_CONCEPTS[2].image} />
            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              img={CORE_CONCEPTS[3].image} />

          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => { handleSelect("component") }}>Components</TabButton>
            <TabButton onSelect={() => { handleSelect("JSX") }}>JSX</TabButton>
            <TabButton onSelect={() => { handleSelect("Props") }}>Props</TabButton>
            <TabButton onSelect={() => { handleSelect("State") }}>State</TabButton>
          </menu>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
