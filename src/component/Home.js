import React from 'react';
import Zoom from 'react-reveal/Zoom';

function Home() {
  return (
    <Zoom>
      <section id="home" className="lg:ml-[20%] mb-[2%] 
      mt-[3%] lg:mr-[20%] flex flex-col p-6 md:h-[26rem] 
      lg:h-screen space-y-6">
        <img src="logo.png" alt=""  className='w-[4rem] md:h-[20rem] ' />
        <h1 className="text-3xl font-bold">Documentation</h1>

        <h2 className="text-2xl font-semibold">To Start</h2>
        <p className="text-base">Run <code className="p-1 bg-gray-200 rounded">npm i -f</code> to install dependencies.</p>

        <h2 className="text-2xl font-semibold">The Structure of the Project</h2>
        <img src="structure.png" alt="Project Structure" className="w-full rounded-lg shadow-lg"/>

        <h2 className="text-2xl font-semibold">Important Details</h2>
        <ul className="pl-4 space-y-2 list-disc list-inside">
          <li>All assets are in the public folder.</li>
          <li>To change the logo in the tab, replace the <code className="p-1 bg-gray-200 rounded">favicon.ico</code> in the public folder.</li>
          <li>To change the website name, edit the <code className="p-1 bg-gray-200 rounded">public/index.html</code> file.</li>
        </ul>

        <h2 className="text-2xl font-semibold">How It Works?</h2>
        <h3 className="text-xl font-semibold">Loading Screen</h3>
        <p className="text-base">When you first open the website, a loading screen is displayed (Component: <code className="p-1 bg-gray-200 rounded">Loading.js</code>).</p>
        <img src="loading.png" alt="Loading Component" className="w-full rounded-lg shadow-lg"/>

        <h3 className="text-xl font-semibold">Landing Page</h3>
        <p className="text-base">The landing page is displayed within the <code className="p-1 bg-gray-200 rounded">App</code> component, which contains all the displayed sections.</p>
        <img src="hero.png" alt="Landing Page" className="w-full rounded-lg shadow-lg"/>

        <p className="text-base">There is a nested component called <code className="p-1 bg-gray-200 rounded">Properties</code>. In VS Code, you can quickly navigate to a component by pressing <code className="p-1 bg-gray-200 rounded">Ctrl + P</code> and typing the component name.</p>
        <img src="prop.png" alt="Properties Component" className="w-full rounded-lg shadow-lg"/>

        <h2 className="text-2xl font-semibold">About Component</h2>
        <img src="about.png" alt="About Component" className="w-full rounded-lg shadow-lg"/>

        <h2 className="text-2xl font-semibold">Mission Component</h2>
        <img src="mission.png" alt="Mission Component" className="w-full rounded-lg shadow-lg"/>

        <h2 className="text-2xl font-semibold">Global Component</h2>
        <p className="text-base">Contains two nested components:</p>
        <img src="teamBuilding.png" alt="Global Component" className="w-full rounded-lg shadow-lg"/>
        <img src="glob2.png" alt="Nested Components" className="w-full rounded-lg shadow-lg"/>

        <h2 className="text-2xl font-semibold">Services Component</h2>
        <img src="services.png" alt="Services Component" className="w-full rounded-lg shadow-lg"/>

        <h2 className="text-2xl font-semibold">Contact Component</h2>
        <img src="footer.png" alt="Contact Component" className="w-full mb-[5%] rounded-lg shadow-lg"/>
      </section>
    </Zoom>
  );
}

export default Home;
