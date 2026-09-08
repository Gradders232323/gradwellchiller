import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowRight, ArrowUpRight, Check, Phone, Snowflake } from 'lucide-react';
import { serviceBySlug, services } from '../services';

const siteUrl = 'https://gradwell-chiller-hire.info512176.chatgpt.site';

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = serviceBySlug[slug];
  if (!page) return {};
  const title = `${page.kicker.replace(/\b\w/g, (letter) => letter.toUpperCase())} UK | Gradwell Chiller Hire`;
  return {
    title,
    description: page.description,
    openGraph: { title, description: page.description, images: [`${siteUrl}/chiller-hero.png`] },
    twitter: { card: 'summary_large_image', title, description: page.description, images: [`${siteUrl}/chiller-hero.png`] },
  };
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = serviceBySlug[slug];
  if (!page) notFound();

  return (
    <main className="detail-page">
      <section className="detail-hero">
        <img src="/chiller-hero.png" alt="Temporary industrial chiller installed at a UK site" />
        <div className="detail-overlay" />
        <header className="site-header shell">
          <a className="brand" href="/" aria-label="Gradwell Chiller Hire home"><span className="brand-mark"><Snowflake size={19} strokeWidth={2.4} /></span><span>GRADWELL <b>CHILLER HIRE</b></span></a>
          <nav aria-label="Primary navigation"><a href="/chiller-hire">Chiller hire</a><a href="/process-chiller-hire">Process</a><a href="/low-gwp-chiller-hire">Lower GWP</a><a href="/emergency-chiller-hire">Emergency</a></nav>
          <a className="header-call" href="tel:08007160400"><span>24/7 emergency</span> 0800 716 0400</a>
        </header>
        <div className="detail-hero-copy shell">
          <p className="eyebrow"><span /> {page.kicker}</p>
          <h1>{page.title}<br /><em>{page.accent}</em></h1>
          <p>{page.description}</p>
          <div className="hero-actions"><a className="button button-primary" href="/#quote">Get a cooling quote <ArrowUpRight size={18}/></a><a className="button button-ghost" href="tel:08007160400"><Phone size={17}/> Call the team</a></div>
        </div>
        <div className="detail-stats shell">{page.stats.map(([value,label])=><div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
      </section>

      <section className="detail-intro shell"><p className="section-kicker">The requirement comes first</p><div><h2>{page.introTitle}</h2><p>{page.intro}</p></div></section>

      <section className="detail-features"><div className="shell"><div className="detail-heading"><p className="section-kicker lime">Engineered temporary cooling</p><h2>BUILT AS<br/><span>ONE SYSTEM.</span></h2></div><div className="feature-grid">{page.features.map(([title,copy],index)=><article key={title}><span>{String(index+1).padStart(2,'0')}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

      <section className="detail-process shell"><div><p className="section-kicker">From requirement to running</p><h2>ONE TEAM.<br/><span>FOUR STEPS.</span></h2></div><ol>{page.steps.map(([title,copy],index)=><li key={title}><b>{String(index+1).padStart(2,'0')}</b><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol></section>

      <section className="detail-apps"><div className="shell"><div><p className="section-kicker lime">Where it works</p><h2>READY FOR<br/><span>THE REAL WORLD.</span></h2></div><div className="app-list">{page.applications.map((item,index)=><a href="/#quote" key={item}><b>{String(index+1).padStart(2,'0')}</b><span>{item}</span><ArrowRight size={18}/></a>)}</div></div></section>

      <section className="considerations shell"><div><p className="section-kicker">Before we specify equipment</p><h2>WHAT WE<br/><span>CHECK FIRST.</span></h2><p>The right answer comes from the operating detail. These are the points our engineers will work through with your team.</p></div><div className="consideration-grid">{page.considerations.map(([title,copy],index)=><article key={title}><b>{String(index+1).padStart(2,'0')}</b><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></section>

      <section className="detail-package shell"><div><p className="section-kicker">Complete hire package</p><h2>EVERYTHING<br/><span>CONNECTED.</span></h2><p>One accountable team can coordinate the equipment around your duty, site and programme.</p></div><ul>{['Air-cooled chillers','Pumps and buffer tanks','Plate heat exchangers','Flexible hoses and fittings','Temporary power and distribution','Installation and 24/7 support'].map(item=><li key={item}><Check size={18}/><span>{item}</span></li>)}</ul></section>

      <section className="faq-section"><div className="shell"><div><p className="section-kicker lime">Frequently asked questions</p><h2>PRACTICAL<br/><span>ANSWERS.</span></h2></div><div className="faq-list">{page.faqs.map(([question,answer],index)=><details key={question} open={index===0}><summary><span>{question}</span><b>+</b></summary><p>{answer}</p></details>)}</div></div></section>

      <section className="service-directory shell"><p className="section-kicker">Specialist chiller hire</p><div>{services.filter((item)=>item.slug!==slug).map((item)=><a key={item.slug} href={`/${item.slug}`}><span>{item.kicker}</span><ArrowUpRight size={17}/></a>)}</div></section>

      <section className="detail-cta"><div className="shell"><div><p className="section-kicker lime">Start with the requirement</p><h2>WHAT NEEDS<br/><span>COOLING?</span></h2></div><p>Share your required temperatures, process load, site and dates. Our specialists will recommend a practical temporary system.</p><a className="button button-primary" href="/#quote">Request a quote <ArrowUpRight size={18}/></a></div></section>

      <footer><div className="shell footer-top"><a className="brand" href="/"><span className="brand-mark"><Snowflake size={19}/></span><span>GRADWELL <b>CHILLER HIRE</b></span></a><p>Temporary cooling and complete engineered chiller-hire systems—nationwide.</p><a href="tel:08007160400">24/7 emergency<br/><strong>0800 716 0400</strong></a></div><div className="shell footer-bottom"><span>© 2026 Gradwell Chiller Hire</span><a href="/">All cooling services</a><a href="#top">Back to top ↑</a></div></footer>
    </main>
  );
}
