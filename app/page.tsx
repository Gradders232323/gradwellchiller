'use client';

import { FormEvent, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Phone, Snowflake } from 'lucide-react';

const chillers = [
  ['50 kW', 'Compact', 'Small process and comfort cooling', '2.4 L/s'],
  ['100 kW', 'Flexible', 'Commercial buildings and production', '4.8 L/s'],
  ['250 kW', 'High duty', 'Industrial process and data halls', '12.0 L/s'],
  ['500 kW', 'Industrial', 'Large facilities and shutdowns', '24.0 L/s'],
  ['750 kW', 'High capacity', 'Major manufacturing and district loops', '35.8 L/s'],
  ['1 MW+', 'Turnkey', 'Multi-unit engineered packages', 'Designed'],
];

const applications = [
  ['01', 'Process cooling', 'Stable chilled water for manufacturing, food production and demanding industrial processes.'],
  ['02', 'Comfort cooling', 'Temporary cooling for offices, retail, venues and occupied buildings.'],
  ['03', 'Data centres', 'Resilient emergency and supplemental cooling for critical data infrastructure.'],
  ['04', 'Planned shutdowns', 'Keep operations running while permanent chillers are serviced or replaced.'],
  ['05', 'Emergency cooling', 'Rapid response following breakdown, lost capacity or unexpected temperature rise.'],
  ['06', 'Low-temperature duty', 'Specialist configurations for cold storage, trials and demanding temperature targets.'],
];

const applicationSlugs = ['/process-chiller-hire', '/hvac-chiller-hire', '/hvac-chiller-hire', '/chiller-hire', '/emergency-chiller-hire', '/low-temperature-chiller-hire'];

