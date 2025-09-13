import Card from "./components/Card";

const section = [
  // fill with data to map over
];

function Casepage() {
  return (
    <>
      <section>
        <div className="px-2 sm:px-6 pt-16">
          {section.map((section, idx) => (
            <div key={section.title} className="mb-10">
              <p className="text-white text-2xl sm:text-4xl font-serif mb-2">
                {section.title}
              </p>
              <div className="bg-white w-4/6 h-0.5 mb-5 translate-x-[25%] opacity-65 shadow-xl"></div>
              <div
                className="
              grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-10
              overflow-x-auto
              sm:overflow-x-visible
              whitespace-nowrap
              "
                style={{ WebkitOverflowScrolling: "touch" }}
              >
                {section.data.map((card, index) => (
                  <div key={index} className="inline-block w-full sm:w-auto">
                    <Card
                      title={card.title}
                      text={card.text}
                      linkText={card.linkText}
                      linkHref={card.linkHref}
                      images={card.images}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="bg-white w-4/6 h-0.5 translate-x-[17%] opacity-65"></div>
        </div>
      </section>
    </>
  );
}

export default Casepage;
