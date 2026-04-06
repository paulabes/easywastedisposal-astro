import type { ServiceMeta, ServiceSlug } from './locations.ts';
import type { AreaContent } from './area-content.ts';

export interface LocationServiceContent {
  heroDescription: string;
  localContext: string[];
  localBenefits: string[];
}

const serviceAngles: Record<ServiceSlug, {
  heroTemplate: (area: string, postcodes: string, price: string) => string;
  contextTemplates: (area: string, postcodes: string, areaContent: AreaContent) => string[];
  benefitTemplates: (area: string, postcodes: string) => string[];
}> = {
  'rubbish-removal': {
    heroTemplate: (area, postcodes, price) =>
      `Professional rubbish removal in ${area} ${postcodes}. Bags, bins, and general rubbish collected and responsibly disposed of from ${price}. Same-day collection available across all ${postcodes} postcodes.`,
    contextTemplates: (area, postcodes, ac) => [
      `Our rubbish removal service in ${area} covers everything from black bags and bin overflow to garage clear-outs and loft declutters. We collect from any room or floor - you don't need to bring anything to the kerb.`,
      `${ac.mainContent[0]}`,
      `${ac.localInfo} For rubbish removal, we typically arrive within 2 hours of booking and can clear most jobs in under 30 minutes.`,
    ],
    benefitTemplates: (area, postcodes) => [
      `Same-day rubbish removal in ${area}`,
      `Faster and cheaper than ${area} council bulky waste service`,
      `We collect from any room or floor in ${postcodes}`,
      `98% of your household waste recycled or reused`,
    ],
  },
  'commercial-waste-disposal': {
    heroTemplate: (area, postcodes, price) =>
      `Commercial waste disposal for businesses in ${area} ${postcodes}. Offices, shops, restaurants, and trade premises - regular or one-off collections from ${price} with full compliance documentation.`,
    contextTemplates: (area, postcodes, ac) => [
      `We provide commercial waste collection for businesses across ${area}, from small shops to large office buildings. Every collection comes with a waste transfer note and full duty of care documentation to keep your business compliant.`,
      `${ac.mainContent[1] || ac.mainContent[0]}`,
      `Our flexible scheduling means we can collect outside your trading hours, early mornings, or evenings. We work with restaurants, offices, retail units, and construction firms throughout ${postcodes}.`,
    ],
    benefitTemplates: (area, postcodes) => [
      `Duty of care documentation for every collection in ${area}`,
      `Flexible scheduling around your business hours`,
      `Regular contracts available for ${area} businesses`,
      `Competitive commercial rates across ${postcodes}`,
    ],
  },
  'furniture-bulky-item-removal': {
    heroTemplate: (area, postcodes, price) =>
      `Furniture and bulky item removal in ${area} ${postcodes}. Sofas, mattresses, wardrobes, and other large items collected from any room or floor from ${price}. No heavy lifting required.`,
    contextTemplates: (area, postcodes, ac) => [
      `Need a sofa, mattress, or wardrobe removed in ${area}? We collect bulky furniture and large items from any room or floor - including upstairs bedrooms and basements. You don't need to move a thing, our team handles all the heavy lifting.`,
      `${ac.mainContent[0]}`,
      `${ac.localInfo} For bulky items, we're typically much faster and cheaper than waiting for the council's collection service.`,
    ],
    benefitTemplates: (area, postcodes) => [
      `Collected from any room or floor in ${area}`,
      `Faster than ${area} council bulky waste collection`,
      `Single items or full loads across ${postcodes}`,
      `Sofas, beds, wardrobes, and all large furniture`,
    ],
  },
  'garden-waste-removal': {
    heroTemplate: (area, postcodes, price) =>
      `Garden and green waste removal in ${area} ${postcodes}. Branches, soil, turf, hedge cuttings, old fencing, and garden furniture cleared from ${price}. All green waste composted and recycled.`,
    contextTemplates: (area, postcodes, ac) => [
      `Whether you've had a tree trimmed, pulled up a lawn, or cleared out an overgrown garden in ${area}, we'll take all your garden and green waste away. We handle branches, soil, turf, hedge cuttings, old fencing, decking, and garden furniture.`,
      `${ac.mainContent[2] || ac.mainContent[0]}`,
      `All garden and green waste from ${area} is taken for composting or recycling - nothing goes to landfill. We can also remove old sheds, greenhouses, and garden structures.`,
    ],
    benefitTemplates: (area, postcodes) => [
      `All garden and green waste from ${area} composted or recycled`,
      `Old sheds, fencing, and decking removed from ${postcodes}`,
      `Soil, turf, and hardcore accepted`,
      `Year-round garden and green waste clearance in ${area}`,
    ],
  },
  'builders-waste-removal': {
    heroTemplate: (area, postcodes, price) =>
      `Builders waste removal in ${area} ${postcodes}. Rubble, timber, plasterboard, tiles, and all construction debris collected from site from ${price}. Faster and cheaper than skip hire.`,
    contextTemplates: (area, postcodes, ac) => [
      `Renovating a property in ${area}? We remove rubble, timber, plasterboard, tiles, bricks, old kitchens, bathrooms, and all construction debris. No need to hire a skip or apply for a council permit.`,
      `${ac.mainContent[0]}`,
      `We're the go-to builders waste service for tradespeople and homeowners across ${postcodes}. Our team arrives at your site, loads everything, and takes it away - typically within 2 hours of booking.`,
    ],
    benefitTemplates: (area, postcodes) => [
      `No skip permit needed in ${area}`,
      `Faster and cheaper than skip hire across ${postcodes}`,
      `We load everything - you carry on working`,
      `Ideal for renovations and refurbishments in ${area}`,
    ],
  },
  'house-clearance': {
    heroTemplate: (area, postcodes, price) =>
      `House clearance in ${area} ${postcodes}. Full or partial property clearances for moves, probate, renovations, or end-of-tenancy from ${price}. Sensitive, thorough, and professional.`,
    contextTemplates: (area, postcodes, ac) => [
      `We provide full and partial house clearances across ${area}, handling everything from single rooms to entire properties. Whether it's a probate clearance, end-of-tenancy, downsizing, or pre-renovation strip-out, we work sensitively and efficiently.`,
      `${ac.mainContent[0]}`,
      `Our house clearance team in ${area} removes all furniture, appliances, clothing, and personal effects. We can leave the property broom-clean and ready for sale, rental, or renovation.`,
    ],
    benefitTemplates: (area, postcodes) => [
      `Sensitive probate and bereavement clearances in ${area}`,
      `End-of-tenancy clear-outs across ${postcodes}`,
      `Broom-clean finish available`,
      `All items removed including furniture and appliances`,
    ],
  },
  'office-clearance': {
    heroTemplate: (area, postcodes, price) =>
      `Office clearance in ${area} ${postcodes}. Desks, chairs, IT equipment, partitions, and office furniture removed with minimal disruption from ${price}. Full compliance documentation provided.`,
    contextTemplates: (area, postcodes, ac) => [
      `Moving office, downsizing, or refitting your workspace in ${area}? We remove desks, chairs, IT equipment, filing cabinets, partitions, and all office furniture. We work around your business hours to minimise disruption.`,
      `${ac.mainContent[1] || ac.mainContent[0]}`,
      `Every office clearance in ${area} comes with full waste transfer notes and duty of care documentation. We handle WEEE-compliant disposal of IT equipment and electronics.`,
    ],
    benefitTemplates: (area, postcodes) => [
      `Out-of-hours clearances available in ${area}`,
      `WEEE-compliant IT equipment disposal`,
      `Full duty of care documentation provided`,
      `Minimal disruption to your ${area} business`,
    ],
  },
  'appliance-disposal': {
    heroTemplate: (area, postcodes, price) =>
      `Appliance disposal in ${area} ${postcodes}. Fridges, freezers, washing machines, tumble dryers, dishwashers, and all WEEE items collected and responsibly recycled from ${price}. Same-day collection available.`,
    contextTemplates: (area, postcodes, ac) => [
      `Need an old fridge, washing machine, or cooker removed in ${area}? We collect all household appliances from any room or floor - including basements and upper floors. Our team disconnects and removes the appliance safely, so you don't have to worry about heavy lifting.`,
      `${ac.mainContent[0]}`,
      `All appliances collected from ${area} are disposed of in full compliance with WEEE regulations. Refrigerants and hazardous components are handled by licensed facilities, and materials are recycled wherever possible.`,
    ],
    benefitTemplates: (area, postcodes) => [
      `WEEE-compliant appliance disposal in ${area}`,
      `Fridges, freezers, and washing machines collected from any floor`,
      `Safe disconnection and removal across ${postcodes}`,
      `Same-day appliance collection available in ${area}`,
    ],
  },
  'wait-and-load': {
    heroTemplate: (area, postcodes, price) =>
      `Wait and load waste collection in ${area} ${postcodes}. Our vehicle waits on-site while you load at your own pace from ${price}. Perfect for tradespeople, clear-outs, and renovation projects. No skip permit needed.`,
    contextTemplates: (area, postcodes, ac) => [
      `Our wait and load service in ${area} is the flexible alternative to skip hire. We bring the vehicle to your door, wait while you load your waste, and take it all away - no permits, no waiting days for collection, and no skip blocking your driveway.`,
      `${ac.mainContent[0]}`,
      `Ideal for tradespeople working in ${area} who generate waste throughout the day. You load at your own pace, and we dispose of everything responsibly. Available for same-day bookings across all ${postcodes} postcodes.`,
    ],
    benefitTemplates: (area, postcodes) => [
      `No skip permit required in ${area}`,
      `Load at your own pace - we wait on-site`,
      `Perfect for tradespeople and builders across ${postcodes}`,
      `Same-day availability throughout ${area}`,
    ],
  },
};

export function getLocationServiceContent(
  areaSlug: string,
  areaName: string,
  postcodes: string[],
  service: ServiceMeta,
  areaContent: AreaContent | null,
): LocationServiceContent {
  const postcodesStr = postcodes.join(', ');
  const angle = serviceAngles[service.slug];

  const fallbackAreaContent: AreaContent = areaContent || {
    heroDescription: '',
    mainContent: [`${areaName} is a popular area in London with a mix of residential and commercial properties.`],
    localInfo: `We offer same-day collection across all ${postcodesStr} postcodes.`,
    whyLocal: [],
    nearbyNote: '',
  };

  return {
    heroDescription: angle.heroTemplate(areaName, postcodesStr, service.priceFrom),
    localContext: angle.contextTemplates(areaName, postcodesStr, fallbackAreaContent),
    localBenefits: angle.benefitTemplates(areaName, postcodesStr),
  };
}
