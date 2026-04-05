export type ServiceSlug =
  | 'rubbish-removal'
  | 'furniture-bulky-item-removal'
  | 'garden-waste-removal'
  | 'builders-waste-removal'
  | 'house-clearance'
  | 'office-clearance'
  | 'commercial-waste-disposal'
  | 'appliance-disposal'
  | 'wait-and-load';

export interface ServiceMeta {
  name: string;
  slug: ServiceSlug;
  shortName: string;
  tagline: string;
  description: string;
  features: string[];
  priceFrom: string;
  extendedContent?: {
    imageAlt: string;
    heading: string;
    paragraphs: string[];
  };
  faqs?: { question: string; answer: string }[];
}

export interface Area {
  slug: string;
  name: string;
  region: 'haringey' | 'central-london' | 'north-london';
  postcodes: string[];
  description: string;
  services: ServiceSlug[];
}

export interface Region {
  slug: string;
  name: string;
  areas: Area[];
}

export const servicesMeta: Record<ServiceSlug, ServiceMeta> = {
  'rubbish-removal': {
    name: 'Rubbish Removal',
    slug: 'rubbish-removal',
    shortName: 'Rubbish Removal',
    tagline: 'Same-day rubbish removal from any property',
    description: 'Fast, affordable rubbish removal for homes and businesses. Bags, bins, junk, and general waste collected and responsibly disposed of. Same-day and next-day collection available.',
    features: [
      'Same-day and next-day collection available',
      'All general rubbish and junk accepted',
      'We do all the loading and heavy lifting',
      '98% of waste recycled or diverted from landfill',
      'No hidden fees - upfront, transparent pricing',
      'Waste transfer notes provided for every job',
    ],
    priceFrom: '£40',
    extendedContent: {
      imageAlt: 'Easy Waste Disposal team loading rubbish into van',
      heading: 'How our rubbish removal service works',
      paragraphs: [
        'Whether you have a few bags of household junk or an entire property full of unwanted items, our rubbish removal service is designed to make the process as simple as possible. You tell us what needs to go, we give you an upfront price, and our two-person crew arrives at a time that suits you.',
        'We handle all the loading and heavy lifting - you don\'t need to move anything to the kerb or bag it up first. Our team will collect items from any room, any floor, and load them straight into our vehicle. Most jobs are completed within 30 minutes.',
        'Every item we collect is taken to a licensed waste transfer station where it is sorted for recycling. We consistently achieve a recycling rate well above the industry average, with the vast majority of waste diverted from landfill. You\'ll receive a waste transfer note for every collection as proof of responsible disposal.',
      ],
    },
    faqs: [
      { question: "How much does rubbish removal cost in London?", answer: "Our rubbish removal service starts from just £40. The final price depends on the volume of waste and access. We provide an upfront, no-obligation quote before we start so there are no surprises." },
      { question: "Can you collect rubbish the same day I call?", answer: "Yes, we offer same-day rubbish collection across London. Call us on 07342 877 759 before midday and we can usually be with you within a few hours." },
      { question: "Are you a licensed waste carrier?", answer: "Yes, we are fully licensed by the Environment Agency under licence number CBDU429337. We provide a waste transfer note for every collection as proof of legal, responsible disposal." },
      { question: "What types of rubbish do you collect?", answer: "We collect all general household and commercial rubbish including bags, boxes, old furniture, broken items, packaging, and general junk. The only items we cannot accept are hazardous waste such as asbestos, chemicals, and clinical waste." },
      { question: "Do I need to bag up the rubbish before you arrive?", answer: "No, you do not need to bag anything up or move it to the kerb. Our two-person crew will collect items from any room and any floor and load everything into our vehicle for you." },
    ],
  },
  'furniture-bulky-item-removal': {
    name: 'Furniture & Bulky Item Removal',
    slug: 'furniture-bulky-item-removal',
    shortName: 'Furniture Removal',
    tagline: 'Sofas, beds, and bulky items collected same-day',
    description: 'Sofas, mattresses, beds, wardrobes, fridges, washing machines, and other large items collected from any room or floor. Same-day collection - we handle all the heavy lifting.',
    features: [
      'Same-day and next-day collection available',
      'Sofas, mattresses, beds, and white goods',
      'Collected from any room or floor - even upstairs',
      'Single items or full loads welcome',
      'Cheaper and faster than council bulky waste service',
      'Fridges, freezers, and appliances handled responsibly',
    ],
    priceFrom: '£40',
    extendedContent: {
      imageAlt: 'Bulky furniture being collected by Easy Waste Disposal',
      heading: 'Bulky item collection made easy',
      paragraphs: [
        'Getting rid of large, heavy furniture can be a real headache. Council bulky waste collections often have long waiting times and limited slots. With our service, you can book a same-day or next-day collection and have your unwanted furniture gone within hours.',
        'We collect sofas, beds, mattresses, wardrobes, dining tables, desks, chest of drawers, and any other large items you need removed. Our two-person crew will collect from any room and any floor - including basements and top-floor flats with no lift access.',
        'Single items start from just £40, making us a faster and more affordable option than most council services. We also accept white goods including fridges, freezers, and washing machines, all disposed of in full compliance with WEEE regulations.',
      ],
    },
    faqs: [
      { question: "How much does it cost to have a sofa removed?", answer: "Sofa removal starts from £40 for a single item. Larger sofas such as corner units or sofa beds may cost slightly more. We give you an exact price before we start with no hidden fees." },
      { question: "Can you remove furniture from upstairs rooms?", answer: "Yes, our two-person crew will collect furniture from any room and any floor, including top-floor flats with no lift access. We handle all the heavy lifting so you do not need to move anything yourself." },
      { question: "Is your service faster than council bulky waste collection?", answer: "Yes, council bulky waste collections in London often have wait times of two weeks or more. We offer same-day and next-day collection, so your furniture can be gone within hours of booking." },
      { question: "What bulky items do you accept?", answer: "We collect sofas, beds, mattresses, wardrobes, dining tables, desks, chest of drawers, bookcases, and all large household items. We also accept white goods like fridges, washing machines, and freezers." },
      { question: "Do you recycle old furniture?", answer: "Yes, all items are taken to a licensed waste transfer station where they are sorted. Reusable furniture is donated where possible and the rest is recycled. We divert 98% of waste from landfill." },
    ],
  },
  'garden-waste-removal': {
    name: 'Garden & Green Waste Removal',
    slug: 'garden-waste-removal',
    shortName: 'Garden Waste',
    tagline: 'Garden and green waste cleared and recycled, same-day',
    description: 'Garden waste and green waste removal across London. Branches, soil, turf, hedge cuttings, old fencing, garden furniture, and all types of green waste collected and taken for composting or recycling. Same-day service available.',
    features: [
      'Same-day and next-day garden clearance',
      'All garden and green waste accepted',
      'Soil, turf, branches, and hardcore removed',
      'Old sheds, fencing, and decking removed',
      'Garden furniture and pots cleared',
      'All green waste composted or recycled',
    ],
    priceFrom: '£50',
    extendedContent: {
      imageAlt: 'Garden waste and green waste being cleared from a London garden',
      heading: 'Garden and green waste cleared responsibly',
      paragraphs: [
        'From seasonal garden maintenance to full garden clearances, we remove all types of garden waste and green waste quickly and affordably. Whether you\'ve had trees pruned, hedges trimmed, or you\'re clearing an overgrown garden, our team will handle everything.',
        'We accept all green waste including branches, hedge cuttings, grass, leaves, weeds, soil, turf, and plant pots. We also remove larger items like old sheds, fencing panels, decking, trellises, greenhouses, and garden furniture - anything that needs to go.',
        'All garden and green waste is taken to a licensed facility for composting or recycling. Nothing goes to landfill. Our service is available year-round, so whether it\'s a spring clear-out or autumn leaf removal, we\'re ready when you are.',
      ],
    },
    faqs: [
      { question: "How much does garden waste removal cost?", answer: "Garden waste removal starts from £50. The price depends on the volume of waste. We provide a fixed quote before we begin so you know exactly what you will pay." },
      { question: "Do you remove soil, turf, and rubble from gardens?", answer: "Yes, we remove all types of garden waste including soil, turf, rubble, stones, branches, hedge cuttings, grass, leaves, and weeds. We also take away old sheds, fencing, decking, and garden furniture." },
      { question: "Can you clear an overgrown garden?", answer: "Yes, we handle full garden clearances for overgrown or neglected gardens. Our team will remove all green waste, debris, and unwanted items, leaving your garden clear and ready for landscaping." },
      { question: "What happens to the garden waste after collection?", answer: "All garden and green waste is taken to a licensed facility where it is composted or recycled. Nothing goes to landfill. You will receive a waste transfer note confirming responsible disposal." },
      { question: "Do you offer same-day garden waste collection?", answer: "Yes, same-day and next-day garden waste collection is available across London. Call us on 07342 877 759 to book a slot that suits you." },
    ],
  },
  'builders-waste-removal': {
    name: 'Builders Waste Removal',
    slug: 'builders-waste-removal',
    shortName: 'Builders Waste',
    tagline: 'Construction waste removed same-day - faster than skip hire',
    description: 'Rubble, timber, plasterboard, tiles, bricks, and all construction or renovation debris removed from site. Same-day collection - a faster, cheaper alternative to hiring a skip.',
    features: [
      'Same-day and next-day site clearance',
      'Rubble, timber, plasterboard, tiles, and bricks',
      'No skip permit required - we come to you',
      'Faster and cheaper than skip hire',
      'We load everything - you carry on working',
      'Suitable for any size project',
    ],
    priceFrom: '£60',
    extendedContent: {
      imageAlt: 'Construction rubble and builders waste being loaded for removal',
      heading: 'Construction and renovation waste removed fast',
      paragraphs: [
        'Builders waste can pile up quickly during renovations, refurbishments, and construction projects. Our same-day builders waste removal service means you don\'t need to hire a skip or wait for council collections. We come to your site, load everything, and take it away.',
        'We accept all types of construction waste including rubble, concrete, bricks, tiles, plasterboard, timber, metal, soil, and mixed demolition waste. Whether it\'s a bathroom refit, kitchen renovation, or a full property refurbishment, we can handle the volume.',
        'Unlike skip hire, you don\'t need a council permit, you don\'t lose a parking space, and you don\'t have to load it yourself. Our crew does all the heavy lifting while you carry on working. Most site clearances are completed within an hour.',
      ],
    },
    faqs: [
      { question: "How much does builders waste removal cost?", answer: "Builders waste removal starts from £60. The price depends on the volume of rubble, timber, or mixed construction waste. We provide an upfront quote so you know the cost before we start." },
      { question: "Is your service faster than hiring a skip?", answer: "Yes. Skip hire typically involves waiting days for delivery, applying for council permits, and then waiting again for collection. Our same-day service means we arrive, load everything, and take it away, often within an hour." },
      { question: "Do I need a council permit for your service?", answer: "No, you do not need a council skip permit. Our team comes to your property with our own vehicle, loads the waste, and removes it. There is no need to take up a parking space or apply for any permits." },
      { question: "What construction waste do you accept?", answer: "We accept all types of builders waste including rubble, concrete, bricks, tiles, plasterboard, timber, metal, soil, and mixed demolition waste. We cannot accept hazardous materials such as asbestos." },
      { question: "Can you clear a building site at the end of a project?", answer: "Yes, we regularly carry out full site clearances for builders and contractors at the end of renovations and construction projects. We are licensed by the Environment Agency under licence CBDU429337." },
    ],
  },
  'house-clearance': {
    name: 'House Clearance',
    slug: 'house-clearance',
    shortName: 'House Clearance',
    tagline: 'Next-day property clearances, handled with care',
    description: 'Full or partial house clearances for moves, probate, renovations, or end-of-tenancy. Next-day availability. We work sensitively and efficiently to clear your property completely.',
    features: [
      'Next-day clearances available',
      'Full and partial property clearances',
      'Probate and bereavement clearances',
      'End-of-tenancy clear-outs',
      'Broom-clean finish available',
      'Sensitive, professional, and discreet service',
    ],
    priceFrom: '£150',
    extendedContent: {
      imageAlt: 'House clearance in progress with items being removed from property',
      heading: 'Full and partial house clearances',
      paragraphs: [
        'Whether you\'re dealing with a probate property, preparing for a move, or clearing a rental at the end of a tenancy, our house clearance service takes the stress out of the process. We clear everything - furniture, appliances, clothing, personal items, and general household contents.',
        'Our team works sensitively and efficiently, understanding that house clearances often happen during difficult times. We can clear a single room or an entire property, from studio flats to large family homes. We\'ll work at your pace and keep you informed throughout.',
        'Once everything is removed, we can leave the property broom-clean and ready for sale, rental, or renovation. All items are sorted at a licensed facility - anything reusable is donated or recycled, and we provide full waste transfer documentation for your records.',
      ],
    },
    faqs: [
      { question: "How much does a house clearance cost in London?", answer: "House clearance starts from £150. The price depends on the size of the property and the volume of items to be removed. We offer free, no-obligation quotes and there are no hidden fees." },
      { question: "Do you handle probate house clearances?", answer: "Yes, we regularly carry out probate and bereavement house clearances. Our team works sensitively and at your pace, understanding that these situations can be difficult. We can arrange everything with solicitors or estate agents if needed." },
      { question: "How quickly can you clear a house?", answer: "We offer next-day house clearances across London. Most properties, from studio flats to three-bedroom houses, can be cleared in a single visit. Larger properties may require a second trip." },
      { question: "Can you leave the property broom-clean?", answer: "Yes, we offer a broom-clean finish so the property is left tidy and ready for sale, rental, or renovation. Just let us know when you book and we will include this in your quote." },
      { question: "What do you do with the items you remove?", answer: "All items are taken to a licensed waste transfer station. Reusable items are donated to charity where possible, and we recycle 98% of everything we collect. You receive a waste transfer note as proof of responsible disposal." },
    ],
  },
  'office-clearance': {
    name: 'Office Clearance',
    slug: 'office-clearance',
    shortName: 'Office Clearance',
    tagline: 'Office furniture and equipment cleared with minimal disruption',
    description: 'Desks, chairs, IT equipment, partitions, and office furniture removed with minimal disruption. Next-day and out-of-hours collections available. Full compliance documentation provided.',
    features: [
      'Next-day and out-of-hours clearances',
      'Desks, chairs, and office furniture removed',
      'IT equipment and electronics (WEEE compliant)',
      'Partitions and fixtures cleared',
      'Minimal disruption to your business',
      'Full duty of care documentation provided',
    ],
    priceFrom: '£150',
    extendedContent: {
      imageAlt: 'Office furniture and equipment being cleared from commercial premises',
      heading: 'Professional office clearance services',
      paragraphs: [
        'Relocating, downsizing, or refurbishing your office? Our office clearance service removes all unwanted furniture, equipment, and fixtures with minimal disruption to your working day. We offer next-day and out-of-hours collections so your team can carry on without interruption.',
        'We remove desks, chairs, filing cabinets, shelving, partitions, whiteboards, and all types of office furniture. IT equipment including monitors, printers, servers, and cabling is disposed of in full compliance with WEEE regulations, with certificates available on request.',
        'Every office clearance comes with full duty of care documentation, including waste transfer notes and disposal records. Whether you need a single floor cleared or an entire building emptied, we have the crew and vehicles to handle it efficiently.',
      ],
    },
    faqs: [
      { question: "How much does an office clearance cost?", answer: "Office clearance starts from £150. The cost depends on the size of the office and the volume of furniture and equipment to be removed. We provide a free, no-obligation quote before we begin." },
      { question: "Can you work outside of business hours?", answer: "Yes, we offer out-of-hours collections including evenings and weekends to minimise disruption to your business. Just let us know your preferred time when you book." },
      { question: "Do you dispose of IT equipment and electronics?", answer: "Yes, we dispose of all IT equipment including monitors, computers, printers, servers, and cabling in full compliance with WEEE regulations. Certificates of disposal are available on request." },
      { question: "Do you provide duty of care documentation?", answer: "Yes, every office clearance comes with full duty of care documentation including waste transfer notes and disposal records. This gives your business a complete audit trail for waste management compliance." },
      { question: "Are you licensed to carry commercial waste?", answer: "Yes, we hold Environment Agency waste carrier licence number CBDU429337. We are fully insured and provide documentation for every collection." },
    ],
  },
  'commercial-waste-disposal': {
    name: 'Commercial Waste Disposal',
    slug: 'commercial-waste-disposal',
    shortName: 'Commercial Waste',
    tagline: 'Reliable business waste management with same-day collection',
    description: 'Professional commercial waste collection for offices, shops, restaurants, and businesses of all sizes. Same-day and next-day collection. Regular or one-off with full compliance documentation.',
    features: [
      'Same-day and next-day business collections',
      'Offices, retail, restaurants, and hospitality',
      'Regular scheduled collections available',
      'Duty of care documentation provided',
      'Waste transfer notes for every collection',
      'Flexible scheduling around your trading hours',
    ],
    priceFrom: '£60',
    extendedContent: {
      imageAlt: 'Commercial waste being collected from a London business',
      heading: 'Waste management for London businesses',
      paragraphs: [
        'Every business produces waste, and every business has a legal duty of care to dispose of it responsibly. Our commercial waste disposal service gives you a reliable, compliant solution - whether you need a one-off clearance or regular scheduled collections.',
        'We work with offices, retail shops, restaurants, cafes, pubs, salons, gyms, and businesses of all sizes across London. Collections can be scheduled around your trading hours - early morning, evening, or weekend slots are all available to minimise disruption.',
        'All commercial collections come with full duty of care documentation including waste transfer notes, giving you a complete audit trail for your records. We\'re fully licensed by the Environment Agency and carry comprehensive public liability insurance.',
      ],
    },
    faqs: [
      { question: "How much does commercial waste disposal cost?", answer: "Commercial waste disposal starts from £60 per collection. We offer competitive business rates for regular collections. Contact us on 07342 877 759 for a tailored quote." },
      { question: "Do you offer regular scheduled collections for businesses?", answer: "Yes, we offer flexible regular collection schedules including daily, weekly, and fortnightly options. Collections can be arranged around your trading hours, including early morning and evening slots." },
      { question: "What types of business waste do you collect?", answer: "We collect waste from offices, retail shops, restaurants, cafes, pubs, salons, gyms, and all types of commercial premises. This includes general waste, cardboard, packaging, furniture, and equipment." },
      { question: "Do you provide waste transfer notes for businesses?", answer: "Yes, every commercial collection comes with a waste transfer note as required by law. We also provide full duty of care documentation giving your business a complete audit trail for compliance." },
      { question: "Can you collect commercial waste the same day?", answer: "Yes, we offer same-day and next-day commercial waste collection across London. We hold Environment Agency licence CBDU429337 and are fully insured for commercial collections." },
    ],
  },
  'appliance-disposal': {
    name: 'Appliance Disposal',
    slug: 'appliance-disposal',
    shortName: 'Appliance Disposal',
    tagline: 'Fridges, washing machines, and white goods collected same-day',
    description: 'WEEE-compliant disposal of fridges, freezers, washing machines, dishwashers, ovens, and all household appliances. Same-day collection from any room or floor.',
    features: [
      'Same-day and next-day appliance collection',
      'Fridges, freezers, and cooling appliances',
      'Washing machines, dryers, and dishwashers',
      'Ovens, cookers, and microwaves',
      'WEEE-compliant responsible disposal',
      'Collected from any room - we handle the heavy lifting',
    ],
    priceFrom: '£40',
    extendedContent: {
      imageAlt: 'Old appliances and white goods being collected for disposal',
      heading: 'Safe, compliant appliance disposal',
      paragraphs: [
        'Old appliances can be difficult to move and require specialist disposal. Fridges and freezers contain refrigerant gases that must be safely recovered, and all electrical items fall under WEEE regulations. Our appliance disposal service handles all of this for you.',
        'We collect fridges, freezers, washing machines, tumble dryers, dishwashers, ovens, cookers, microwaves, and any other household appliance. Our team will disconnect and remove items from any room or floor - you don\'t need to move anything yourself.',
        'All appliances are taken to a licensed facility where hazardous materials are safely extracted and recyclable components are recovered. This ensures full compliance with WEEE and environmental regulations, and you\'ll receive documentation to confirm responsible disposal.',
      ],
    },
    faqs: [
      { question: "How much does appliance disposal cost?", answer: "Appliance disposal starts from £40 for a single item. We collect fridges, washing machines, ovens, and all household appliances. An exact price is provided before we begin." },
      { question: "Can you disconnect appliances before removing them?", answer: "We can disconnect freestanding appliances such as washing machines and dishwashers. For hardwired appliances like electric cookers, we recommend having them disconnected by a qualified electrician before our visit." },
      { question: "How do you dispose of fridges and freezers?", answer: "Fridges and freezers contain refrigerant gases that must be safely recovered by a licensed facility. We take all cooling appliances to a specialist centre where gases are extracted and components are recycled in full compliance with WEEE regulations." },
      { question: "Can you collect appliances from any floor?", answer: "Yes, our two-person crew will collect appliances from any room and any floor, including basements and upper-floor flats with no lift access. We handle all the heavy lifting for you." },
      { question: "Do you offer same-day appliance collection?", answer: "Yes, we offer same-day and next-day appliance collection across London. Call us on 07342 877 759 to book. We are licensed waste carriers under licence number CBDU429337." },
    ],
  },
  'wait-and-load': {
    name: 'Wait & Load',
    slug: 'wait-and-load',
    shortName: 'Wait & Load',
    tagline: 'We wait while you load - or we load for you',
    description: 'Our van and crew arrive at your property, wait while you load, or we load for you. Same-day availability. Perfect for tradespeople, renovations, and large clear-outs.',
    features: [
      'Same-day and next-day availability',
      'We wait while you load at your pace',
      'Or our crew loads everything for you',
      'Ideal for tradespeople and site clearances',
      'No skip hire, no permits needed',
      'Pay only for the space you use',
    ],
    priceFrom: '£80',
    extendedContent: {
      imageAlt: 'Wait and load waste collection van on site in London',
      heading: 'Flexible wait and load collections',
      paragraphs: [
        'Our wait and load service is the ultimate flexible waste removal option. We bring our van and crew to your property, park up, and either wait while you load at your own pace or our team loads everything for you. It\'s the perfect solution for tradespeople, landlords, and anyone with a large amount of waste to shift.',
        'Unlike skip hire, there\'s no waiting for delivery and collection, no council permits to apply for, and no risk of fly-tipping in your skip. Our van is attended at all times, and you only pay for the space you actually use - from a quarter load to a full van.',
        'Wait and load is especially popular with builders, plumbers, and electricians who generate waste throughout the day and need it cleared before leaving site. We can arrive at a time that suits your schedule, including early mornings and weekends.',
      ],
    },
    faqs: [
      { question: "How much does a wait and load service cost?", answer: "Wait and load starts from £80. You only pay for the space you use in the van, from a quarter load to a full load. We give you an exact price before we start." },
      { question: "What is a wait and load service?", answer: "Wait and load means we bring our van to your property and either wait while you load at your own pace or our crew loads everything for you. It is a flexible alternative to skip hire with no permits needed." },
      { question: "How long will the van wait at my property?", answer: "We allow a reasonable loading time which is typically up to an hour for a full load. If you need longer, just let us know when you book and we can accommodate your schedule." },
      { question: "Do I need a council permit for wait and load?", answer: "No, unlike skip hire you do not need a council permit. Our van is attended at all times, so there is no obstruction. We park, load, and leave with no paperwork required from your side." },
      { question: "Can tradespeople use the wait and load service?", answer: "Yes, wait and load is especially popular with builders, plumbers, and electricians who need waste cleared from site at the end of the day. We are licensed under Environment Agency licence CBDU429337." },
    ],
  },
};

