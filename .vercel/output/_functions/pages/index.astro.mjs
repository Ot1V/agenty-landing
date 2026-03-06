/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute, b as createAstro, l as renderScript } from '../chunks/astro/server_D_aZ30lb.mjs';
import { b as $$Section, c as $$SectionTitle, $ as $$Sponsors, a as $$Services } from '../chunks/Services_BGbkzzrS.mjs';
/* empty css                                 */
import { $ as $$MainLayout } from '../chunks/MainLayout_DaeRiR6f.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "audit" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-[140px] mt-20 relative bg-gray sm:rounded-[45px] p-10 md:p-20 text-center flex flex-col items-center shadow-sm border border-zinc-200"> <h2 class="text-4xl md:text-6xl font-medium mb-8 max-w-4xl tracking-tight">
Find Out How Much Revenue You're Losing to <span class="text-accent hover:underline">Slow Response</span> </h2> <p class="text-xl md:text-2xl text-zinc-600 mb-12 max-w-3xl leading-relaxed">
The Lost Lead Audit takes 2 minutes. We'll show you the exact gaps in your lead flow, the revenue impact, and what it looks like when every lead is contacted in under 60 seconds.
</p> <a href="#" class="px-10 py-5 bg-accent hover:bg-black rounded-2xl text-white transition-all transform hover:scale-105 text-xl font-medium shadow-xl">
Get Your Lost Lead Audit &rarr;
</a> <p class="mt-8 text-zinc-500 font-medium">
Live in 7 days or you don't pay month one. No risk. No long term contracts.
</p> </div> ` })}`;
}, "/Users/vpugni7/Desktop/agenty-landing/src/components/sections/Contact.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex flex-col items-center justify-center text-center py-20 md:py-32"> <div class="flex items-center gap-2 mb-6 bg-gray px-4 py-2 rounded-full"> <span class="text-accent text-xl tracking-widest">★★★★★</span> <span class="text-sm font-medium text-black">Trusted by 8+ high-ticket businesses across multiple industries</span> </div> <h1 class="text-5xl md:text-7xl font-bold leading-tight mb-8 max-w-4xl tracking-tight">
Stop Losing Leads <br class="hidden md:block"> You Already Paid For
</h1> <p class="text-xl md:text-2xl font-normal leading-relaxed mb-10 max-w-3xl text-zinc-600">
We install a 60-second response and follow up system that qualifies, books, and recovers appointments on autopilot. Your first system goes live in 7 days.
</p> <div class="flex flex-col items-center gap-4"> <a href="#audit" class="px-10 py-5 bg-accent hover:bg-black rounded-2xl text-white transition-all transform hover:scale-105 text-xl font-medium shadow-xl">
Get Your Lost Lead Audit &rarr;
</a> <p class="text-sm font-medium text-zinc-500 mt-2">Free. Takes 2 minutes. See exactly how much revenue you're leaking.</p> </div> </div> ` })}`;
}, "/Users/vpugni7/Desktop/agenty-landing/src/components/sections/Hero.astro", void 0);

const $$Metrics = createComponent(($$result, $$props, $$slots) => {
  const metrics = [
    { value: "<60s", label: "Average Lead Response Time" },
    { value: "2.5\xD7", label: "More Booked Appointments" },
    { value: "7 Days", label: "From Signup to Fully Live" }
  ];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "metrics" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-black rounded-3xl py-12 px-8 mb-20 text-white shadow-2xl"> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-zinc-700"> ${metrics.map((metric) => renderTemplate`<div class="px-4 py-4 md:py-0 flex flex-col items-center justify-center"> <h2 class="text-5xl md:text-6xl font-bold text-accent mb-4 tracking-tight">${metric.value}</h2> <p class="text-lg md:text-xl text-zinc-300 font-medium max-w-xs">${metric.label}</p> </div>`)} </div> </div> ` })}`;
}, "/Users/vpugni7/Desktop/agenty-landing/src/components/sections/Metrics.astro", void 0);

