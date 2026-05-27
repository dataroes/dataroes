import React from "react";
import { FaQuoteLeft } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    quote:
      "Before implementing Dataroes, our forecasting process depended heavily on static reports and manual analysis. The predictive intelligence engine now gives our operations team real-time visibility into future demand patterns, operational risks, and performance bottlenecks. We’ve improved planning accuracy and reduced response times significantly.",
    name: "Michael Carter",
    title: "Operations Director, Enterprise Technology Firm",
  },
  {
    quote:
      "Dataroes completely modernized our financial analytics workflow. The AI-driven forecasting models helped us identify revenue trends earlier, improve budgeting accuracy, and reduce uncertainty in strategic planning. The platform delivers executive-level intelligence that traditional reporting systems simply cannot provide.",
    name: "Sophia Bennett",
    title: "Finance Manager, SA Solutions",
  },
  {
    quote:
      "What impressed us most was the platform’s ability to convert complex business data into clear strategic recommendations. Instead of reacting to operational issues after they happen, our leadership team now uses predictive insights to make proactive decisions with confidence.",
    name: "Daniel Foster",
    title: "Strategy Lead, Global Logistics",
  },
  {
    quote:
      "The dashboard experience feels like a true AI-powered command center. From predictive visualizations to infrastructure monitoring and KPI intelligence, Dataroes provides a premium enterprise analytics environment that supports both technical teams and executive decision-makers.",
    name: "Rachel Morgan",
    title: "Chief Operating Officer, Digital Enterprise",
  },
  {
    quote:
      "Most BI platforms only show historical data. Dataroes goes far beyond that by forecasting future outcomes and identifying hidden business patterns in real time. The predictive engine has become a critical part of our long-term growth and operational strategy.",
    name: "Kevin Richardson",
    title: "Head of Analytics, Retail Technology Group",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default function Testimonials() {
  let sliderRef = React.useRef(null);
  return (
    <section className="bg-navy-950 py-16 border-t border-white/10 w-full overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-2 sm:px-4">
        <h2 className="text-xl md:text-2xl font-bold text-teal mb-6 text-center font-dm">What Our Clients Say</h2>
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((t, i) => (
            <div key={i} className="px-1 sm:px-4 w-full">
              <div className="bg-navy-900 rounded-xl shadow-lg p-6 h-full flex flex-col justify-between border border-white/5 min-h-[320px] sm:min-h-[260px]">
                <FaQuoteLeft className="text-teal text-2xl mb-3" />
                <p className="text-base text-slate-200 font-medium mb-4">{t.quote}</p>
                <div>
                  <div className="font-bold text-white text-base">{t.name}</div>
                  <div className="text-teal text-sm font-mono mt-1">{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 w-full">
          <button
            aria-label="Previous testimonial"
            className="px-5 py-2 rounded border border-slate-300 bg-white text-navy-900 font-medium text-base hover:bg-slate-100 transition-colors"
            onClick={() => sliderRef.current?.slickPrev()}
          >
            &#8592; Prev
          </button>
          <button
            aria-label="Next testimonial"
            className="px-5 py-2 rounded border border-slate-300 bg-white text-navy-900 font-medium text-base hover:bg-slate-100 transition-colors"
            onClick={() => sliderRef.current?.slickNext()}
          >
            Next &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}
