const CustomizableOptions = () => {
  return (
    <section className="container mx-auto p-8 my-10">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
        Customizable Options
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-gray-700 leading-relaxed">
        <div>
          <ul className="list-disc list-inside mb-4">
            <li className="mb-2">
              <strong>Switch Types:</strong> Choose from a variety of switches
              such as linear, tactile, or clicky, each offering a different feel
              and sound.
            </li>
            <li className="mb-2">
              <strong>Keycap Materials:</strong> Keycaps come in various
              materials, including ABS and PBT, each with its own texture and
              durability.
            </li>
            <li className="mb-2">
              <strong>Backlighting:</strong> Customize the backlighting with
              various colors and effects to match your setup or mood.
            </li>
          </ul>
        </div>
        <div>
          <ul className="list-disc list-inside mb-4">
            <li className="mb-2">
              <strong>Macros and Programmable Keys:</strong> Many mechanical
              keyboards offer programmable keys and macros, allowing users to
              create shortcuts for complex commands and actions.
            </li>
            <li>
              <strong>Layouts:</strong> Mechanical keyboards come in different
              layouts such as tenkeyless, 60%, and full-size, catering to
              different space and functionality needs.
            </li>
          </ul>
          <p>
            Customizable options make mechanical keyboards not only functional
            but also a unique extension of your personal style.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomizableOptions;
