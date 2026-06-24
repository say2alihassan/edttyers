import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { FaWhatsapp, FaFacebook, FaInstagram, FaEnvelope, FaBars, FaTimes, FaPhone, FaMapMarkerAlt, FaSearch, FaStar, FaGoogle } from 'react-icons/fa';

import service4  from './assets/service4.jpg';
import service0  from './assets/service0.jpg';
import service1  from './assets/service1.jpg';
import service3  from './assets/service3.jpg';
import service00 from './assets/service00.jpg';
import service2  from './assets/service2.jpg';
import michelin    from './assets/michelin.jpg';
import bridgestone from './assets/bridgestone.jpg';
import pirelli     from './assets/pirelli.jpg';
import goodyear    from './assets/goodyear.jpg';

const tyres = [
  { id: 1, company: 'Premium Tyres',   size: 'All Sizes',   type: 'New/Used', image: pirelli     },
  { id: 2, company: 'Mid-Range Tyres', size: 'All Sizes',   type: 'Used',     image: bridgestone },
  { id: 3, company: 'Budget Tyres',    size: 'All Sizes',   type: 'New',      image: michelin    },
  { id: 4, company: 'Michelin',    size: '205/55 R16', type: 'New',      image: michelin    },
  { id: 5, company: 'Bridgestone', size: '195/65 R15', type: 'Used',     image: bridgestone },
  { id: 6, company: 'Pirelli',     size: '215/60 R17', type: 'New',      image: pirelli     },
  { id: 7, company: 'Goodyear',    size: '225/50 R17', type: 'Used',     image: goodyear    },
];

const services = [
  { id: 1, name: 'Tyre Installation',       image: service0,  desc: 'Fast, precise fitting for all tyre sizes using professional-grade equipment.' },
  { id: 2, name: 'Wheel Balancing',         image: service1,  desc: 'Precision balancing that eliminates vibration and extends tyre life.' },
  { id: 3, name: 'Puncture Repair',         image: service3,  desc: 'Same-day patching and plug repair — back on the road in minutes.' },
  { id: 4, name: 'Tyre Replacement',        image: service00, desc: 'Full swap of worn or damaged tyres, balanced and ready to roll.' },
  { id: 5, name: 'Tyre Inspection',         image: service2,  desc: 'Free safety check covering tread depth, pressure, and sidewall condition.' },
  { id: 6, name: 'New & Part-Worn Tyres',   image: michelin,  desc: 'Quality new tyres and affordable part-worn options to suit every budget.' },
  { id: 7, name: 'Free Tyre Safety Check',  image: service3,  desc: 'Complimentary inspection of tread depth, sidewall, and overall tyre health.' },
  { id: 8, name: 'Free Air Pressure Check', image: service0,  desc: 'Quick, no-charge pressure check to keep your tyres safe and fuel-efficient.' },
];

const whyItems = [
  { title: 'Same-Day Service',    body: 'Walk in or book ahead — most jobs done within the hour, no long waits.' },
  { title: 'New & Used Stock',    body: 'Budget-friendly used options alongside brand-new rubber from top manufacturers.' },
  { title: 'All Vehicle Types',   body: 'Cars, vans, 4x4s — we stock the sizes and carry the tools to fit them.' },
  { title: 'Honest Pricing',      body: 'No hidden fees. We quote before we touch the vehicle, every time.' },
];

