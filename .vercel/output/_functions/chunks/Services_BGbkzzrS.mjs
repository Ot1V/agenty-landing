import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, n as renderSlot, a as renderTemplate, r as renderComponent } from './astro/server_D_aZ30lb.mjs';
import { $ as $$ServiceCard } from './ServiceCard_BB3_1mIc.mjs';

const $$Astro$1 = createAstro("https://positivustheme.vercel.app");
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Section;
  const { id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")} class="px-5 flex justify-center overflow-hidden lg:block"> <div class="w-full max-w-[1280px] mx-auto"> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "/Users/vpugni7/Desktop/agenty-landing/src/components/sections/Section.astro", void 0);

const $$Sponsors = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "sponsors" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center py-10"> <p class="text-xl font-medium text-zinc-500 mb-10 text-center">Integrates with the tools you already use</p> <div class="flex flex-wrap justify-center items-center gap-10 md:gap-x-20 md:gap-y-10 opacity-70"> <span class="text-2xl md:text-3xl font-bold tracking-tight">GoHighLevel</span> <span class="text-2xl md:text-3xl font-bold tracking-tight">HubSpot</span> <span class="text-2xl md:text-3xl font-bold tracking-tight">Salesforce</span> <span class="text-2xl md:text-3xl font-bold tracking-tight">Calendly</span> <span class="text-2xl md:text-3xl font-bold tracking-tight">Twilio</span> </div> </div> ` })}`;
}, "/Users/vpugni7/Desktop/agenty-landing/src/components/sections/Sponsors.astro", void 0);

const $$Astro = createAstro("https://positivustheme.vercel.app");
const $$SectionTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SectionTitle;
  const { sectionTitle, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-center gap-10 mb-20 sm:flex-row"> <h2 class="greenhead text-center sm:text-left text-3xl sm:text-4xl">${sectionTitle}</h2> <p class="w-auto text-center sm:text-left sm:w-[580px]"> ${description} </p> </div>`;
}, "/Users/vpugni7/Desktop/agenty-landing/src/components/ui/SectionTitle.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const cards = [
    {
      index: 1,
      title: "Instant SMS & WhatsApp Agent",
      description: "Engages every new lead within seconds via text. Qualifies them, answers their questions, and books directly into your calendar. Works around the clock so your team doesn't have to.",
      icon: "\u{1F4AC}"
    },
    {
      index: 2,
      title: "AI Voice Agent",
      description: "Catches every missed call and follows up with inbound leads by phone. Natural, human sounding conversations that qualify and schedule without your team lifting a finger.",
      icon: "\u{1F4DE}"
    },
    {
      index: 3,
      title: "Website Chat & Social DMs",
      description: "Converts website visitors and Instagram or Facebook inquiries into booked appointments before they bounce to a competitor. Instant replies on every channel they use.",
      icon: "\u{1F310}"
    },
    {
      index: 4,
      title: "Database Reactivation Engine",
      description: "Turns your old, dead leads into revenue. AI re-engages thousands of contacts you already paid to acquire and books the ones who are still interested. Revenue you wrote off, recovered.",
      icon: "\u{1F504}"
    }
  ];
  const description = "Every channel covered. Every lead followed up. Every appointment confirmed.";
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "solutions" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-[140px] mb-5"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "What We Install", "description": description })} <div class="mb-12 mt-4 text-center md:text-left"> <h2 class="text-4xl md:text-5xl font-medium tracking-tight">A Complete Lead Conversion Ecosystem, <br class="hidden lg:block">Not Just Another Bot</h2> </div> <div class="grid lg:grid-cols-2 gap-10"> ${cards.map((card) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "index": card.index, "title": card.title, "description": card.description, "icon": card.icon })}`)} </div> </div> ` })}`;
}, "/Users/vpugni7/Desktop/agenty-landing/src/components/sections/Services.astro", void 0);

export { $$Sponsors as $, $$Services as a, $$Section as b, $$SectionTitle as c };