export const allServices = Object.values(servicesMeta);
export const allServiceSlugs = Object.keys(servicesMeta) as ServiceSlug[];

const allServicesList: ServiceSlug[] = allServiceSlugs;

export const areas: Area[] = [
  // Haringey
  { slug: 'bounds-green', name: 'Bounds Green', region: 'haringey', postcodes: ['N11'], description: 'Covering all of Bounds Green N11 including surrounding residential streets.', services: allServicesList },
  { slug: 'crouch-end', name: 'Crouch End', region: 'haringey', postcodes: ['N8'], description: 'Serving Crouch End N8 and the surrounding Haringey area.', services: allServicesList },
  { slug: 'finsbury-park', name: 'Finsbury Park', region: 'haringey', postcodes: ['N4'], description: 'Covering Finsbury Park N4 and neighbouring streets.', services: allServicesList },
  { slug: 'harringay', name: 'Harringay', region: 'haringey', postcodes: ['N4', 'N8', 'N15'], description: 'Serving all of Harringay including the Ladder and Green Lanes.', services: allServicesList },
  { slug: 'highgate', name: 'Highgate', region: 'haringey', postcodes: ['N6'], description: 'Covering Highgate N6 and surrounding areas.', services: allServicesList },
  { slug: 'hornsey', name: 'Hornsey', region: 'haringey', postcodes: ['N8'], description: 'Serving Hornsey N8 and the wider Haringey borough.', services: allServicesList },
  { slug: 'tottenham', name: 'Tottenham', region: 'haringey', postcodes: ['N17', 'N15'], description: 'Covering all of Tottenham including N17 and N15 postcodes.', services: allServicesList },
  { slug: 'muswell-hill', name: 'Muswell Hill', region: 'haringey', postcodes: ['N10'], description: 'Serving Muswell Hill N10 and the surrounding area.', services: allServicesList },
  { slug: 'wood-green', name: 'Wood Green', region: 'haringey', postcodes: ['N22'], description: 'Serving Wood Green N22 and the surrounding area.', services: allServicesList },

  // Central London
  { slug: 'city-of-london', name: 'City of London', region: 'central-london', postcodes: ['EC1', 'EC2', 'EC3', 'EC4'], description: 'Covering the Square Mile and all EC postcodes.', services: allServicesList },
  { slug: 'westminster', name: 'Westminster', region: 'central-london', postcodes: ['W1', 'SW1', 'WC2', 'NW1'], description: 'Serving Westminster and surrounding central London areas.', services: allServicesList },
  { slug: 'camden', name: 'Camden', region: 'central-london', postcodes: ['WC1', 'NW1', 'NW3'], description: 'Covering the London Borough of Camden.', services: allServicesList },
  { slug: 'islington', name: 'Islington', region: 'central-london', postcodes: ['EC1', 'N1'], description: 'Serving Islington and Angel including EC1 and N1.', services: allServicesList },

  // North London
  { slug: 'enfield', name: 'Enfield', region: 'north-london', postcodes: ['EN1', 'EN2', 'EN3'], description: 'Covering the London Borough of Enfield.', services: allServicesList },
  { slug: 'hackney', name: 'Hackney', region: 'north-london', postcodes: ['E5', 'E8', 'E9'], description: 'Serving the London Borough of Hackney.', services: allServicesList },
];

