import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from './astro/server_D_aZ30lb.mjs';
import { $ as $$Card } from './Card_stLMCmLj.mjs';

const $$Astro = createAstro("https://positivustheme.vercel.app");
const $$ServiceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const { index, title, description, icon } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "isUnderline": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div${addAttribute(`h-full w-full p-8 sm:p-12 rounded-[45px] ${index % 3 === 1 ? "bg-gray text-black" : index % 3 === 2 ? "bg-accent text-white" : "bg-dark text-white"}`, "class")}> <div class="flex flex-col h-full justify-between gap-8"> <div> <div class="flex items-center gap-4 mb-6"> <span class="text-5xl">${icon}</span> </div> <h3 class="text-3xl font-medium mb-4">${title}</h3> <p${addAttribute(`text-lg font-medium leading-relaxed ${index % 3 === 2 || index % 3 === 0 ? "text-zinc-200" : "text-zinc-600"}`, "class")}> ${description} </p> </div> </div> </div> ` })}`;
}, "/Users/vpugni7/Desktop/agenty-landing/src/components/ui/ServiceCard.astro", void 0);

export { $$ServiceCard as $ };