function BookingForm() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', date: '', time: '', notes: '' });
  const [submitted, setSubmitted] = useState(false);

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = [
      `*New Booking Request — Edmonton & Tottenham Tyres*`,
      ``,
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      `*Service:* ${form.service}`,
      `*Preferred Date:* ${form.date}`,
      `*Preferred Time:* ${form.time}`,
      form.notes ? `*Notes:* ${form.notes}` : null,
    ].filter(Boolean).join('\n');

    const url = `https://wa.me/447881450926?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  if (submitted) return (
    <div className="booking-form" style={{ alignItems: 'center', justifyContent: 'center', minHeight: 320, textAlign: 'center', gap: 24 }}>
      <div style={{ fontSize: 48 }}>✅</div>
      <div style={{ fontFamily: 'var(--ff-display)', fontSize: 28, color: 'var(--white)', letterSpacing: '0.04em' }}>WhatsApp Opened!</div>
      <p style={{ fontSize: 13, color: 'var(--chrome)', lineHeight: 1.6 }}>Your booking details have been pre-filled.<br />Just hit send and we'll confirm shortly.</p>
      <button onClick={() => setSubmitted(false)} className="btn-secondary" style={{ marginTop: 8 }}>Make Another Booking</button>
    </div>
  );

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h4>Book a Service</h4>
      <div className="form-row">
        <div className="form-field">
          <label>Your Name</label>
          <input type="text" placeholder="John Smith" required value={form.name} onChange={e => set('name', e.target.value)} />
        </div>
        <div className="form-field">
          <label>Phone Number</label>
          <input type="tel" placeholder="+44 7700 000000" required value={form.phone} onChange={e => set('phone', e.target.value)} />
        </div>
      </div>
      <div className="form-field full">
        <label>Service Required</label>
        <select required value={form.service} onChange={e => set('service', e.target.value)}>
          <option value="">Select a service…</option>
          <option>Tyre Installation</option>
          <option>Wheel Balancing</option>
          <option>Puncture Repair</option>
          <option>Tyre Replacement</option>
          <option>Tyre Inspection</option>
          <option>New & Part-Worn Tyres</option>
          <option>Free Tyre Safety Check</option>
          <option>Free Air Pressure Check</option>
        </select>
      </div>
      <div className="form-row">
        <div className="form-field">
          <label>Preferred Date</label>
          <input type="date" required value={form.date} min={new Date().toISOString().split('T')[0]} onChange={e => set('date', e.target.value)} />
        </div>
        <div className="form-field">
          <label>Preferred Time</label>
          <select value={form.time} onChange={e => set('time', e.target.value)}>
            <option value="">Any time</option>
            <option>Morning (8am – 12pm)</option>
            <option>Afternoon (12pm – 4pm)</option>
            <option>Late (4pm – 6pm)</option>
          </select>
        </div>
      </div>
      <div className="form-field full">
        <label>Notes (optional)</label>
        <textarea placeholder="Tyre size, vehicle make/model, or anything else…" value={form.notes} onChange={e => set('notes', e.target.value)} />
      </div>
      <button type="submit" className="form-submit">
        <FaWhatsapp size={18} /> Send Booking via WhatsApp
      </button>
      <p className="form-note">Opens WhatsApp with your details pre-filled. We typically reply within the hour.</p>
    </form>
  );
}

function StarRating({ rating }) {
  return (
    <div className="review-stars">
      {[1,2,3,4,5].map(n => (
        <FaStar key={n} style={{ opacity: n <= rating ? 1 : 0.25 }} />
      ))}
    </div>
  );
}

function Reviews() {
  const [data, setData]       = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(false);

  useEffect(() => {
    fetch('/api/reviews')
      .then(r => r.json())
      .then(d => { setData(d); setLoading(false); })
      .catch(() => { setError(true); setLoading(false); });
  }, []);

  // Re-run reveal observer after reviews load
  useEffect(() => {
    if (!data) return;
    const els = document.querySelectorAll('#reviews .reveal:not(.visible)');
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [data]);

  return (
    <section className="section reviews-section" id="reviews">
      <div className="section-header reveal">
        <p className="section-eyebrow">What Customers Say</p>
        <h2 className="section-title">Google Reviews</h2>
        <div className="section-rule" />
      </div>

      {loading && <p className="reviews-loading">Loading reviews…</p>}
      {error   && <p className="reviews-error">Could not load reviews right now. Visit our <a href="https://www.google.com/maps/place/?q=place_id:ChIJ8cIUG-gfdkgR7-TqVssPyG0" target="_blank" rel="noreferrer" style={{color:'var(--amber)'}}>Google listing</a> to read them.</p>}

      {data && (
        <>
          <div className="reviews-meta">
            <div className="reviews-score">{data.rating?.toFixed(1)}</div>
            <div>
              <div className="reviews-stars">
                {[1,2,3,4,5].map(n => <FaStar key={n} style={{ opacity: n <= Math.round(data.rating) ? 1 : 0.25 }} />)}
              </div>
              <div className="reviews-count">{data.user_ratings_total} reviews on Google</div>
            </div>
          </div>

          <div className="reviews-grid">
            {(data.reviews || []).map((r, i) => (
              <div className="review-card" key={i}>
                <div className="review-header">
                  <div className="review-avatar">{r.author_name?.[0]?.toUpperCase()}</div>
                  <div>
                    <div className="review-author">{r.author_name}</div>
                    <div className="review-time">{r.relative_time_description}</div>
                  </div>
                </div>
                <StarRating rating={r.rating} />
                <p className="review-text">{r.text}</p>
              </div>
            ))}
          </div>

          <div className="google-badge">
            <FaGoogle />
            <span>Reviews from <a href="https://www.google.com/maps/place/?q=place_id:ChIJ8cIUG-gfdkgR7-TqVssPyG0" target="_blank" rel="noreferrer">Google Maps</a></span>
          </div>
        </>
      )}
    </section>
  );
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function StatCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1400;
        const step = Math.ceil(target / (duration / 16));
        let current = 0;
        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          setCount(current);
          if (current >= target) clearInterval(timer);
        }, 16);
      }
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function App() {
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [leftOpen,  setLeftOpen]  = useState(false);
  const [rightOpen, setRightOpen] = useState(false);
  const [search,    setSearch]    = useState('');

  useReveal();

  const closeAll = () => { setLeftOpen(false); setRightOpen(false); };

  const filtered = tyres.filter(t =>
    !search.trim() ||
    t.company.toLowerCase().includes(search.toLowerCase()) ||
    t.size.toLowerCase().includes(search.toLowerCase()) ||
    t.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">

      {/* ── Navbar ── */}
      <nav className="navbar">
        <button className="menu-btn" aria-label="Menu" onClick={() => setLeftOpen(true)}>
          <FaBars size={22} />
        </button>

        <span className="nav-logo">Edmonton <span>&amp;</span> Tottenham Tyres</span>

        <div className="nav-links">
          <a href="#tyres">Tyres</a>
          <a href="#services">Services</a>
          <a href="#why">Why Us</a>
          <a href="#booking">Book a Service</a>
          <a href="#contact" className="nav-cta" onClick={e => { e.preventDefault(); setRightOpen(true); }}>Contact Us</a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: `url(${service4})` }} />
        <div className="hero-tread" aria-hidden="true" />
        <div className="hero-content">
          <p className="hero-eyebrow">North London's Local Tyre Specialists</p>
          <h1>
            Every Road.<br />
            <em>Every Tyre.</em>
          </h1>
          <p className="hero-sub">
            New and used tyres, same-day fitting, wheel alignment and puncture repair —
            all from our Edmonton workshop. Walk-ins welcome.
          </p>
          <div className="hero-actions">
            <a href="https://wa.me/447881450926" target="_blank" rel="noreferrer" className="btn-primary">
              <FaWhatsapp /> Book via WhatsApp
            </a>
            <a href="tel:+447881450926" className="btn-secondary">
              <FaPhone /> Call Now
            </a>
          </div>
          <div className="hero-search">
            <input
              type="text"
              placeholder="Search by brand, size or type…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              aria-label="Search tyres"
            />
            <button aria-label="Search"><FaSearch /></button>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div className="stats-bar">
        {[
          { target: 15, suffix: '+', label: 'Years Trading' },
          { target: 4,  suffix: '',  label: 'Premium Brands' },
          { target: 5,  suffix: '',  label: 'Services Offered' },
          { target: 7,  suffix: '',  label: 'Days a Week' },
        ].map(s => (
          <div className="stat-item" key={s.label}>
            <div className="stat-number"><StatCounter target={s.target} suffix={s.suffix} /></div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── Tyres ── */}
      <section className="section" id="tyres">
        <div className="section-header reveal">
          <p className="section-eyebrow">In Stock</p>
          <h2 className="section-title">Our Tyre Range</h2>
          <div className="section-rule" />
        </div>
        <div className="tyres-grid">
          {filtered.length > 0 ? filtered.map((t, i) => (
            <div className="tyre-card reveal" key={t.id} style={{ transitionDelay: `${i * 80}ms` }}>
              <img src={t.image} alt={t.company} className="tyre-card-img" />
              <div className="tyre-card-body">
                <div className="tyre-brand">{t.company}</div>
                <div className="tyre-meta">
                  <span className="tyre-tag">{t.size}</span>
                  <span className={`tyre-tag ${t.type === 'Used' ? 'used' : t.type === 'New/Used' ? 'both' : ''}`}>{t.type}</span>
                </div>
              </div>
            </div>
          )) : (
            <p style={{ color: 'var(--chrome)', padding: '16px 0' }}>No tyres match your search. Try a different brand or size.</p>
          )}
        </div>
      </section>

      {/* ── Brands ── */}
      <div className="brands-section">
        <p className="brands-label">Brands We Stock &amp; Fit</p>
        <div className="brands-row">
          {[{ img: michelin, alt: 'Michelin' }, { img: bridgestone, alt: 'Bridgestone' }, { img: pirelli, alt: 'Pirelli' }, { img: goodyear, alt: 'Goodyear' }].map(b => (
            <img key={b.alt} src={b.img} alt={b.alt} className="brand-img" />
          ))}
        </div>
      </div>

      {/* ── Services ── */}
      <section className="section section-alt" id="services">
        <div className="section-header reveal">
          <p className="section-eyebrow">What We Do</p>
          <h2 className="section-title">Our Services</h2>
          <div className="section-rule" />
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card reveal" key={s.id} style={{ transitionDelay: `${i * 60}ms` }}>
              <img src={s.image} alt={s.name} className="service-card-img" />
              <div className="service-name">{s.name}</div>
              <p className="service-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Booking ── */}
      <section className="section booking-section" id="booking">
        <div className="section-header reveal">
          <p className="section-eyebrow">Get in Touch</p>
          <h2 className="section-title">Book a Service</h2>
          <div className="section-rule" />
        </div>
        <div className="booking-wrap">
          <div className="booking-pitch reveal">
            <h3>Same-day appointments available</h3>
            <p>Fill in the form and your details will open directly in WhatsApp — we'll confirm your slot fast. Walk-ins always welcome too.</p>
            <ul className="booking-perks">
              <li>Most jobs completed within the hour</li>
              <li>New and part-worn tyres in stock</li>
              <li>No hidden charges — price agreed before we start</li>
              <li>Open 7 days a week</li>
            </ul>
          </div>
          <div className="reveal">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <Reviews />

      {/* ── Why Us ── */}
      <section className="section" id="why">
        <div className="section-header reveal">
          <p className="section-eyebrow">Why Choose Us</p>
          <h2 className="section-title">Built on Trust</h2>
          <div className="section-rule" />
        </div>
        <div className="why-grid">
          {whyItems.map((w, i) => (
            <div className="why-item reveal" key={w.title} style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="why-number">0{i + 1}</div>
              <div className="why-title">{w.title}</div>
              <p className="why-body">{w.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact band ── */}
      <div className="contact-band" id="contact">
        <div className="contact-band-text">
          <h2>Ready to get rolling?</h2>
          <p>Call, WhatsApp, or email — we respond fast.</p>
        </div>
        <div className="contact-band-links">
          <a href="https://wa.me/447881450926" target="_blank" rel="noreferrer" className="contact-link wa">
            <FaWhatsapp /> WhatsApp
          </a>
          <a href="tel:+447881450926" className="contact-link">
            <FaPhone /> +44 7881 450926
          </a>
          <a href="mailto:Edmontontryes@outlook.com" className="contact-link">
            <FaEnvelope /> Email Us
          </a>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <div className="footer-brand-name">Edmonton <span>&amp;</span> Tottenham Tyres</div>
            <p className="footer-about">
              North London's trusted tyre shop. New and used stock from leading brands,
              fitted same day by experienced technicians at our Edmonton workshop.
            </p>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Services</div>
            <ul>
              {services.map(s => <li key={s.id}><a href="#services">{s.name}</a></li>)}
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Contact</div>
            <ul>
              <li><a href="tel:+447881450926">+44 7881 450926</a></li>
              <li><a href="mailto:Edmontontryes@outlook.com">Edmontontryes@outlook.com</a></li>
              <li>
                <a href="https://www.google.com/maps/search/?api=1&query=Unit+15,+Landmark,+Shaftesbury+Rd,+London+N18+1UB" target="_blank" rel="noreferrer">
                  Unit 15, Shaftesbury Rd, London N18 1UB
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">© 2026 Edmonton &amp; Tottenham Tyres. All rights reserved.</span>
          <div className="footer-social">
            <a href="https://www.facebook.com/share/17svxDrpha/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="social-icon" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://www.instagram.com/edmontontyres" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
            <a href="mailto:Edmontontryes@outlook.com" className="social-icon" aria-label="Email"><FaEnvelope /></a>
          </div>
        </div>
      </footer>

      {/* ── Overlay ── */}
      <div className={`panel-overlay ${leftOpen || rightOpen ? 'open' : ''}`} onClick={closeAll} />

      {/* ── Left panel – Products ── */}
      <div className={`left-panel ${leftOpen ? 'open' : ''}`} role="dialog" aria-label="Products menu">
        <button className="panel-close" onClick={() => setLeftOpen(false)} aria-label="Close"><FaTimes /></button>
        <div className="panel-title">Products</div>
        <div className="panel-rule" />
        <ul className="panel-list">
          {tyres.map(t => (
            <li key={t.id}><span>{t.company} — {t.size} ({t.type})</span></li>
          ))}
        </ul>
      </div>

      {/* ── Right panel – Contact ── */}
      <div className={`right-panel ${rightOpen ? 'open' : ''}`} role="dialog" aria-label="Contact details">
        <button className="panel-close" onClick={() => setRightOpen(false)} aria-label="Close"><FaTimes /></button>
        <div className="panel-title">Contact</div>
        <div className="panel-rule" />
        <div className="contact-detail">
          <FaPhone className="contact-detail-icon" />
          <div className="contact-detail-text"><a href="tel:+447881450926">+44 7881 450926</a></div>
        </div>
        <div className="contact-detail">
          <FaWhatsapp className="contact-detail-icon" />
          <div className="contact-detail-text"><a href="https://wa.me/447881450926" target="_blank" rel="noreferrer">WhatsApp us</a></div>
        </div>
        <div className="contact-detail">
          <FaEnvelope className="contact-detail-icon" />
          <div className="contact-detail-text"><a href="mailto:Edmontontryes@outlook.com">Edmontontryes@outlook.com</a></div>
        </div>
        <div className="contact-detail">
          <FaMapMarkerAlt className="contact-detail-icon" />
          <div className="contact-detail-text">
            <a href="https://www.google.com/maps/search/?api=1&query=Unit+15,+Landmark,+Shaftesbury+Rd,+London+N18+1UB" target="_blank" rel="noreferrer">
              Unit 15, Landmark, Shaftesbury Rd,<br />London N18 1UB
            </a>
          </div>
        </div>
      </div>

      {/* ── WhatsApp float ── */}
      <a href="https://wa.me/447881450926" target="_blank" rel="noreferrer" className="whatsapp-float" aria-label="Chat on WhatsApp">
        <FaWhatsapp />
      </a>

    </div>
  );
}
