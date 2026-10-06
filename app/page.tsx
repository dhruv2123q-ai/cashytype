import Link from "next/link";

const categories = [
  ["⌨","Typing Jobs","PDF typing, document conversion, image-to-text and formatting."],
  ["📊","Data Entry","Structured data entry, spreadsheet and listing tasks."],
  ["🎧","Transcription","Turn approved audio or video material into accurate text."],
  ["🧩","Micro Tasks","Categorization, verification and other short digital tasks."]
];
const tasks = [
  ["PDF to Word Typing","Typing","₹25"],
  ["Spreadsheet Data Entry","Data Entry","₹15"],
  ["Short Audio Transcription","Transcription","₹40"],
  ["Product Categorization","Micro Task","₹10"]
];

export default function Home(){
  return <>
    <header className="header"><div className="container nav">
      <Link href="/" className="brand"><span className="brandIcon">⌨</span>CashyType</Link>
      <nav className="navlinks"><a href="#work">Work</a><a href="#how">How it works</a><a href="#why">Why us</a><Link href="/login">Login</Link><Link href="/register" className="btn primary">Get Started</Link></nav>
      <button className="menu">☰</button>
    </div></header>

    <section className="hero"><div className="container heroGrid">
      <div><span className="pill">💼 Digital task platform</span><h1>Find flexible <span>online work</span> that fits your day.</h1>
      <p>Explore typing, data entry, transcription, categorization and other digital tasks in one simple platform.</p>
      <div className="actions"><Link href="/register" className="btn primary">Create Account</Link><a href="#work" className="btn secondary">Explore Work</a></div></div>
      <div className="mock"><div className="dash"><div className="dashTop"><span>CashyType</span><span>Dashboard</span></div><div style={{marginTop:25}}>Available balance</div><div className="balance">₹750.00</div><div className="miniGrid"><div className="mini">Tasks completed<b>48</b></div><div className="mini">Accuracy<b>96%</b></div><div className="mini">Available tasks<b>12</b></div><div className="mini">This month<b>₹2,450</b></div></div></div></div>
    </div></section>

    <section className="section" id="work"><div className="container"><div className="head"><h2>Choose the kind of work you want</h2><p>Start with the categories that match your skills. Availability and rates can vary by task.</p></div>
      <div className="grid4">{categories.map(([i,t,d])=><div className="card" key={t}><div className="ico">{i}</div><h3>{t}</h3><p>{d}</p></div>)}</div>
    </div></section>

    <section className="section" style={{background:"#fbfbfe"}}><div className="container"><div className="head"><h2>Sample available tasks</h2><p>A clear task marketplace makes it easier to understand what each assignment involves.</p></div>
      <div className="taskGrid">{tasks.map(([t,c,r])=><div className="task" key={t}><div><h3>{t}</h3><p><span className="tag">{c}</span> &nbsp; Complete according to the task instructions</p></div><div><div className="rate">{r}</div><Link href="/login" className="muted">View →</Link></div></div>)}</div>
    </div></section>

    <section className="section" id="how"><div className="container"><div className="head"><h2>How it works</h2><p>Keep the workflow simple and transparent.</p></div>
      <div className="steps">{[["1","Create an account","Register and complete your profile."],["2","Browse tasks","Choose work that matches your skills."],["3","Submit work","Follow the task instructions and submit."],["4","Get paid","Approved work is credited according to the published terms."]].map(([n,t,d])=><div className="step" key={n}><div className="num">{n}</div><h3>{t}</h3><p className="muted">{d}</p></div>)}</div>
    </div></section>

    <section className="section" id="why"><div className="container"><div className="head"><h2>Built for a better task experience</h2><p>Clear information, practical tools and an interface designed for phones as well as desktops.</p></div><div className="grid4">{[["✓","Clear task details"],["⚡","Simple dashboard"],["🔐","Secure account flow"],["💬","Support channels"]].map(([i,t])=><div className="card" key={t}><div className="ico">{i}</div><h3>{t}</h3><p>Useful information and straightforward navigation without unnecessary complexity.</p></div>)}</div></div></section>

    <div className="container"><section className="cta"><h2>Ready to explore online work?</h2><p>Create your account and browse the task marketplace.</p><Link href="/register" className="btn" style={{background:"#fff",color:"#6546ee"}}>Get Started</Link></section></div>

    <footer className="footer"><div className="container footerGrid"><div><div className="brand" style={{color:"#fff"}}><span className="brandIcon">⌨</span>CashyType</div><p>Online digital task platform.</p></div><div><b>Platform</b><a href="#work">Work categories</a><a href="#how">How it works</a><Link href="/dashboard">Dashboard</Link></div><div><b>Account</b><Link href="/register">Register</Link><Link href="/login">Login</Link><Link href="/payment">Registration payment</Link></div></div></footer>
  </>;
}