const $$Comparison = createComponent(($$result, $$props, $$slots) => {
  const oldWay = [
    "Leads wait hours (sometimes days) for a callback",
    "Follow up is manual and drops off after one or two attempts",
    "No shows stack up with zero recovery process",
    "Your team wastes time chasing people who were never qualified",
    "Old leads sit in the CRM collecting dust, never touched again"
  ];
  const newWay = [
    "Every lead gets a response in under 60 seconds, 24/7",
    "AI powered follow up runs across SMS, email, voice, and DMs",
    "Automated reminders, confirmations, and no show recovery sequences",
    "Only qualified, booked appointments land on your calendar",
    "Dead databases get reactivated and turned back into revenue"
  ];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "comparison" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-[140px] mb-5"> <div class="mb-4"> <span class="accenthead inline-block uppercase tracking-wider font-bold text-sm">The Real Problem</span> </div> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "You Don't Have a Lead Problem. You Have a Speed Problem.", "description": "" })} <div class="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10"> <!-- Old Way --> <div class="bg-gray p-8 md:p-12 sm:rounded-[45px] shadow-sm border border-zinc-200"> <h3 class="text-3xl font-medium mb-2">Without a Speed to Lead System</h3> <p class="text-zinc-600 mb-8 font-medium">What most businesses are doing right now</p> <ul class="space-y-6"> ${oldWay.map((point) => renderTemplate`<li class="flex items-start gap-4"> <span class="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">✕</span> <span class="text-lg">${point}</span> </li>`)} </ul> </div> <!-- New Way --> <div class="bg-dark text-white p-8 md:p-12 sm:rounded-[45px] shadow-xl border border-zinc-800 lg:-translate-y-4"> <h3 class="text-3xl font-medium mb-2 text-accent">With the Full Speed to Lead Ecosystem</h3> <p class="text-zinc-400 mb-8 font-medium">What changes when speed and follow up are automated</p> <ul class="space-y-6"> ${newWay.map((point) => renderTemplate`<li class="flex items-start gap-4"> <span class="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-bold">✓</span> <span class="text-lg">${point}</span> </li>`)} </ul> </div> </div> </div> ` })}`;
}, "/Users/vpugni7/Desktop/agenty-landing/src/components/sections/Comparison.astro", void 0);

const $$Process = createComponent(($$result, $$props, $$slots) => {
  const steps = [
    {
      number: "01",
      title: "Lost Lead Audit",
      description: "We analyze your current lead flow, response times, show rates, and follow up gaps. You see exactly how much revenue is slipping through the cracks, broken down by channel and stage. No cost, no commitment."
    },
    {
      number: "02",
      title: "Custom System Build",
      description: "We design and install your complete speed to lead ecosystem: AI agents, booking flows, nurture sequences, and no show recovery. Everything is tailored to your business, your CRM, and your channels."
    },
    {
      number: "03",
      title: "Go Live & Optimize",
      description: "Your system launches within 7 days. We monitor performance and optimize conversion rates weekly. As your lead volume grows, we scale with you. You focus on what you do best: closing."
    }
  ];
  const description = "Three Steps. Seven Days. More Appointments.";
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "how-it-works" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-[140px]"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "How It Works", "description": description })} <div class="grid lg:grid-cols-3 gap-8 mt-14"> ${steps.map((step) => renderTemplate`<div class="flex flex-col border-t-2 border-black pt-8"> <span class="text-6xl font-medium mb-6 text-accent">${step.number}</span> <h3 class="text-3xl font-medium mb-4">${step.title}</h3> <p class="text-lg text-zinc-600">${step.description}</p> </div>`)} </div> </div> ` })}`;
}, "/Users/vpugni7/Desktop/agenty-landing/src/components/sections/Process.astro", void 0);

const $$Benefits = createComponent(($$result, $$props, $$slots) => {
  const benefits = [
    {
      title: "24/7 Coverage, Zero Payroll",
      description: "Your AI agents never sleep, never call in sick, and never forget a follow up. Every lead gets the same fast, consistent experience whether they come in at 2am or 2pm. No hiring. No training. No turnover.",
      icon: "\u23F0"
    },
    {
      title: "Plugs Into Your Existing Stack",
      description: "Works with your current CRM, calendar, and ad platforms. We don't rip out what already works. We layer on top and make everything convert better. GoHighLevel, HubSpot, Salesforce, and more.",
      icon: "\u{1F517}"
    },
    {
      title: "Done For You, Live in 7 Days",
      description: "We build, configure, and launch everything. Your team doesn't need to learn new software or change their daily workflow. You just show up to more qualified appointments. If we're not live in 7 days, you don't pay month one.",
      icon: "\u{1F680}"
    }
  ];
  const description = "Built for Revenue, Not Just Efficiency";
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "benefits" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-[140px] mb-5"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "Why It Works", "description": description })} <div class="grid lg:grid-cols-3 gap-10 mt-14"> ${benefits.map((benefit, index) => renderTemplate`<div${addAttribute(`p-10 sm:p-12 sm:rounded-[45px] border border-zinc-200 shadow-sm flex flex-col items-start ${index === 1 ? "bg-dark text-white border-zinc-800" : "bg-gray text-black"}`, "class")}> <span class="text-6xl mb-8">${benefit.icon}</span> <h3${addAttribute(`text-2xl font-medium mb-4 ${index === 1 ? "text-accent" : ""}`, "class")}>${benefit.title}</h3> <p${addAttribute(`text-lg ${index === 1 ? "text-zinc-300" : "text-zinc-600"}`, "class")}>${benefit.description}</p> </div>`)} </div> </div> ` })}`;
}, "/Users/vpugni7/Desktop/agenty-landing/src/components/sections/Benefits.astro", void 0);

