import { useState } from "react";
import "./App.css";

const gifts = [
  { id: "love", name: "Love", kind: "love" },
  { id: "bouquet", name: "Bouquet", kind: "bouquet" },
  { id: "star", name: "Star", kind: "star" },
  { id: "bear", name: "Love Bear", kind: "bear" },
  { id: "universe", name: "Universe", kind: "universe" },
  { id: "diamond", name: "Diamond", kind: "diamond" },
];

function Icon({ name, size = 20 }) {
  const paths = {
    home: <><path d="m3 10 9-7 9 7" /><path d="M5 9v12h14V9M9 21v-7h6v7" /></>,
    compass: <><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2 5-5 2 2-5z" /></>,
    heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />,
    search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></>,
    gift: <><rect x="3" y="8" width="18" height="13" rx="2" /><path d="M12 8v13M3 12h18M12 8H7a2.5 2.5 0 1 1 2.5-2.5C9.5 7 12 8 12 8Zm0 0h5a2.5 2.5 0 1 0-2.5-2.5C14.5 7 12 8 12 8Z" /></>,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
    arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
    broadcast: <><circle cx="12" cy="12" r="2" /><path d="M8.5 8.5a5 5 0 0 0 0 7M15.5 8.5a5 5 0 0 1 0 7M5.5 5.5a9 9 0 0 0 0 13M18.5 5.5a9 9 0 0 1 0 13" /></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function GiftArtwork({ kind }) {
  if (kind === "love") return <svg viewBox="0 0 100 100" className="gift-artwork"><defs><linearGradient id="g-love" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#ffc2dd"/><stop offset=".48" stopColor="#ff397e"/><stop offset="1" stopColor="#a90043"/></linearGradient></defs><path d="M50 84 14 49C-1 31 22 7 40 23L50 33 60 23C78 7 101 31 86 49Z" fill="url(#g-love)" stroke="#ffe1ef" strokeWidth="2"/><path d="m25 31 11-5 7 8" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity=".8"/></svg>;
  if (kind === "bouquet") return <svg viewBox="0 0 100 100" className="gift-artwork"><path d="m30 45 21 43 21-43Z" fill="#ff467f" stroke="#ffc0d7" strokeWidth="2"/><path d="M51 85 35 46M51 85 67 46" stroke="#ffe2ec" strokeWidth="2"/><path d="M49 68Q25 56 22 40Q41 39 49 68ZM52 70Q76 57 77 39Q57 40 52 70ZM51 57Q38 34 48 17Q65 34 51 57Z" fill="#49d6a0" stroke="#b5ffe2" strokeWidth="1.5"/><g fill="#ff4b91" stroke="#ffc2d8" strokeWidth="1.5"><circle cx="26" cy="30" r="10"/><circle cx="43" cy="22" r="10"/><circle cx="60" cy="25" r="11"/><circle cx="74" cy="34" r="9"/></g><g fill="#ffd76d"><circle cx="26" cy="30" r="4"/><circle cx="43" cy="22" r="4"/><circle cx="60" cy="25" r="4"/><circle cx="74" cy="34" r="4"/></g></svg>;
  if (kind === "star") return <svg viewBox="0 0 100 100" className="gift-artwork"><defs><linearGradient id="g-star" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fff6ad"/><stop offset=".5" stopColor="#ffb52f"/><stop offset="1" stopColor="#e85a16"/></linearGradient></defs><path d="m50 8 12 27 29 3-22 20 7 29-26-15-26 15 7-29L9 38l29-3Z" fill="url(#g-star)" stroke="#fff3b0" strokeWidth="2.5" strokeLinejoin="round"/><path d="m50 8 0 64 19-14-7-23Z" fill="#fff" opacity=".23"/></svg>;
  if (kind === "bear") return <svg viewBox="0 0 100 100" className="gift-artwork"><defs><linearGradient id="g-bear" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#ffd4d8"/><stop offset="1" stopColor="#e96b95"/></linearGradient></defs><circle cx="29" cy="26" r="13" fill="url(#g-bear)" stroke="#ffe5eb" strokeWidth="2"/><circle cx="71" cy="26" r="13" fill="url(#g-bear)" stroke="#ffe5eb" strokeWidth="2"/><circle cx="29" cy="26" r="6" fill="#b74d73"/><circle cx="71" cy="26" r="6" fill="#b74d73"/><ellipse cx="50" cy="56" rx="31" ry="32" fill="url(#g-bear)" stroke="#ffe5eb" strokeWidth="2"/><ellipse cx="50" cy="44" rx="21" ry="19" fill="#ffe7e5"/><circle cx="42" cy="42" r="2.5" fill="#62324a"/><circle cx="58" cy="42" r="2.5" fill="#62324a"/><ellipse cx="50" cy="49" rx="5" ry="4" fill="#b74d73"/><path d="M50 53q-7 7-12 0m12 0q7 7 12 0" fill="none" stroke="#b74d73" strokeWidth="2" strokeLinecap="round"/><path d="M38 66q12-10 24 0l-12 14Z" fill="#ff276e" stroke="#fff0f5" strokeWidth="2"/></svg>;
  if (kind === "universe") return <svg viewBox="0 0 100 100" className="gift-artwork"><defs><radialGradient id="g-universe"><stop stopColor="#fff"/><stop offset=".25" stopColor="#f9a7ff"/><stop offset=".65" stopColor="#7a48ff"/><stop offset="1" stopColor="#151a65"/></radialGradient></defs><circle cx="50" cy="50" r="28" fill="url(#g-universe)" stroke="#e9c5ff" strokeWidth="2"/><ellipse cx="50" cy="50" rx="43" ry="15" fill="none" stroke="#ff72c5" strokeWidth="4" transform="rotate(-30 50 50)"/><ellipse cx="50" cy="50" rx="43" ry="15" fill="none" stroke="#9ce7ff" strokeWidth="1.5" transform="rotate(35 50 50)"/><circle cx="26" cy="25" r="3" fill="#fff"/><circle cx="80" cy="24" r="2" fill="#ffe1fa"/><circle cx="19" cy="70" r="2" fill="#fff"/><circle cx="75" cy="79" r="3" fill="#fff"/><path d="m49 30 2 7 7 2-7 2-2 7-2-7-7-2 7-2Z" fill="#fff"/></svg>;
  return <svg viewBox="0 0 100 100" className="gift-artwork"><defs><linearGradient id="g-diamond" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fff"/><stop offset=".25" stopColor="#a5f5ff"/><stop offset=".6" stopColor="#5996ff"/><stop offset="1" stopColor="#c7a0ff"/></linearGradient></defs><path d="M25 16h50l17 23-42 49L8 39Z" fill="url(#g-diamond)" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/><path d="M25 16 38 39 8 39M75 16 62 39 92 39M38 39l12 49 12-49M25 16l25 72 25-72M8 39h84" fill="none" stroke="#fff" strokeWidth="1.5" opacity=".9"/></svg>;
}

function GiftCard({ gift, selected, onSelect }) {
  return <button className={`gift-card ${selected ? "gift-selected" : ""}`} onClick={() => onSelect(gift.id)} type="button" aria-pressed={selected}>
    <span className={`gift-art gift-art-${gift.kind}`}><GiftArtwork kind={gift.kind}/></span>
    <span className="gift-name">{gift.name}</span>
    <span className="gift-price">Virtual gift</span>
  </button>;
}

export default function App() {
  const [activeTab, setActiveTab] = useState("For You");
  const [selectedGift, setSelectedGift] = useState("love");
  const [search, setSearch] = useState("");
  const [showGiftGuide, setShowGiftGuide] = useState(false);

  return <div className="-app">
    <header className="app-header">
      <button className="brand" type="button" onClick={() => setActiveTab("For You")} aria-label="Vybz home">
        <span className="brand-symbol"><span/></span><span className="brand-word">vybz<span>.</span></span>
      </button>
      <label className="header-search"><Icon name="search" size={18}/><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search creators" aria-label="Search creators"/><kbd>/</kbd></label>
      <div className="header-actions">
        <span className="header-tag"><span className="status-dot"/> A new kind of live</span>
        <button className="profile-button" type="button" onClick={() => setActiveTab("Profile")}><span className="profile-avatar"><Icon name="user" size={18}/></span><span>Account</span></button>
      </div>
    </header>

    <div className="app-layout">
      <aside className="sidebar">
        <div className="sidebar-label">DISCOVER</div>
        {["For You", "Explore", "Following"].map((tab, i) => <button key={tab} type="button" className={`sidebar-link ${activeTab === tab ? "sidebar-active" : ""}`} onClick={() => setActiveTab(tab)}><Icon name={i === 0 ? "home" : i === 1 ? "compass" : "heart"}/><span>{tab}</span>{tab === "Following" && <span className="sidebar-count">0</span>}</button>)}
        <div className="sidebar-divider"/>
        <div className="sidebar-label">YOUR SPACE</div>
        <button className="sidebar-link" type="button" onClick={() => setShowGiftGuide((value) => !value)}><Icon name="gift"/><span>Gift collection</span></button>
        <div className="sidebar-bottom">
          <div className="sidebar-promo"><span className="promo-orb"/><strong>Your people, your moment.</strong><p>Find your community when creators go live.</p></div>
          <span className="sidebar-footer">Vybz. · Stream whatever you want.</span>
        </div>
      </aside>

      <main className="main-content">
        <section className="welcome-section">
          <div className="welcome-copy">
            <div className="eyebrow"><span/> LIVE, WHEN IT'S LIVE</div>
            <h1>Your world.<br/><span>Your people.</span></h1>
            <p>Drop into a live room, share a moment, and make someone's day.</p>
            <div className="welcome-actions"><button className="primary-button" type="button" onClick={() => setActiveTab("Explore")}>Explore streams <Icon name="arrow" size={17}/></button><span className="live-status"><span className="status-dot"/> Waiting for live creators</span></div>
          </div>
          <div className="welcome-art" aria-hidden="true"><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="art-orbit orbit-three"/><div className="art-core"><Icon name="broadcast" size={46}/></div><span className="art-spark spark-one"/><span className="art-spark spark-two"/><span className="art-spark spark-three"/></div>
        </section>

        <section className="live-section">
          <div className="section-heading"><div><div className="section-kicker">THE LIVE FLOOR</div><h2>{activeTab === "Following" ? "Your following" : activeTab === "Profile" ? "Your account" : activeTab === "Explore" ? "Explore live rooms" : "Live right now"} <span className="live-pulse"/></h2><p>{activeTab === "Following" ? "Creators you follow will appear here when they go live." : activeTab === "Profile" ? "Your profile tools will be available when accounts are connected." : "Real broadcasts only. No made-up creators or viewer counts."}</p></div><span className="section-count"><span className="count-dot"/> 0 LIVE</span></div>
          <div className="empty-live">
            <div className="empty-visual"><div className="empty-orbit empty-orbit-a"/><div className="empty-orbit empty-orbit-b"/><div className="empty-center"><Icon name="broadcast" size={34}/></div><span className="empty-star empty-star-a">✦</span><span className="empty-star empty-star-b">✧</span></div>
            <div className="empty-copy"><span className="empty-label">ROOMS ARE QUIET</span><h3>No one is live right now.</h3><p>When a creator starts a real broadcast, their stream card will appear here. No fake activity, just the real thing.</p><button className="outline-button" type="button" onClick={() => setActiveTab("Explore")}>Explore Vybz <Icon name="arrow" size={16}/></button></div>
          </div>
          <div className="live-grid" aria-label="Live stream cards">
            {/* Real stream cards will render here from the API when broadcasts are available. */}
          </div>
        </section>

        <section className={`gift-feature ${showGiftGuide ? "gift-feature-expanded" : ""}`}>
          <div className="gift-feature-top"><div className="gift-feature-heading"><span className="gift-heading-icon"><Icon name="gift" size={21}/></span><div><div className="section-kicker">A LITTLE EXTRA LOVE</div><h2>Meet the gift collection</h2><p>Signature Vybz gifts, designed to feel special.</p></div></div><button className="text-button" type="button" onClick={() => setShowGiftGuide((value) => !value)}>{showGiftGuide ? "Hide collection" : "View collection"} <Icon name="arrow" size={16}/></button></div>
          <div className="gift-preview-grid">{gifts.map((gift) => <GiftCard key={gift.id} gift={gift} selected={selectedGift === gift.id} onSelect={setSelectedGift}/>)}</div>
          {showGiftGuide && <div className="gift-guide-note"><span className="guide-dot"/> Gift selection is ready for integration. Sending gifts will be enabled when authenticated live rooms, balances, and server-side gift transactions are connected.</div>}
        </section>
        <footer className="page-footer"><span>Vybz<span>.</span></span><span>Built for real moments.</span><span>Live rooms will appear when broadcasts are connected.</span></footer>
      </main>
    </div>

    <nav className="mobile-nav" aria-label="Mobile navigation">
      {[["For You","home"],["Explore","compass"],["Following","heart"],["Gift collection","gift"]].map(([tab, icon]) => <button key={tab} className={activeTab === tab ? "mobile-active" : ""} type="button" onClick={() => {setActiveTab(tab); if (tab === "Gift collection") setShowGiftGuide(true);}}><Icon name={icon} size={20}/><span>{tab === "For You" ? "Home" : tab === "Gift collection" ? "Gifts" : tab}</span></button>)}
    </nav>
  </div>;
}
