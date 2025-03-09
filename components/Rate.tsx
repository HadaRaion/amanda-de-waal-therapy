const rates = [
  {
    duration: "20 minute",
    title: "Consultation",
    type: "Phone call only",
    price: "Free",
  },
  {
    duration: "50 minute",
    title: "Individual Counselling",
    type: "In Person / Virtually",
    price: "$155",
  },
  {
    duration: "80 minute",
    title: "Individual Counselling",
    type: "In Person / Virtually",
    price: "$248",
  },
];

export default function Rate() {
  return (
    <section>
      <ul className="flex flex-col md:flex-row border-y border-black">
        {rates.map((rate, index) => (
          <li
            key={index}
            className="md:w-1/3 flex flex-col items-center py-24 lg:py-24 mx-10 md:mx-0
            md:border-black md:border-r md:last:border-r-0 
            border-dark/30 border-b last:border-b-0 md:border-b-0 
            "
          >
            <h3 className="font-serif text-2xl">{rate.duration}</h3>
            <h3 className="font-serif text-2xl">{rate.title}</h3>
            <p className="mt-2">{rate.type}</p>
            <p
              className={`font-serif text-5xl text-dark/70 mt-10 md:mt-12 ${
                rate.price === "Free" || "md:ml-4"
              }`}
            >
              {rate.price}
              {rate.price === "Free" || (
                <span className="font-sans text-sm text-center block md:inline mt-3 md:ml-3 ">
                  + GST
                </span>
              )}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