const $$Astro = createAstro("https://positivustheme.vercel.app");
const $$AccordionItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AccordionItem;
  const { index, title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="accordion__item" class="accordion__item group h-[160px] bg-[#F3F3F3] overflow-hidden w-full transition-all duration-500 mb-[30px] rounded-[45px] border border-dark shadow-[0px_5px_0px_#191a23]" data-astro-cid-kq6n5brs> <button class="accordion__toggle w-full h-[160px] flex items-center justify-between p-[60px] cursor-pointer"${addAttribute(`${title} accordion__item menu button`, "id")} aria-expanded="false"${addAttribute(`${title} accordion__item menu content`, "aria-controls")} data-astro-cid-kq6n5brs> <div class="flex items-center gap-[25px]" data-astro-cid-kq6n5brs> <span class="hidden sm:block sm:text-6xl" data-astro-cid-kq6n5brs>0${index}</span> ${title} </div> <div class="bg-gray w-[58px] h-[58px] flex justify-center items-center rounded-full border border-dark" data-astro-cid-kq6n5brs> <div class="accordion__icon h-10 w-10 transition-transform duration-300 flex justify-center items-center relative" aria-hidden="true" data-astro-cid-kq6n5brs></div> </div> </button> <div${addAttribute(`${title} accordion__item menu content`, "id")}${addAttribute(`${title} accordion__item menu button `, "aria-labelledby")} class="accordion__content px-[60px]" data-astro-cid-kq6n5brs> <div class="w-full h-[2px] bg-black" data-astro-cid-kq6n5brs></div> <p class="prose mb-4 mt-1 max-w-full pt-5 pb-[60px] transition-[height]" data-astro-cid-kq6n5brs> ${description} </p> </div> </div>  ${renderScript($$result, "/Users/vpugni7/Desktop/agenty-landing/src/components/ui/AccordionItem.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/vpugni7/Desktop/agenty-landing/src/components/ui/AccordionItem.astro", void 0);

const $$FAQ = createComponent(($$result, $$props, $$slots) => {
  const faqs = [
    {
      index: 1,
      title: "Will this work with my CRM?",
      description: "Yes. We integrate with all major CRMs including GoHighLevel, HubSpot, Salesforce, and many others. If you use a custom or niche platform, we assess compatibility during the audit and find the best integration path. Most setups require zero migration."
    },
    {
      index: 2,
      title: "Does this replace my sales team?",
      description: "No. This system creates more qualified conversations for your team to close. It handles the speed, follow up, and booking layer so your salespeople spend 100% of their time on what matters: closing deals with people who actually show up."
    },
    {
      index: 3,
      title: "What if we already have automations in place?",
      description: "Most businesses have some form of follow up, but very few respond within 60 seconds or follow up persistently across every channel. We audit what you have, keep what works, and fill the gaps that are costing you booked appointments."
    },
    {
      index: 4,
      title: "How quickly can we expect results?",
      description: "Your system goes live within 7 days of onboarding. Most businesses see a measurable increase in booked appointments within the first two weeks. The full impact compounds over time as nurture sequences mature and the AI learns your audience."
    },
    {
      index: 5,
      title: "What types of businesses is this for?",
      description: "We work with high-ticket, appointment-based businesses across many industries: solar, insurance, real estate, home services, financial advisors, agencies, med spas, and more. If you sell something worth $10k+ (or have strong LTV) and rely on booked calls to close, this was built for you."
    },
    {
      index: 6,
      title: "What if our close rate is low?",
      description: "We require a minimum 30% close rate on appointments that actually happen. If you're below that, we offer a sales optimization add-on. Our system fills your calendar; your team needs to be able to convert when they get on the phone."
    }
  ];
  const description = "Got Questions? We've Got Answers.";
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "faq" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-[140px] mb-20"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "Common Questions", "description": description })} <div class="mt-14"> ${faqs.map((faq) => {
    return renderTemplate`${renderComponent($$result2, "AccordionItem", $$AccordionItem, { "index": faq.index, "title": faq.title, "description": faq.description })}`;
  })} </div> </div> ` })}`;
}, "/Users/vpugni7/Desktop/agenty-landing/src/components/sections/FAQ.astro", void 0);