export const regions: Region[] = [
  {
    slug: 'haringey',
    name: 'Haringey',
    areas: areas.filter(a => a.region === 'haringey'),
  },
  {
    slug: 'north-london',
    name: 'North London',
    areas: areas.filter(a => a.region === 'north-london'),
  },
  {
    slug: 'central-london',
    name: 'Central London',
    areas: areas.filter(a => a.region === 'central-london'),
  },
];

export const getArea = (slug: string): Area | undefined => areas.find(a => a.slug === slug);
export const getService = (slug: string): ServiceMeta | undefined => servicesMeta[slug as ServiceSlug];

// All covered postcode districts (unique, uppercase)
export const coveredPostcodes = [...new Set(areas.flatMap(a => a.postcodes))].sort();

// Check if a user-entered postcode is in our coverage area
// Returns the matching area or null
export function validatePostcode(input: string): { covered: boolean; area: Area | null; district: string } {
  const cleaned = input.trim().toUpperCase();
  // UK postcode outward code is everything before the space, or if no space,
  // everything except the last 3 characters (which form the inward code: digit + 2 letters)
  let outward = '';
  if (cleaned.includes(' ')) {
    outward = cleaned.split(' ')[0];
  } else if (cleaned.length >= 5) {
    // Full postcode without space: last 3 chars are inward code
    outward = cleaned.slice(0, -3);
  } else {
    // Short input - treat whole thing as district
    outward = cleaned;
  }

  // Extract just the district (e.g. "EC1V" → "EC1", "SW1A" → "SW1", "N8" → "N8")
  const match = outward.match(/^([A-Z]{1,2}\d{1,2})/);
  if (!match) return { covered: false, area: null, district: '' };
  const districtBase = match[1];

  const matchingArea = areas.find(a =>
    a.postcodes.some(p => p === districtBase || p === outward)
  );

  return {
    covered: !!matchingArea,
    area: matchingArea || null,
    district: districtBase,
  };
}

export const businessInfo = {
  name: 'Easy Waste Disposal',
  phone: '07342 877 759',
  phoneHref: 'tel:+447342877759',
  email: 'info@easywastedisposal.co.uk',
  whatsapp: 'https://wa.me/447342877759',
  address: '52B Turnpike Lane, London, N8 0PS',
  hours: 'Monday - Sunday, 7am - 8pm',
  licenceNumber: 'CBDU429337',
  yearsExperience: '10+',
  reviewCount: '47',
  rating: '5.0',
  recyclingRate: '98%',
  insuranceCover: 'Fully insured with employers liability cover',
  priceFrom: '£40',
  tagline: 'Easy And Reliable Rubbish Removal London',
  subTagline: 'Same-day collections • Price match guarantee • Licensed waste carriers',
};
