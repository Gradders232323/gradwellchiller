export type ServicePage = {
  slug: string; kicker: string; title: string; accent: string; description: string;
  stats: [string, string][]; introTitle: string; intro: string;
  features: [string, string][]; steps: [string, string][]; applications: string[];
  considerations: [string, string][]; faqs: [string, string][];
};

const standardFaqs: [string, string][] = [
  ['What information do you need for a quote?', 'We will ask about the required flow and return temperatures, process or building load, site location, electrical supply, connections, access and hire dates. If anything is unknown, a site survey can close the gaps.'],
  ['Can you install the whole temporary system?', 'Yes. The package can include pumps, buffer tanks, plate heat exchangers, hoses, fittings, temporary power, delivery, positioning and commissioning.'],
  ['How long can I hire a chiller for?', 'Hire periods can cover a short breakdown, a planned maintenance window, seasonal demand or a longer project. We shape the agreement around the programme.'],
  ['What happens if there is a problem on hire?', 'Gradwell Chiller Hire provides technical support throughout the hire. For urgent requirements, the response team is available 24 hours a day.'],
];

export const services: ServicePage[] = [
  {
    slug:'chiller-hire', kicker:'Nationwide temporary cooling', title:'THE RIGHT CHILLER.', accent:'READY TO RUN.',
    description:'Air-cooled chillers from 50 kW to multi-megawatt packages, sized, installed and supported as one complete temporary system.',
    stats:[['50 kW–1 MW+','Flexible fleet'],['24/7','Engineering support'],['UK','Nationwide installation']],
    introTitle:'COOLING THAT FITS THE JOB.', intro:'Temporary cooling starts with the duty, not the machine. We assess temperatures, flow, load, connections, access, power and resilience before matching the equipment to your site.',
    features:[['A system, not a drop-off','Equipment is positioned, connected and commissioned by people who understand the whole circuit.'],['Capacity that can change','Modular chillers can be combined for larger duties, standby resilience or a changing load.'],['Short or long-term hire','Cover a breakdown, planned project, seasonal peak or extended capacity requirement.'],['Support throughout','The same team stays accountable from survey and selection through to collection.']],
    steps:[['Discuss','Tell us what must remain cool, where and for how long.'],['Survey','We confirm temperatures, flow, access, power and connection points.'],['Engineer','Chillers and ancillaries are selected as one working package.'],['Install','We deliver, position, connect, test and support the system.']],
    applications:['Equipment failure','Seasonal demand','Planned maintenance','New production lines','Temporary buildings','Contingency cooling'],
    considerations:[['Cooling duty','The heat load determines the capacity required, with allowance for ambient conditions and load variation.'],['Water temperatures','Required supply and return temperatures affect chiller selection, flow and fluid protection.'],['Connections and flow','Pipe sizes, available pressure and system volume shape the temporary hydraulic design.'],['Power and access','Electrical supply, lifting, positioning, noise and hose routes are checked before delivery.']],
    faqs:standardFaqs,
  },
  {
    slug:'process-chiller-hire', kicker:'Process chiller hire', title:'KEEP THE PROCESS.', accent:'KEEP THE OUTPUT.',
    description:'Stable chilled-water capacity for production, trials, maintenance and plant failure across demanding industrial sites.',
    stats:[['50 kW–1 MW+','Scalable duty'],['N+1','Resilience options'],['24/7','Technical support']],
    introTitle:'BUILT AROUND PRODUCTION.', intro:'Process temperature can affect quality, throughput and product safety. We work from the actual heat load and operating envelope, then build a temporary circuit that can hold those conditions.',
    features:[['Duty-led selection','Capacity is matched to the steady, variable and peak load your process creates.'],['Clean system separation','Plate heat exchangers can isolate temporary equipment from sensitive process circuits.'],['Fluid compatibility','Water quality, glycol concentration and process materials are considered before connection.'],['Production-friendly install','Delivery and changeover are planned around access, permits and live operations.']],
    steps:[['Define','Confirm process load, fluid and temperature range.'],['Design','Select the chiller, pumps, tank, exchanger and controls.'],['Connect','Install through agreed temporary interfaces and hose routes.'],['Prove','Commission under load and verify stable operation.']],
    applications:['Food & beverage','Plastics','Pharmaceutical','Chemical processing','Automotive','Metal finishing'],
    considerations:[['Product temperatures','The supply temperature must suit the process without creating freezing or condensation risks.'],['Load profile','Cycle times, start-up peaks and production changes can all affect the duty.'],['Water quality','Contaminated or demineralised circuits may need hydraulic separation or specialist materials.'],['Continuity','Critical lines may need duty/standby capacity and a planned response if one unit stops.']],
    faqs:[['Can you connect to an existing process circuit?','Usually, yes. We first confirm fluid type, pressure, temperatures, connection sizes and water quality. A plate heat exchanger may be used to keep circuits separate.'],['Can the package follow changing production demand?','Yes. Modular capacity and controls can accommodate staged loads, production peaks and changing output.'],...standardFaqs.slice(2)],
  },
  {
    slug:'hvac-chiller-hire', kicker:'HVAC chiller hire', title:'KEEP THE BUILDING.', accent:'COMFORTABLE.',
    description:'Temporary chilled-water plant for comfort cooling, planned changeovers and lost HVAC capacity in occupied buildings.',
    stats:[['Quiet','Site-aware setup'],['Flexible','Building-scale capacity'],['Planned','Low-disruption install']],
    introTitle:'COOLING FOR OCCUPIED SPACE.', intro:'When fixed cooling is offline, the temporary solution has to work around people, access, noise and the daily use of the building. We plan the water side, air side and power together.',
    features:[['Low-disruption routes','Hoses, cables and working areas are planned around staff, visitors and tenants.'],['Air-side options','Temporary AHUs and fan coils can deliver cooled air where the existing system cannot.'],['Quiet positioning','Equipment location considers neighbours, occupied rooms and operating hours.'],['Seasonal flexibility','Add capacity for hot weather, events, refurbishments or a longer plant replacement.']],
    steps:[['Assess','Review affected areas, occupancy, heat gains and target conditions.'],['Plan','Design temporary water, air and electrical routes.'],['Install','Coordinate safe works around the live building.'],['Balance','Set flows and temperatures for useful coverage.']],
    applications:['Offices','Retail','Hotels','Healthcare','Education','Venues'],
    considerations:[['Building load','Occupancy, glazing, equipment and weather all affect the required capacity.'],['Air distribution','Cooling only works when the air reaches the right areas at a useful volume.'],['Noise and location','Plant position must balance airflow, hose distance, access and disturbance.'],['Changeover plan','Temporary cooling should be tested before the permanent system is isolated.']],
    faqs:[['Can you provide temporary air handling units?','Yes. Air handling units, fan coils and flexible ducting can be supplied with the chilled-water package.'],['Can you work in an occupied building?','Yes. The installation plan considers access, safe hose and cable routes, working hours and noise-sensitive areas.'],...standardFaqs.slice(2)],
  },
  {
    slug:'heat-pump-chiller-hire', kicker:'Heat-pump chiller hire', title:'COOLING OR HEATING.', accent:'ONE PACKAGE.',
    description:'Reversible temporary heat-pump chillers for changing weather, HVAC duties and projects that need both chilled and warm water.',
    stats:[['Reversible','Heating and cooling'],['Flexible','Seasonal use'],['Turnkey','Installed package']],
    introTitle:'READY FOR CHANGING CONDITIONS.', intro:'A reversible heat-pump chiller can provide cooling or heating from the same packaged unit. It is a practical choice for HVAC projects, seasonal changeovers and sites where the duty may move in either direction.',
    features:[['Two operating modes','Use the same temporary plant for chilled-water or warm-water duties.'],['Seasonal cover','A useful option when project dates cross changing weather conditions.'],['Complete hydraulics','Pumps, tanks, hoses and controls are matched to the required mode.'],['Site-led selection','Available equipment is checked against temperature, ambient and electrical requirements.']],
    steps:[['Confirm','Define heating and cooling duties across the hire period.'],['Select','Check water temperatures, ambient range and available power.'],['Install','Position, connect and commission the reversible package.'],['Switch','Support mode changes as project conditions evolve.']],
    applications:['HVAC changeovers','Events','Temporary buildings','Seasonal cover','Commissioning','Refurbishment'],
    considerations:[['Water temperature','Required leaving-water temperatures must be achievable in both modes.'],['Ambient range','Outdoor conditions affect available capacity and efficiency.'],['Changeover controls','The method and timing for switching modes should be agreed before operation.'],['Electrical supply','Heating and cooling performance must be checked against the power available.']],
    faqs:[['Does one unit provide both heating and cooling?','A reversible heat-pump chiller can operate in either mode, subject to the selected equipment and required temperatures.'],['Can it switch modes during the hire?','Yes, where the chosen configuration allows it. We agree the control and changeover method during design.'],...standardFaqs.slice(2)],
  },
  {
    slug:'low-gwp-chiller-hire', kicker:'Lower-GWP chiller hire', title:'LOWER IMPACT.', accent:'FULL DUTY.',
    description:'Modern temporary chiller options selected to reduce refrigerant impact while meeting the operating duty of the site.',
    stats:[['Modern','Fleet options'],['Efficient','Duty matched'],['Supported','Throughout hire']],
    introTitle:'REFRIGERANT CHOICE MATTERS.', intro:'Global Warming Potential is one part of chiller selection. We balance refrigerant choice with duty, efficiency, temperature range, safety and equipment availability so the temporary system works in practice.',
    features:[['Available options','We identify suitable lower-GWP equipment within the fleet for the required duty.'],['Correctly sized','Better matching can reduce unnecessary energy use as well as equipment footprint.'],['Application checked','Refrigerant characteristics are considered alongside the location and operating conditions.'],['Maintained on hire','Service and technical support remain part of the rental package.']],
    steps:[['Set priorities','Confirm duty, site constraints and environmental requirements.'],['Compare','Review suitable equipment and refrigerant options.'],['Engineer','Size the full temporary system around the real load.'],['Support','Maintain performance through the hire.']],
    applications:['ESG-led projects','Corporate estates','Manufacturing','Data centres','Public sector','Long-term hire'],
    considerations:[['GWP value','Refrigerants differ in their climate impact, but selection must still meet safety and duty requirements.'],['Energy use','A well-sized system operating close to its useful range can cut wasted power.'],['Location and safety','Charge, equipment design and site conditions affect which options are suitable.'],['Availability','We confirm the fleet options available for the programme and capacity required.']],
    faqs:[['What does GWP mean?','Global Warming Potential compares the climate impact of a refrigerant if it is released. A lower number means a lower relative impact.'],['Are lower-GWP chillers available for every duty?','Availability depends on capacity, temperature and site conditions. We will set out the suitable options when sizing the package.'],...standardFaqs.slice(2)],
  },
  {
    slug:'low-temperature-chiller-hire', kicker:'Low-temperature chiller hire', title:'LOWER TARGETS.', accent:'CONTROLLED.',
    description:'Specialist temporary cooling configurations for cold storage, process trials and demanding leaving-fluid temperatures.',
    stats:[['Glycol','Protected circuits'],['Specialist','Low-temperature setup'],['Engineered','Duty specific']],
    introTitle:'DESIGNED FOR THE TEMPERATURE.', intro:'Low-temperature duties need more than a standard chiller selection. Fluid concentration, ambient conditions, component ratings and the process operating window all affect a reliable package.',
    features:[['Glycol specification','Concentration is selected for the target temperature and freeze protection.'],['Hydraulic separation','Heat exchangers can protect sensitive or specialist process circuits.'],['Ambient safeguards','Controls and operating strategy account for cold outdoor conditions.'],['Duty verification','Selection is checked against leaving-fluid and return temperatures.']],
    steps:[['Define','Confirm target temperature, fluid and heat load.'],['Check','Review ambient range and process constraints.'],['Configure','Select protected equipment and circuit components.'],['Commission','Stabilise and prove performance at the target.']],
    applications:['Cold storage','Food production','Ice rinks','Process trials','Winter projects','Specialist manufacturing'],
    considerations:[['Freeze protection','Fluid and all exposed components need protection below normal water temperatures.'],['Fluid viscosity','Higher glycol concentrations affect pump selection, flow and heat transfer.'],['Defrost and ambient','Low ambient conditions can change how the equipment must operate.'],['Process separation','Specialist fluids may need a plate heat exchanger between temporary and process circuits.']],
    faqs:[['Can you supply glycol with the hire package?','The required thermal fluid and concentration can be included where appropriate for the system.'],['How low can a temporary chiller operate?','That depends on the selected equipment, fluid, load and ambient conditions. We size the package against your actual target rather than quoting a generic limit.'],...standardFaqs.slice(2)],
  },
  {
    slug:'non-ferrous-chiller-hire', kicker:'Non-ferrous chiller hire', title:'CLEAN CIRCUITS.', accent:'CAREFULLY MATCHED.',
    description:'Temporary cooling arrangements for demineralised water and process circuits where wetted materials need careful control.',
    stats:[['Clean','Water circuits'],['Separated','Process options'],['Specified','Materials checked']],
    introTitle:'MATERIALS MATTER.', intro:'Some processes cannot accept standard ferrous wetted parts. We review water quality, conductivity, materials and connection points before selecting equipment or designing an isolated temporary circuit.',
    features:[['Water quality reviewed','Conductivity, treatment and contamination risks are established early.'],['Suitable wetted parts','Available equipment and ancillary materials are checked for compatibility.'],['Separated circuits','A plate heat exchanger can keep the temporary circuit away from critical water.'],['Clean installation','Flushing, filling and connection methods are agreed before work starts.']],
    steps:[['Sample','Establish water quality and material restrictions.'],['Specify','Select compatible or separated circuit components.'],['Prepare','Agree cleanliness, flushing and filling procedures.'],['Commission','Connect and prove the system without compromising the process.']],
    applications:['Demineralised water','Electronics','Laboratories','Pharmaceutical','Medical equipment','Precision process'],
    considerations:[['Wetted materials','Every component in contact with the process fluid must be considered.'],['Conductivity','Water treatment targets may rule out direct connection to standard hire equipment.'],['Circuit isolation','A heat exchanger often gives the cleanest boundary between systems.'],['Connection procedure','Cleanliness and flushing requirements should be written into the method.']],
    faqs:[['What does non-ferrous mean in a chiller circuit?','It means avoiding iron-containing wetted components where they could contaminate or react with the process water.'],['Do you always need specialist chillers?','Not always. A suitably selected plate heat exchanger can isolate the clean process circuit from a standard temporary circuit.'],...standardFaqs.slice(2)],
  },
  {
    slug:'free-cooling-chiller-hire', kicker:'Free-cooling hire', title:'USE THE AIR.', accent:'CUT THE LOAD.',
    description:'Dry coolers and hybrid temporary systems that use suitable outdoor conditions to reduce mechanical refrigeration demand.',
    stats:[['Ambient','Cooling opportunity'],['Hybrid','System options'],['Lower','Compressor runtime']],
    introTitle:'LET THE WEATHER HELP.', intro:'When outdoor air is cool enough, a dry cooler can reject some or all of the process heat without relying entirely on compressors. We check the temperatures and load profile to see where free cooling is practical.',
    features:[['Direct free cooling','Dry coolers can carry suitable loads when ambient conditions allow.'],['Hybrid operation','Controls can stage free cooling with mechanical chilling as temperatures change.'],['Reduced runtime','Using ambient air can lower compressor hours and electrical demand.'],['System integration','Pumps, valves, controls and glycol are designed around the full circuit.']],
    steps:[['Review','Compare process temperatures with expected ambient conditions.'],['Model','Estimate when and how much free cooling is available.'],['Integrate','Design dry coolers, chillers and controls as one system.'],['Optimise','Adjust staging through the hire as conditions change.']],
    applications:['Process water','Data centres','Manufacturing','Winter production','Long-term hire','Capacity support'],
    considerations:[['Temperature approach','Free cooling needs enough difference between outdoor air and required fluid temperature.'],['Seasonal profile','Savings vary by location, time of year and daily operating pattern.'],['Glycol protection','Outdoor coils and pipework often need suitable freeze protection.'],['Control strategy','Stable automatic changeover is important when ambient conditions move.']],
    faqs:[['Does free cooling mean no electricity is used?','No. Fans and pumps still use power, but compressor demand can be reduced or avoided when conditions are suitable.'],['Can free cooling work in summer?','It depends on the required water temperature and outdoor conditions. Hybrid systems can use partial free cooling when full free cooling is not available.'],...standardFaqs.slice(2)],
  },
  {
    slug:'emergency-chiller-hire', kicker:'24/7 emergency chiller hire', title:'CHILLER DOWN?', accent:'WE MOVE.',
    description:'Rapid temporary cooling for breakdowns, lost capacity and rising temperatures, coordinated nationwide by experienced engineers.',
    stats:[['24/7','Response line'],['Rapid','Fleet mobilisation'],['UK','Nationwide coverage']],
    introTitle:'FAST, WITHOUT GUESSWORK.', intro:'When temperatures are climbing, speed and good engineering have to happen together. One coordinator establishes the duty, site constraints and connections, then mobilises the complete package.',
    features:[['Rapid assessment','Critical temperatures, loads and immediate risks are established quickly.'],['Priority equipment','Available chillers and ancillaries are matched to the real requirement.'],['Turnkey mobilisation','Transport, positioning, connection and commissioning are coordinated together.'],['Continuity planning','Redundancy and temporary power can be included where the risk demands it.']],
    steps:[['Call','A cooling specialist establishes the incident and location.'],['Assess','Temperatures, flow, connections, access and power are reviewed.'],['Match','Chiller, pumps, hoses and transport are assigned.'],['Mobilise','Arrival, installation and commissioning are coordinated.']],
    applications:['Chiller breakdown','Capacity shortfall','Overheating process','HVAC failure','Critical maintenance','Heatwave demand'],
    considerations:[['Current temperature','We need to understand how quickly the process or space is warming.'],['Critical load','Protect the operation that matters first, then add wider capacity if needed.'],['Temporary connection','Existing isolation points, hose routes and safe access affect response time.'],['Power availability','The chiller and pump package must match the site supply or include temporary generation.']],
    faqs:[['How quickly can you respond?','Response time depends on location, equipment availability, access and how quickly the duty can be confirmed. The emergency team works around the clock to coordinate the fastest safe mobilisation.'],['What should I have ready when I call?','Site postcode, current temperatures, known chiller duty, flow and return temperatures, connection sizes, available power and site access details are useful. Call even if some of that is unknown.'],...standardFaqs.slice(2)],
  },
];

export const serviceBySlug = Object.fromEntries(services.map((service) => [service.slug, service]));