const $$SwiperSlider = createComponent(($$result, $$props, $$slots) => {
  const Testimonials = [
    {
      "comment": "We were losing leads for months before realizing speed was the issue. Within the first week of going live, our booked appointments jumped significantly. The ROI was obvious from day one.",
      "name": "Solar Company Owner",
      "role": "Residential Solar"
    },
    {
      "comment": "Our response time went from hours to under a minute. The no show rate dropped, the pipeline filled up, and my sales team actually has qualified conversations now instead of chasing unresponsive contacts.",
      "name": "Insurance Agency Director",
      "role": "High Ticket Insurance"
    },
    {
      "comment": "We had over 8,000 old leads sitting in our CRM doing nothing. The reactivation campaign alone generated dozens of booked appointments in the first 30 days. Revenue we had completely written off.",
      "name": "Real Estate Team Lead",
      "role": "Luxury Real Estate"
    }
  ];
  const processedTestimonials = Testimonials.map((item, index, array) => ({
    ...item,
    index: index + 1,
    length: array.length
  }));
  return renderTemplate`${maybeRenderHead()}<div id="ProjectSlider" class="swiper mt-10"${addAttribute({
    "--swiper-pagination-color": "var(--accent)",
    "--swiper-pagination-bullet-inactive-color": "#fff",
    "--swiper-pagination-bullet-inactive-opacity": "1",
    "--swiper-pagination-bullet-size": "19px",
    "--swiper-pagination-bullet-horizontal-gap": "10px"
  }, "style")} data-astro-cid-klye6o2m> <div class="swiper-wrapper mt-[84px] mb-[124px]" data-cursor="swipe" data-astro-cid-klye6o2m> ${processedTestimonials.map((item) => renderTemplate`<div class="swiper-slide text-gray flex flex-col" role="group"${addAttribute(`${item.index} / ${item.length}`, "aria-label")} data-astro-cid-klye6o2m> <div class="flex flex-col justify-center items-center py-[48px] px-6 sm:px-[52px]" data-astro-cid-klye6o2m> <p class="bubble" data-astro-cid-klye6o2m>
"${item.comment}"
</p> </div> <div class="w-full px-10 sm:px-20 " data-astro-cid-klye6o2m> <div class="text-accent font-medium mb-1" data-astro-cid-klye6o2m>${item.name}</div> <div class="text-white text-sm opacity-80" data-astro-cid-klye6o2m>${item.role}</div> </div> </div>`)} </div> <div class="flex justify-around lg:justify-center mb-[68px] lg:gap-[189px]" data-astro-cid-klye6o2m> <div class="swiper-button-prev w-7 h-7 sm:w-10 sm:h-10" data-astro-cid-klye6o2m> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-astro-cid-klye6o2m><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> <path fill="#ffffff" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" data-astro-cid-klye6o2m></path></svg> </div> <div class="swiper-pagination" data-astro-cid-klye6o2m></div> <div class="swiper-button-next w-7 h-7 sm:w-10 sm:h-10 rotate-180" data-astro-cid-klye6o2m> <svg xmlns="http://www.w3.org/2000/svg " viewBox="0 0 448 512" data-astro-cid-klye6o2m> <path fill="#ffffff" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" data-astro-cid-klye6o2m></path></svg> </div> </div> </div> ${renderScript($$result, "/Users/vpugni7/Desktop/agenty-landing/src/components/ui/SwiperSlider.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/vpugni7/Desktop/agenty-landing/src/components/ui/SwiperSlider.astro", void 0);

const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "testimonials" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-20"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "Results", "description": "What Happens When Speed Meets Follow Up" })} <div class="rounded-[45px] bg-dark mb-[150px] text-gray"> ${renderComponent($$result2, "SwiperSlider", $$SwiperSlider, {})} </div> </div> ` })}`;
}, "/Users/vpugni7/Desktop/agenty-landing/src/components/sections/Testimonials.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Full Speed to Lead Ecosystem | 60 Second Lead Response & Booking System", "description": "We install a 60 second lead response and follow up system that books qualified appointments on autopilot. Live in 7 days. Built for high ticket, appointment based businesses." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Metrics", $$Metrics, {})} ${renderComponent($$result2, "Sponsors", $$Sponsors, {})} ${renderComponent($$result2, "Comparison", $$Comparison, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Benefits", $$Benefits, {})} ${renderComponent($$result2, "Process", $$Process, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} ${renderComponent($$result2, "FAQ", $$FAQ, {})} ` })}`;
}, "/Users/vpugni7/Desktop/agenty-landing/src/pages/index.astro", void 0);

const $$file = "/Users/vpugni7/Desktop/agenty-landing/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