export default function Home() {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); };

  return (
    <main>
      <section className="hero" id="top">
        <img className="hero-image" src="/chiller-hero.png" alt="High-capacity temporary chiller connected at an industrial site" />
        <div className="hero-shade" />
        <header className="site-header shell">
          <a className="brand" href="#top" aria-label="Gradwell Chiller Hire home"><span className="brand-mark"><Snowflake size={19} strokeWidth={2.4} /></span><span>GRADWELL <b>CHILLER HIRE</b></span></a>
          <nav aria-label="Primary navigation"><a href="/chiller-hire">Chiller hire</a><a href="/process-chiller-hire">Process</a><a href="/low-gwp-chiller-hire">Lower GWP</a><a href="/emergency-chiller-hire">Emergency</a></nav>
          <a className="header-call" href="tel:08007160400"><span>24/7 emergency</span> 0800 716 0400</a>
        </header>
        <div className="hero-content shell">
          <p className="eyebrow"><span /> Nationwide temporary cooling</p>
          <h1>CHILLER HIRE.<br /><em>WITHOUT DELAY.</em></h1>
          <p className="hero-copy">High-performance temporary chillers, installed and supported by experienced engineers—from 50 kW to multi-megawatt packages.</p>
          <div className="hero-actions"><a className="button button-primary" href="#quote">Get a chiller quote <ArrowUpRight size={18} /></a><a className="button button-ghost" href="tel:08007160400"><Phone size={17} /> Emergency? Call now</a></div>
        </div>
        <div className="hero-bottom shell">
          <div className="metric"><strong>50 kW–1 MW+</strong><span>Flexible capacity</span></div><div className="metric"><strong>24/7</strong><span>Emergency response</span></div><div className="metric"><strong>UK</strong><span>Nationwide installation</span></div><a className="scroll-link" href="#range">Explore the range <ArrowDown size={16} /></a>
        </div>
      </section>

      <section className="intro shell">
        <p className="section-kicker">Cooling that fits the job</p>
        <div><h2>CAPACITY WHEN<br /><span>YOU NEED IT.</span></h2><p>Whether you are protecting a process, maintaining comfort or responding to a breakdown, we supply more than a machine. Every hire is designed around the required duty, site connections, power supply and operating risks.</p></div>
      </section>

      <section className="range" id="range">
        <div className="shell">
          <div className="section-head"><div><p className="section-kicker lime">Air-cooled chiller range</p><h2>RIGHT SIZE.<br /><span>RIGHT SYSTEM.</span></h2></div><p>Modular units can be combined for larger duties, redundancy or changing demand across a project.</p></div>
          <div className="range-grid">{chillers.map(([power,name,use,flow], index) => <article className="range-card" key={power}><span className="card-index">{String(index+1).padStart(2,'0')}</span><strong>{power}</strong><h3>{name}</h3><p>{use}</p><div><span>Typical flow</span><b>{flow}</b></div><a href="/chiller-hire" aria-label={`Explore ${power} chiller hire`}>Explore hire <ArrowUpRight size={17}/></a></article>)}</div>
          <p className="range-note">Indicative capacities and flow rates. Final selection depends on temperatures, ambient conditions, fluid and application.</p>
        </div>
      </section>

      <section className="applications shell" id="applications">
        <div className="section-head light"><div><p className="section-kicker">Applications</p><h2>COOLING FOR<br /><span>EVERY PRESSURE.</span></h2></div><p>Temporary systems engineered for business continuity, planned works and critical environments.</p></div>
        <div className="application-grid">{applications.map(([n,title,copy], index) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{copy}</p><a href={applicationSlugs[index]} aria-label={`Explore ${title}`}>Explore this service <ArrowRight size={17}/></a></article>)}</div>
      </section>

      <section className="system" id="process">
        <div className="system-image"><img src="/chiller-hero.png" alt="Temporary chiller installation supported by Gradwell Chiller Hire" /></div>
        <div className="system-copy"><p className="section-kicker lime">Designed, installed, supported</p><h2>MORE THAN<br /><span>A CHILLER.</span></h2><p>Our engineers design the complete temporary circuit—making sure the equipment connects cleanly, controls correctly and performs from day one.</p>
          <ol><li><b>01</b><div><strong>Survey and design</strong><span>Duty, flow, connections, access and power assessed.</span></div></li><li><b>02</b><div><strong>Delivery and installation</strong><span>Equipment positioned, connected, filled and commissioned.</span></div></li><li><b>03</b><div><strong>Monitoring and support</strong><span>Responsive technical help throughout the hire.</span></div></li></ol>
        </div>
      </section>

      <section className="package shell">
        <div><p className="section-kicker">Complete hire packages</p><h2>EVERYTHING<br /><span>CONNECTED.</span></h2></div>
        <ul>{['Pumps and pump skids','Buffer tanks','Plate heat exchangers','Flexible hoses and fittings','Air handling units','Power and distribution'].map((item,i)=><li key={item}><b>{String(i+1).padStart(2,'0')}</b><span>{item}</span><Check size={19}/></li>)}</ul>
      </section>

      <section className="emergency"><div className="shell"><div><p className="section-kicker lime">24/7 emergency cooling</p><h2>CHILLER<br /><span>DOWN?</span></h2></div><p>Call our response team now. We’ll assess the duty, identify available equipment and coordinate mobilisation.</p><a href="tel:08007160400"><span>Call now</span><strong>0800 716 0400</strong><ArrowUpRight size={24}/></a></div></section>

      <section className="quote" id="quote"><div className="shell quote-grid"><div><p className="section-kicker">Start with the requirement</p><h2>WHAT NEEDS<br /><span>COOLING?</span></h2><p>Share your temperatures, process load, site and dates. Our specialists will recommend a practical temporary system.</p></div>
        <form onSubmit={submit}>{sent ? <div className="success"><span><Check size={26}/></span><h3>Enquiry received.</h3><p>Thanks — a cooling specialist will review your requirement and get back to you.</p><button type="button" onClick={()=>setSent(false)}>Send another enquiry</button></div> : <><div className="form-row"><label>Your name<input required name="name" placeholder="e.g. Alex Morgan" /></label><label>Work email<input required type="email" name="email" placeholder="alex@company.co.uk" /></label></div><div className="form-row"><label>Phone number<input name="phone" placeholder="07..." /></label><label>Requirement<select required name="requirement" defaultValue=""><option value="" disabled>Select one</option><option>Emergency breakdown</option><option>Planned chiller hire</option><option>Process cooling</option><option>Comfort cooling</option><option>Not sure yet</option></select></label></div><label>Project details<textarea required name="details" rows={4} placeholder="Tell us about the site, dates and required temperatures..." /></label><button className="button button-primary" type="submit">Send enquiry <ArrowUpRight size={18}/></button></>}</form>
      </div></section>

      <footer><div className="shell footer-top"><a className="brand" href="#top"><span className="brand-mark"><Snowflake size={19}/></span><span>GRADWELL <b>CHILLER HIRE</b></span></a><p>Temporary cooling and complete engineered chiller-hire systems—nationwide.</p><a href="tel:08007160400">24/7 emergency<br/><strong>0800 716 0400</strong></a></div><div className="shell footer-bottom"><span>© 2026 Gradwell Chiller Hire</span><span>Nationwide United Kingdom</span><a href="#top">Back to top ↑</a></div></footer>
    </main>
  );
}
