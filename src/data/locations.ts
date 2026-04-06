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
      { question: "How much does rubbish removal cost in London?", answer: "Rubbish removal in London typically costs between £40 and £300 depending on volume. Easy Waste Disposal starts from £40 for small loads such as a few bags or boxes, with a full van load costing around £250-£300. All prices are quoted upfront before work begins, with no hidden fees. A price-match guarantee is offered on every job, and waste transfer notes are provided as standard." },
      { question: "Can you collect rubbish the same day I call?", answer: "Same-day rubbish collection is available across North and Central London when booked before midday. Easy Waste Disposal typically arrives within 2-4 hours of a confirmed booking. The service operates 7 days a week, from 7am to 8pm, covering areas including Haringey, Islington, Camden, Westminster, Hackney, and Enfield. Next-day collection is also available for bookings made later in the day." },
      { question: "Are you a licensed waste carrier?", answer: "Easy Waste Disposal holds Environment Agency waste carrier licence number CBDU429337, which authorises the collection and transport of controlled waste in England and Wales. The company carries comprehensive public liability insurance and provides a legally required waste transfer note for every collection. This documentation confirms the waste was collected by a licensed carrier and taken to an authorised facility." },
      { question: "What types of rubbish do you collect?", answer: "A licensed rubbish removal service in London will typically collect all general household and commercial waste including bin bags, cardboard boxes, old furniture, broken household items, packaging, textiles, and general junk. Easy Waste Disposal accepts all non-hazardous waste. Items that cannot be collected include asbestos, chemicals, paint, clinical waste, and gas canisters, which require specialist disposal services." },
      { question: "Do I need to bag up the rubbish before you arrive?", answer: "No preparation is needed before a rubbish removal collection. Easy Waste Disposal sends a two-person crew who collect items from any room and any floor, including basements and upper-floor flats without lift access. The crew handles all loading and heavy lifting. Items do not need to be bagged, boxed, or moved to the kerb beforehand. Most collections are completed within 20-40 minutes." },
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
    priceFrom: '£25',
    extendedContent: {
      imageAlt: 'Bulky furniture being collected by Easy Waste Disposal',
      heading: 'Bulky item collection made easy',
      paragraphs: [
        'Getting rid of large, heavy furniture can be a real headache. Council bulky waste collections often have long waiting times and limited slots. With our service, you can book a same-day or next-day collection and have your unwanted furniture gone within hours.',
        'We collect sofas, beds, mattresses, wardrobes, dining tables, desks, chest of drawers, and any other large items you need removed. Our two-person crew will collect from any room and any floor - including basements and top-floor flats with no lift access.',
        'Single items such as office chairs start from just £25, with armchairs at £40, double mattresses at £70, and two-seater sofas from £90. We also accept white goods including fridges (£95), freezers, and washing machines, all disposed of in full compliance with WEEE regulations.',
      ],
    },
    faqs: [
      { question: "How much does it cost to have a sofa removed?", answer: "Two-seater sofa removal through Easy Waste Disposal starts from £90. Larger sofas such as three-seaters, corner units, and sofa beds typically cost around £150. An armchair is £40, and an office chair is £25. All prices are quoted upfront before work begins, with no hidden fees or surcharges. A price-match guarantee is offered on every job. To book, call 07342 877 759 - same-day collection is available across Haringey, Islington, Camden, Westminster, Hackney, and Enfield." },
      { question: "Can you remove furniture from upstairs rooms?", answer: "Easy Waste Disposal collects furniture from any room and any floor, including top-floor flats with no lift access, basements, and loft conversions. A two-person crew handles all heavy lifting and manoeuvring through narrow hallways and staircases. There is no need to move items to the kerb or front door beforehand. The service operates 7 days a week, from 7am to 8pm, with same-day availability across North and Central London. Call 07342 877 759 to book a collection slot." },
      { question: "Is your service faster than council bulky waste collection?", answer: "Easy Waste Disposal offers same-day and next-day furniture collection, compared to council bulky waste services in London which typically require a two-to-four-week wait. Most bookings made before midday qualify for same-day collection, with the crew arriving within 2-4 hours. The service covers Haringey, Islington, Camden, Westminster, Hackney, Enfield, and surrounding areas, 7 days a week from 7am to 8pm. Single items such as an office chair start from £25, with a double mattress at £70." },
      { question: "What bulky items do you accept?", answer: "Easy Waste Disposal accepts all large household items including sofas (from £90), beds, double mattresses (£70), wardrobes, dining tables, desks, chest of drawers, bookcases, armchairs (£40), office chairs (£25), and garden furniture. White goods such as fridges (£95), freezers, washing machines, and dishwashers are also collected and disposed of in compliance with WEEE regulations. The only items not accepted are hazardous materials such as asbestos, chemicals, and gas canisters. All collections include a waste transfer note confirming disposal by a licensed carrier (licence CBDU429337)." },
      { question: "Do you recycle old furniture?", answer: "Easy Waste Disposal recycles 98% of all collected materials, diverting the vast majority of waste from landfill. All furniture is taken to a licensed waste transfer station where it is sorted by material type. Reusable items in good condition are donated to charity partners, while wood, metal, fabric, and foam are separated for recycling. A waste transfer note is provided with every collection as legal proof of responsible disposal. The company holds Environment Agency waste carrier licence CBDU429337." },
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
      { question: "How much does garden waste removal cost?", answer: "Garden waste removal through Easy Waste Disposal starts from £50 for small loads such as bags of hedge cuttings or grass clippings. A full van load of garden waste typically costs between £200 and £300, depending on weight and volume. Heavy materials like soil, turf, and rubble may affect pricing due to weight. All prices are quoted upfront before work begins, with no hidden fees. Call 07342 877 759 for a free, no-obligation quote with same-day availability across London." },
      { question: "Do you remove soil, turf, and rubble from gardens?", answer: "Easy Waste Disposal removes all types of garden waste including soil, turf, rubble, stones, concrete, branches, hedge cuttings, grass, leaves, weeds, and tree stumps. Larger garden structures such as old sheds, fencing panels, decking, trellises, greenhouses, and garden furniture are also accepted. The company holds Environment Agency waste carrier licence CBDU429337 and provides a waste transfer note for every collection. A two-person crew handles all loading, so there is no need to bag or move materials beforehand." },
      { question: "Can you clear an overgrown garden?", answer: "Easy Waste Disposal carries out full garden clearances for overgrown, neglected, or inherited properties across Haringey, Islington, Camden, Westminster, Hackney, Enfield, and surrounding areas. The crew removes all green waste, garden debris, broken structures, and unwanted items in a single visit where possible. The garden is left clear and ready for landscaping or maintenance. Same-day and next-day bookings are available 7 days a week, from 7am to 8pm. Call 07342 877 759 to arrange a clearance." },
      { question: "What happens to the garden waste after collection?", answer: "All garden and green waste collected by Easy Waste Disposal is taken to a licensed waste transfer facility where it is sorted for composting or recycling. Green waste such as grass, leaves, and hedge cuttings is composted, while wood, metal, and plastics are recycled separately. Easy Waste Disposal achieves a 98% recycling rate, diverting virtually all waste from landfill. A waste transfer note is provided with every collection as legal proof that the waste was handled by a licensed carrier (licence CBDU429337)." },
      { question: "Do you offer same-day garden waste collection?", answer: "Same-day garden waste collection is available from Easy Waste Disposal when booked before midday, with the crew typically arriving within 2-4 hours. Next-day slots are also available for bookings made later in the day. The service operates 7 days a week, from 7am to 8pm, covering Haringey, Islington, Camden, Westminster, Hackney, Enfield, and surrounding areas. Prices start from £50 for small loads. Call 07342 877 759 to book a collection slot." },
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
      { question: "How much does builders waste removal cost?", answer: "Builders waste removal through Easy Waste Disposal starts from £60 for small loads of rubble or timber offcuts. A full load of around 1.5 tonnes of mixed construction waste costs approximately £500, as heavy materials like rubble, concrete, and soil incur higher disposal charges at licensed facilities. All prices are quoted upfront before work begins, with no hidden fees. This is often cheaper than skip hire once permit fees, delivery charges, and overfill surcharges are factored in. Call 07342 877 759 for a free quote." },
      { question: "Is your service faster than hiring a skip?", answer: "Easy Waste Disposal offers same-day builders waste removal, which is significantly faster than skip hire. Skip hire in London typically requires 2-3 days for delivery, a council permit application costing £25-£60, and then another wait for collection. By contrast, Easy Waste Disposal arrives on the same day when booked before midday, loads all waste, and removes it - often within an hour. The service operates 7 days a week from 7am to 8pm, so site clearances can be arranged around project schedules." },
      { question: "Do I need a council permit for your service?", answer: "No council permit is needed when using Easy Waste Disposal for builders waste removal. Unlike skip hire, which requires a permit if placed on a public road (typically costing £25-£60 in London boroughs), Easy Waste Disposal arrives with its own vehicle, loads the waste, and removes it immediately. No parking space is occupied and no paperwork is required from the customer. The company holds Environment Agency waste carrier licence CBDU429337, covering all necessary authorisations." },
      { question: "What construction waste do you accept?", answer: "Easy Waste Disposal accepts all non-hazardous construction waste including rubble, concrete, bricks, tiles, ceramic, plasterboard, timber, metal, soil, sand, gravel, plumbing fixtures, wiring, and mixed demolition debris. The service covers everything from bathroom refits and kitchen renovations to full property refurbishments and demolition projects. Hazardous materials such as asbestos, lead paint, and chemical solvents cannot be accepted and require specialist disposal. A waste transfer note is provided for every collection." },
      { question: "Can you clear a building site at the end of a project?", answer: "Easy Waste Disposal regularly carries out full site clearances for builders, contractors, and property developers at the end of renovations and construction projects across London. The two-person crew removes all remaining waste, debris, and materials, leaving the site clean and ready for handover. The company holds Environment Agency waste carrier licence CBDU429337 and provides waste transfer notes for every collection, giving contractors a complete compliance audit trail. Call 07342 877 759 to arrange a clearance." },
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
      { question: "How much does a house clearance cost in London?", answer: "House clearance through Easy Waste Disposal starts from £150 for a single-room clearance or small flat. A full three-bedroom house clearance typically costs between £500 and £1,000 depending on the volume of contents and access. All prices are quoted upfront after a free, no-obligation assessment, with no hidden fees or surcharges. A price-match guarantee is offered on every job. The service covers Haringey, Islington, Camden, Westminster, Hackney, Enfield, and surrounding areas. Call 07342 877 759 to arrange a quote." },
      { question: "Do you handle probate house clearances?", answer: "Easy Waste Disposal regularly carries out probate and bereavement house clearances across North and Central London. The team works sensitively and at the client's pace, understanding that these situations are often emotionally difficult. The company can liaise directly with solicitors, estate agents, or executors to arrange access and scheduling. All items are documented, and reusable belongings are donated to charity partners where requested. Waste transfer notes are provided for every collection under Environment Agency licence CBDU429337." },
      { question: "How quickly can you clear a house?", answer: "Easy Waste Disposal offers next-day house clearances across London, with the service operating 7 days a week from 7am to 8pm. Most properties from studio flats to three-bedroom houses can be cleared in a single visit lasting 2-5 hours. Larger properties or heavily furnished homes may require a second trip, which is arranged at no additional call-out charge. The crew removes all contents including furniture, appliances, clothing, and general household items. Call 07342 877 759 to book." },
      { question: "Can you leave the property broom-clean?", answer: "Easy Waste Disposal offers a broom-clean finish as part of its house clearance service, leaving the property tidy and ready for sale, rental, renovation, or handover. This includes sweeping all rooms, wiping down surfaces, and removing all debris. The broom-clean option should be requested at the time of booking so it can be included in the upfront quote. This service is particularly popular with estate agents, landlords, and executors managing probate properties." },
      { question: "What do you do with the items you remove?", answer: "All items collected during a house clearance are taken to a licensed waste transfer station where they are sorted by material type. Easy Waste Disposal achieves a 98% recycling rate, diverting virtually all waste from landfill. Reusable furniture, clothing, and household items in good condition are donated to charity partners. Wood, metal, textiles, and plastics are separated for recycling. A waste transfer note is provided with every collection as legal proof of responsible disposal under licence CBDU429337." },
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
      { question: "How much does an office clearance cost?", answer: "Office clearance through Easy Waste Disposal starts from £150 for a small office or single-room clearance. Larger offices are priced based on the volume of furniture, equipment, and fixtures to be removed. All prices are quoted upfront after a free, no-obligation assessment with no hidden fees. Competitive rates are available for property management companies and businesses requiring regular clearances. Call 07342 877 759 for a tailored quote covering any office size from a single suite to a multi-floor building." },
      { question: "Can you work outside of business hours?", answer: "Easy Waste Disposal offers out-of-hours office clearances including early mornings, evenings, and weekends to minimise disruption to business operations. The service operates 7 days a week from 7am to 8pm as standard, with extended hours available by arrangement for larger commercial projects. This flexibility allows clearances to take place before or after trading hours, during office moves, or over weekends when premises are unoccupied. Call 07342 877 759 to arrange a time that suits your schedule." },
      { question: "Do you dispose of IT equipment and electronics?", answer: "Easy Waste Disposal disposes of all IT equipment and electronics in full compliance with WEEE (Waste Electrical and Electronic Equipment) regulations. This includes monitors, desktop computers, laptops, printers, servers, networking equipment, cabling, and peripherals. All electronic waste is taken to a licensed specialist facility where hazardous components are safely extracted and recyclable materials are recovered. Certificates of disposal and data destruction confirmation are available on request for businesses requiring an audit trail." },
      { question: "Do you provide duty of care documentation?", answer: "Easy Waste Disposal provides full duty of care documentation with every office clearance, as required under the Environmental Protection Act 1990. This includes waste transfer notes detailing the type and quantity of waste collected, the date of collection, and the destination facility. These documents give businesses a complete audit trail for waste management compliance and can be presented during environmental audits or inspections. The company holds Environment Agency waste carrier licence CBDU429337." },
      { question: "Are you licensed to carry commercial waste?", answer: "Easy Waste Disposal holds Environment Agency waste carrier licence number CBDU429337, authorising the collection and transport of controlled waste including commercial and industrial waste in England and Wales. The company carries comprehensive public liability insurance and provides legally required waste transfer notes for every collection. All waste is taken to licensed transfer stations for sorting and recycling, with a 98% recycling rate achieved across all collections. Documentation is available for corporate compliance records." },
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
      { question: "How much does commercial waste disposal cost?", answer: "Commercial waste disposal through Easy Waste Disposal starts from £60 per collection for small volumes of business waste. Discounted rates are available for businesses requiring regular scheduled collections on daily, weekly, or fortnightly cycles. Pricing is based on volume and frequency, with all costs quoted upfront and no hidden fees. The service covers businesses across Haringey, Islington, Camden, Westminster, Hackney, Enfield, and surrounding areas. Call 07342 877 759 for a tailored quote." },
      { question: "Do you offer regular scheduled collections for businesses?", answer: "Easy Waste Disposal offers flexible regular collection schedules for businesses, including daily, weekly, and fortnightly options. Collections can be arranged around trading hours with early morning slots from 7am, evening slots up to 8pm, and weekend availability 7 days a week. This is particularly suited to restaurants, cafes, retail shops, and hospitality businesses that generate waste throughout the week. Discounted rates apply to regular contracts, and all scheduled collections include waste transfer notes as standard." },
      { question: "What types of business waste do you collect?", answer: "Easy Waste Disposal collects all non-hazardous commercial waste from offices, retail shops, restaurants, cafes, pubs, bars, salons, gyms, warehouses, and all types of commercial premises. This includes general waste, cardboard, packaging, food waste, office furniture, shop fittings, display units, catering equipment, and old stock. The company holds Environment Agency waste carrier licence CBDU429337, authorising the collection of controlled commercial waste. Hazardous waste such as chemicals and clinical waste requires specialist disposal." },
      { question: "Do you provide waste transfer notes for businesses?", answer: "Easy Waste Disposal provides a waste transfer note with every commercial collection, as legally required under the Environmental Protection Act 1990 and the Duty of Care regulations. Each note records the waste type, quantity, collection date, carrier details, and destination facility. Full duty of care documentation is also available, giving businesses a complete audit trail for environmental compliance, insurance purposes, and regulatory inspections. All documentation references Environment Agency licence CBDU429337." },
      { question: "Can you collect commercial waste the same day?", answer: "Same-day commercial waste collection is available from Easy Waste Disposal when booked before midday, with the crew typically arriving within 2-4 hours. Next-day collection is available for bookings made later in the day. The service operates 7 days a week from 7am to 8pm, covering Haringey, Islington, Camden, Westminster, Hackney, Enfield, and surrounding areas. Easy Waste Disposal holds Environment Agency licence CBDU429337 and carries comprehensive public liability insurance for all commercial collections." },
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
    priceFrom: '£95',
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
      { question: "How much does appliance disposal cost?", answer: "Appliance disposal through Easy Waste Disposal costs £95 for a standard fridge or freezer, which includes safe recovery of refrigerant gases as required by WEEE regulations. Washing machines, dishwashers, and tumble dryers are similarly priced. Multiple appliances can be collected in a single visit at a reduced per-item rate. All prices are quoted upfront before work begins with no hidden fees. Call 07342 877 759 to book same-day or next-day collection." },
      { question: "Can you disconnect appliances before removing them?", answer: "Easy Waste Disposal can disconnect freestanding appliances such as washing machines, dishwashers, and tumble dryers that use standard plumbing and plug connections. Hardwired appliances like electric cookers and some integrated ovens should be disconnected by a qualified electrician before the collection visit. Gas appliances must be disconnected by a Gas Safe registered engineer. The two-person crew handles all lifting, manoeuvring, and loading once the appliance is safely disconnected." },
      { question: "How do you dispose of fridges and freezers?", answer: "Fridges and freezers contain refrigerant gases (CFCs and HFCs) that are harmful to the ozone layer and must be safely recovered under WEEE regulations. Easy Waste Disposal takes all cooling appliances to a licensed specialist facility where refrigerant gases are extracted using certified equipment, and components including metal, plastic, and glass are separated for recycling. Easy Waste Disposal achieves a 98% recycling rate across all collections and holds Environment Agency waste carrier licence CBDU429337." },
      { question: "Can you collect appliances from any floor?", answer: "Easy Waste Disposal collects appliances from any room and any floor, including basements, upper-floor flats without lift access, and loft conversions. A two-person crew handles all heavy lifting and manoeuvring through narrow hallways, staircases, and doorways. There is no need to move the appliance beforehand - the crew disconnects freestanding items and carries them out. The service operates 7 days a week from 7am to 8pm across Haringey, Islington, Camden, Westminster, Hackney, and Enfield." },
      { question: "Do you offer same-day appliance collection?", answer: "Same-day appliance collection is available from Easy Waste Disposal when booked before midday, with the crew typically arriving within 2-4 hours. Next-day collection is available for bookings made later in the day. The service operates 7 days a week from 7am to 8pm, covering Haringey, Islington, Camden, Westminster, Hackney, Enfield, and surrounding areas. A standard fridge costs £95 including compliant disposal. Call 07342 877 759 to book. Easy Waste Disposal holds Environment Agency waste carrier licence CBDU429337." },
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
      { question: "How much does a wait and load service cost?", answer: "Wait and load service through Easy Waste Disposal starts from £80 for a quarter van load. Pricing is based on the space used: a quarter load costs from £80, a half load from £140, and a full van load from £250. Only the space actually used is charged, so there is no waste of money on unused capacity. All prices are quoted upfront before loading begins with no hidden fees. Call 07342 877 759 for a free quote with same-day availability across London." },
      { question: "What is a wait and load service?", answer: "A wait and load service is a flexible waste removal option where Easy Waste Disposal brings a van and crew directly to the property, parks up, and either waits while the customer loads at their own pace or the crew handles all loading. It is a faster, more convenient alternative to skip hire because no council permit is required, the van is attended at all times, and the waste is removed immediately. The service is available same-day, 7 days a week from 7am to 8pm, starting from £80." },
      { question: "How long will the van wait at my property?", answer: "Easy Waste Disposal allows a standard loading window of up to one hour for a full van load, which is sufficient for most residential and trade clearances. Longer loading times can be arranged when booking at no additional charge for reasonable extensions. For tradespeople who need the van on-site for a full working day while waste is generated, extended wait-and-load packages are available by arrangement. Call 07342 877 759 to discuss specific timing requirements." },
      { question: "Do I need a council permit for wait and load?", answer: "No council permit is needed for Easy Waste Disposal's wait and load service. Unlike skip hire, which requires a council permit costing £25-£60 if placed on a public road, the wait and load van is attended at all times and does not constitute an obstruction. The van parks, the waste is loaded, and it leaves immediately - no paperwork, no permit applications, and no loss of a parking space. Easy Waste Disposal holds Environment Agency waste carrier licence CBDU429337 covering all necessary authorisations." },
      { question: "Can tradespeople use the wait and load service?", answer: "Easy Waste Disposal's wait and load service is widely used by builders, plumbers, electricians, kitchen fitters, and other tradespeople who need waste cleared from site quickly and without the delays of skip hire. The van can arrive at the end of a working day to collect all waste generated during the project, or remain on-site for extended loading by arrangement. The company holds Environment Agency waste carrier licence CBDU429337 and provides waste transfer notes for every collection, giving contractors full compliance documentation." },
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
  { slug: 'haringey', name: 'Haringey', region: 'north-london', postcodes: ['N4', 'N6', 'N8', 'N10', 'N11', 'N15', 'N17', 'N22'], description: 'Covering the London Borough of Haringey including Tottenham, Wood Green, Muswell Hill, Crouch End, Hornsey, and Finsbury Park.', services: allServicesList },
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
  priceFrom: '£25',
  googleReviewsUrl: 'https://www.google.com/maps/place/Easy+Waste+Disposal/@51.5,-0.1/reviews',
  tagline: 'Easy And Reliable Rubbish Removal London',
  subTagline: 'Same-day collections • Price match guarantee • Licensed waste carriers',
};
