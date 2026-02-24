import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Network,
  BarChart3,
  CalendarClock,
  FileCheck2,
  Target,
  Building2,  BadgeCheck,
  Mail,
  Phone,
  Globe,
  ArrowRight,
  Search,
} from "lucide-react";

/**
 * JLG Planning Consulting – Risk Services
 * Single-file React site (Tailwind assumed available).
 *
 * How to use the logo:
 * - Put your image at: /public/jlg-logo.jpg  (or change LOGO_SRC)
 */
const LOGO_SRC = "jlg-logo.jpg"; // ensure file is inside /public folder

const ACCENT = "from-sky-500 to-orange-500";

const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{ duration: 0.55, delay }}
  >
    {children}
  </motion.div>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/90">
    {children}
  </span>
);

const Card = ({ title, icon: Icon, children }) => (
  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.6)]">
    <div className="mb-3 flex items-center gap-3">
      <div className="rounded-xl bg-white/10 p-2">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <h3 className="text-base font-semibold text-white">{title}</h3>
    </div>
    <div className="text-sm leading-relaxed text-white/80">{children}</div>
  </div>
);

const Section = ({ id, eyebrow, title, subtitle, children }) => (
  <section id={id} className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
    <FadeIn>
      <div className="mb-10">
        {eyebrow ? (
          <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/60">
            {eyebrow}
          </div>
        ) : null}
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
        {subtitle ? <p className="mt-3 max-w-3xl text-sm text-white/75">{subtitle}</p> : null}
      </div>
    </FadeIn>
    {children}
  </section>
);

const Nav = () => {
  const [logoError, setLogoError] = useState(false);
  const items = [
    { label: "Services", href: "#services" },
    { label: "How we work", href: "#method" },
    { label: "Experience", href: "#experience" },
    { label: "Industries", href: "#industries" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <div className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={LOGO_SRC}
              alt="JLG Planning Consulting"
              className="h-10 w-auto object-contain"
              onError={() => setLogoError(true)}
            />
            {logoError && (
              <span className="ml-2 text-sm font-semibold text-white">JLG</span>
            )}
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-white">JLG Planning Consulting</div>
            <div className="text-xs text-white/60">Schedule & Integrated Risk Services</div>
          </div>
        </a>

        <div className="hidden items-center gap-6 sm:flex">
          {items.map((it) => (
            <a
              key={it.href}
              href={it.href}
              className="text-sm text-white/70 hover:text-white transition"
            >
              {it.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`inline-flex items-center gap-2 rounded-xl bg-gradient-to-r ${ACCENT} px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/10 hover:opacity-95 transition`}
          >
            Talk to us <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <a
          href="#contact"
          className={`sm:hidden inline-flex items-center gap-2 rounded-xl bg-gradient-to-r ${ACCENT} px-3 py-2 text-sm font-semibold text-slate-950`}
        >
          Contact
        </a>
      </div>
    </div>
  );
};

const Hero = () => (
  <header id="top" className="relative overflow-hidden">
    <div className="absolute inset-0 -z-10">
      <div className="absolute -top-48 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="absolute -bottom-64 right-[-120px] h-[520px] w-[520px] rounded-full bg-orange-500/15 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
    </div>

    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
      <div className="grid items-center gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-2"
          >
            <Pill>
              <ShieldCheck className="mr-2 h-4 w-4" /> Schedule Risk & Confidence
            </Pill>
            <Pill>
              <Network className="mr-2 h-4 w-4" /> Integrated Cost–Schedule Views
            </Pill>
            <Pill>
              <BadgeCheck className="mr-2 h-4 w-4" /> AACE-aligned practices
            </Pill>
            <Pill>
              <Search className="mr-2 h-4 w-4" /> Independent / Expert Advisory
            </Pill>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl"
          >
            Risk services that make schedules
            <span className={`bg-gradient-to-r ${ACCENT} bg-clip-text text-transparent`}> decision-ready</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="mt-4 max-w-2xl text-base leading-relaxed text-white/75"
          >
            JLG Planning Consulting helps owners and contractors quantify schedule uncertainty, prioritize risk drivers,
            and communicate confidence in a way executives can act on—without breaking the control schedule.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-6 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#services"
              className={`inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r ${ACCENT} px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/10 hover:opacity-95 transition`}
            >
              Explore services <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#experience"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              View experience <Building2 className="h-4 w-4" />
            </a>
          </motion.div>

          <div className="mt-6 flex flex-wrap gap-3 text-xs text-white/60">
            <span className="inline-flex items-center gap-2"><Globe className="h-4 w-4" /> Canada • Internationally</span>
            <span className="inline-flex items-center gap-2"><CalendarClock className="h-4 w-4" /> 18+ years in E&C</span>
            <span className="inline-flex items-center gap-2"><BarChart3 className="h-4 w-4" /> Monte Carlo / Ranging / EV</span>
          </div>

          {/* Tools strip */}
          <div className="mt-4 flex flex-wrap gap-2">
            {["Safran Risk", "Primavera P6", "EVM", "Portfolio Controls"].map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80"
              >
                {t}
              </span>
            ))}
          </div>

          
        </div>

        <div className="lg:col-span-5">
          <FadeIn delay={0.15}>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.8)]">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-white">Typical deliverables</div>
                  <div className="mt-1 text-xs text-white/60">fast, practical, decision-focused</div>
                </div>
                <div className={`h-10 w-10 rounded-2xl bg-gradient-to-r ${ACCENT} opacity-90`} />
              </div>

              <ul className="mt-5 space-y-3 text-sm text-white/80">
                {[
                  "End-to-End Risk Cycle: qualitative risk identification through quantitative Monte Carlo modeling (P50/P80, correlation, sensitivity)",
                  "Critical path & near-critical path drivers summary",
                  "Confidence-ready management summary schedule (L1/L2)",
                  "Contingency / management reserve logic and narratives",
                  "Implementation coaching (P6, reporting, governance)",
                  "Schedule health assessment (logic, constraints, open ends, realism)",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-white/40" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-white/80">
                  <FileCheck2 className="h-4 w-4" /> “Shadow schedule” approach
                </div>
                <p className="mt-2 text-xs leading-relaxed text-white/65">
                  Run risk on a purpose-built summary model (L1/L2) to quantify outcomes without changing the live
                  control schedule. Preserve governance while improving decision confidence.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  </header>
);

const Services = () => (
  <Section
    id="services"
    eyebrow="What we do"
    title="Risk, forensic & schedule advisory services"
    subtitle="Technical, standards-aligned risk analysis designed for executive-level decisions."
  >
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      <FadeIn delay={0.02}>
        <Card title="Schedule Risk Analysis (SRA)" icon={CalendarClock}>
          Quantify completion confidence (P50/P80) using Monte Carlo simulation platforms such as <strong>Safran Risk</strong>.
          Includes calibrated three-point estimating (O/ML/P), correlation modeling, criticality index,
          and sensitivity analysis aligned with AACE quantitative risk principles.
        </Card>
      </FadeIn>
      <FadeIn delay={0.06}>
        <Card title="Integrated Cost–Schedule Risk" icon={Network}>
          Integrated risk modeling combining schedule uncertainty with cost exposure logic in line with
          AACE 65R‑11 methodologies. Supports contingency and management reserve determination.
        </Card>
      </FadeIn>
      <FadeIn delay={0.1}>
        <Card title="Risk Workshops & Registers" icon={ShieldCheck}>
          Structured qualitative risk identification aligned with AACE 62R‑11 and 72R‑12 guidance.
          Converts qualitative drivers into quantifiable model inputs.
        </Card>
      </FadeIn>
      <FadeIn delay={0.14}>
        <Card title="Critical Path & Near-Critical Review" icon={Target}>
          Longest path validation, logic integrity audit, constraint rationalization, and
          near-critical path identification prior to simulation.
        </Card>
      </FadeIn>
      <FadeIn delay={0.18}>
        <Card title="Primavera P6 Enablement" icon={BarChart3}>
          Enterprise P6 governance, WBS structuring, baseline control, EVM integration,
          and portfolio-level schedule reporting.
        </Card>
      </FadeIn>
      <FadeIn delay={0.22}>
        <Card title="Management Summary Schedules" icon={FileCheck2}>
          Development of L1/L2 summary schedules for risk modeling and executive communication,
          aligned with AACE 89R‑16 principles.
        </Card>
      </FadeIn>
      <FadeIn delay={0.26}>
        <Card title="Forensic Schedule Analysis & Dispute Support" icon={Search}>
          Independent critical path reconstruction, delay analysis, entitlement assessment, and expert-ready reporting. Structured to support executive review, mediation, arbitration, or expert proceedings on major capital programs.
        </Card>
      </FadeIn>
    </div>
  </Section>
);

const Method = () => {
  const steps = useMemo(
    () => [
      {
        t: "1) Align scope & decision need",
        d: "Define what decision the analysis must support (tender, gate, recovery plan, or portfolio confidence).",
      },
      {
        t: "2) Build the ‘SRA-only’ model",
        d: "Create a purpose-built L1/L2 summary schedule (shadow model) mapped to the control schedule IDs.",
      },
      {
        t: "3) Elicit risk drivers",
        d: "Facilitated sessions to identify and rank risks, then translate them into quantification inputs (ranges, dependencies).",
      },
      {
        t: "4) Quantify (fit-for-purpose)",
        d: "Apply Monte Carlo / ranging / expected value methods to produce integrated outcome distributions.",
      },
      {
        t: "5) Communicate confidence",
        d: "Management-ready results: P-levels, drivers, and actionable mitigation options—traceable to inputs.",
      },
    ],
    []
  );

  return (
    <Section
      id="method"
      eyebrow="How we work"
      title="A practical, governance-friendly approach"
      subtitle="Designed to give you decision-ready confidence without disturbing the live control schedule."
    >
      {/* Mini technical SRA workflow diagram */}
      <FadeIn>
        <div className="mb-10 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-sm font-semibold text-white">Mini SRA workflow (technical)</div>
              <div className="mt-1 text-xs text-white/60">
                Logic integrity → calibrated ranges → correlation → Monte Carlo → validation → executive outputs
              </div>
            </div>
            <div className="text-xs text-white/55">Safran Risk • P6 • AACE-aligned</div>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-6">
            {[
              { k: "1", t: "Logic QA", d: "Open ends, constraints, longest path" },
              { k: "2", t: "O/ML/P", d: "Ranging + calibration + bias checks" },
              { k: "3", t: "Correlation", d: "Dependencies & systemic drivers" },
              { k: "4", t: "Monte Carlo", d: "P50/P80, criticality, sensitivity" },
              { k: "5", t: "Validation", d: "Diagnostics, convergence, sanity checks" },
              { k: "6", t: "Outputs", d: "Drivers + actions + narrative" },
            ].map((x) => (
              <div
                key={x.k}
                className="relative rounded-2xl border border-white/10 bg-slate-950/30 p-4"
              >
                <div className={`mb-2 inline-flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-r ${ACCENT} text-xs font-bold text-slate-950`}>
                  {x.k}
                </div>
                <div className="text-xs font-semibold text-white">{x.t}</div>
                <div className="mt-1 text-[11px] leading-relaxed text-white/60">{x.d}</div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
      <div className="grid gap-5 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="space-y-4">
            {steps.map((s, i) => (
              <FadeIn key={s.t} delay={0.02 * i}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <div className="flex items-start gap-4">
                    <div className={`mt-0.5 h-8 w-8 rounded-2xl bg-gradient-to-r ${ACCENT} grid place-items-center text-sm font-bold text-slate-950`}>
                      {i + 1}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{s.t}</div>
                      <div className="mt-1 text-sm text-white/70">{s.d}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <FadeIn delay={0.06}>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <div className="text-sm font-semibold text-white">What you get</div>
              <ul className="mt-4 space-y-3 text-sm text-white/75">
                {[
                  "Clear P-level outcomes (P50/P80) for key milestones",
                  "Top drivers + near-critical paths in plain language",
                  "Assumptions log and traceability from input to result",
                  "Options: mitigation, acceleration, or risk acceptance",
                ].map((x) => (
                  <li key={x} className="flex gap-3">
                    <div className="mt-2 h-1.5 w-1.5 rounded-full bg-white/50" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                <div className="text-xs font-semibold text-white/80">Why ‘shadow’ models?</div>
                <p className="mt-2 text-xs leading-relaxed text-white/65">
                  They let you run risk at the right level of detail (management summary) while protecting the
                  integrity of the control schedule and its baselines.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
};

const Experience = () => {
  const projects = [
    {
      name: "K+S Potash – COGEN Project (Cogeneration Facility)",
      where: "Saskatchewan, Canada",
      years: "2022–Present",
      value: "~CAD $450M",
      summary:
        "Advisory lead for integrated L3–L4 scheduling and quantitative SRA on a $450M cogeneration facility. Delivered outage coordination, commissioning interface planning, and executive-level confidence reporting aligned with AACE practices.",
    },
    {
      name: "Seaspan – Polar Icebreaker Program",
      where: "Vancouver, British Columbia, Canada",
      years: "2023–2024",
      value: "Federal shipbuilding program",
      summary:
        "Supported Schedule Risk Analysis (SRA) by integrating the program Risk Register with the live master schedule. Executed Monte Carlo simulations, rationalized risk-to-schedule gaps, summarized probabilistic outputs for executive visibility, and provided actionable recommendations to improve forecast confidence.",
    },
    {
      name: "City of Ottawa – LRT Stage 2 (Rail Construction Program)",
      where: "Ottawa, Ontario, Canada",
      years: "2022–2023",
      value: "~CAD $2B",
      summary:
        "Stage 2 Schedule Lead on Ottawa’s $2B LRT expansion (44+ km). Led master program integration, EV tracking, cross-discipline schedule review, and risk mitigation oversight across the project lifecycle.",
    },
    {
      name: "Oyu Tolgoi – Underground Expansion Project (Independent Review)",
      where: "Mongolia",
      years: "2020–2021",
      value: "~$7B+ underground copper-gold expansion",
      tag: "Independent Review / Forensic",
      summary:
        "Independent forensic schedule review on a $7B+ underground expansion. Performed critical path reconstruction, delay analysis, and entitlement assessment to deliver defensible, expert-ready findings for executive and dispute resolution use.",
    },
    {
      name: "SaskPower – Aspen Power Station (Combined Cycle)",
      where: "Lanigan, Saskatchewan, Canada",
      years: "2026",
      value: "~CAD $350M",
      summary:
        "Schedule governance and quantitative SRA advisory for a $350M combined-cycle generation project. Delivered milestone confidence assessments and executive-ready reporting aligned with enterprise standards.",
    },
    {
      name: "BHP – Jansen Potash Mine (Shaft Sinking Program)",
      where: "Saskatchewan, Canada",
      years: "2017–2018",
      value: "~CAD $5M (shaft sinking package)",
      summary:
        "Planning / Scheduling Lead for twin 10m diameter shafts (~1 km depth). Developed resource-loaded Primavera P6 schedules, integrated subcontractor timelines, and implemented cost-schedule and change control processes for disciplined execution.",
    },
    {
      name: "SaskPower – Primavera P6 Enterprise Implementation",
      where: "Saskatchewan, Canada",
      years: "2013–2017",
      value: "~$200M+ annual capital portfolio",
      summary:
        "Led enterprise Primavera P6 implementation across SaskPower capital programs. Enabled EVM integration, portfolio rollups, and governance-aligned reporting workflows.",
    },
    {
      name: "Panama Canal Expansion – Third Set of Locks (GUPC)",
      where: "Panama",
      years: "2012",
      value: "$5.25B",
      summary:
        "Managed EPC master schedule integration for the $5.25B Panama Canal expansion. Directed schedule analytics, SPI/float reporting, and executive-level performance updates across civil and electromechanical systems.",
    },
    {
      name: "Open-Pit Copper Mine Development (EPCM)",
      where: "Panama",
      years: "2012–2013",
      value: "$6.2B",
      summary:
        "Maintained L3–L4 integrated master schedules across EPC packages, supporting construction interfaces, forecasting, and performance reporting.",
    },
    {
      name: "Parliament Hill – West Block Rehabilitation",
      where: "Ottawa, Canada",
      years: "2010–2011",
      value: "Federal infrastructure program",
      summary:
        "Performed baseline revision, WBS restructuring, and schedule change control within a federal heritage infrastructure rehabilitation program.",
    },
    {
      name: "Yara BP Furnace Retube (Shutdown)",
      where: "Saskatchewan, Canada",
      years: "2015",
      value: "—",
      summary:
        "Developed L4 resource-loaded shutdown schedule with integrated C&SU planning and scenario analysis for outage execution.",
    },
    {
      name: "Rapid Rail Transit System – Feasibility & Preliminary Engineering",
      where: "Trinidad & Tobago",
      years: "2009–2010",
      value: "National transportation initiative",
      summary:
        "Developed WBS structures and preliminary engineering schedules, supporting productivity analysis and baseline monitoring for national rail feasibility.",
    },
  ];

  return (
    <Section
      id="experience"
      eyebrow="Representative Advisory Engagements"
      title="Selected Capital Programs & Infrastructure Projects"
      subtitle="Owner-focused planning, schedule governance, and quantitative risk support across major international programs."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <FadeIn key={p.name} delay={0.03 * i}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              {p.tag && (
                <div className="mb-2 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/70">
                  {p.tag}
                </div>
              )}
              <div className="text-sm font-semibold text-white">{p.name}</div>
              <div className="mt-2 flex flex-wrap gap-3 text-xs text-white/60">
                <span className="inline-flex items-center gap-1">
                  <Globe className="h-3.5 w-3.5" /> {p.where}
                </span>
                <span className="inline-flex items-center gap-1">
                  <CalendarClock className="h-3.5 w-3.5" /> {p.years}
                </span>
                <span className="inline-flex items-center gap-1">
                  <BarChart3 className="h-3.5 w-3.5" /> {p.value}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/75">{p.summary}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.08}>
        <div className="mt-10 rounded-3xl border border-white/10 bg-slate-950/30 p-6">
          <div className="text-sm font-semibold text-white">Also available</div>
          <p className="mt-2 text-sm text-white/70">
            Detailed case studies, sample SRA outputs (P-curves, sensitivity/criticality ranking), and example
            management summary schedule templates can be shared under NDA.
          </p>
        </div>
      </FadeIn>
    </Section>
  );
};

const Industries = () => (
  <Section
    id="industries"
    eyebrow="Where we fit"
    title="Industries"
    subtitle="Experience across capital projects where schedule confidence matters." 
  >
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {["Mining", "Energy", "Utilities", "Infrastructure"].map((x, i) => (
        <FadeIn key={x} delay={0.04 * i}>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <div className="text-sm font-semibold text-white">{x}</div>
            <p className="mt-2 text-sm text-white/70">
              Fit-for-purpose risk quantification aligned to executive decisions and delivery constraints.
            </p>
          </div>
        </FadeIn>
      ))}
    </div>
  </Section>
);

const Contact = () => (
  <Section
    id="contact"
    eyebrow="Let’s talk"
    title="Contact"
    subtitle="Tell us your milestone, your decision date, and your current schedule level—we’ll propose the lightest approach that answers the question."
  >
    <div className="grid gap-6 lg:grid-cols-2">
      <FadeIn>
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          <div className="text-sm font-semibold text-white">What to include</div>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            {[
              "Project name and location",
              "Key milestones / constraints (e.g., outage windows)",
              "Current schedule level and tool (P6 / MSP)",
              "Decision you need to support (gate, tender, recovery)",
              "Preferred outputs (P50/P80, drivers, exec summary)",
            ].map((x) => (
              <li key={x} className="flex gap-3">
                <div className="mt-2 h-1.5 w-1.5 rounded-full bg-white/50" />
                <span>{x}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/30 p-4">
            <div className="text-xs font-semibold text-white/80">Response time</div>
            <p className="mt-2 text-xs text-white/65">
              Typically within 1–2 business days with a draft scope, deliverables, and a simple timeline.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.06}>
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          <div className="text-sm font-semibold text-white">Reach us</div>
          <div className="mt-4 space-y-3 text-sm text-white/80">
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-white/70" />
              <span className="text-white/70">Email:</span>
              <a className="text-white hover:underline" href="mailto:info@jlg-planning.com">
                info@jlg-planning.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-white/70" />
              <span className="text-white/70">Phone:</span>
              <a className="text-white hover:underline" href="tel:+17802630388">
                +1 (780) 263-0388
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="h-4 w-4 text-white/70" />
              <span className="text-white/70">Location:</span>
              <span className="text-white">Canada • Internationally</span>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/30 p-4">
            <div className="text-xs font-semibold text-white/80">Certifications</div>
            <div className="mt-2 flex flex-wrap gap-2 text-xs text-white/70">
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">P.Eng</span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">PMP</span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">AACE</span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">Primavera P6</span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">Safran Risk</span>
            </div>
          </div>

          <a
            href="mailto:info@jlg-planning.com?subject=JLG%20Risk%20Services%20-%20Inquiry"
            className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r ${ACCENT} px-6 py-3 text-sm font-semibold text-slate-950 hover:opacity-95 transition`}
          >
            Email JLG <ArrowRight className="h-4 w-4" />
          </a>

          <p className="mt-3 text-xs text-white/50">
          </p>
        </div>
      </FadeIn>
    </div>
  </Section>
);

const Footer = () => (
  <footer className="border-t border-white/10 bg-slate-950">
    <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-white/60 sm:px-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-white/80 font-semibold">JLG Planning Consulting</div>
          <div className="mt-1 text-xs text-white/55">
            Schedule risk • integrated cost–schedule views • Primavera P6 enablement
          </div>
        </div>
        <div className="text-xs">
          © {new Date().getFullYear()} JLG Planning Consulting. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Nav />
      <Hero />
      <main>
        {/* Who hires us */}
        <Section
          id="who"
          eyebrow="Who hires us"
          title="Built for owners and delivery teams"
          subtitle="We adapt the level of rigor and reporting to match decision-making needs—without adding overhead."
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                t: "Owner / Client",
                d: "Independent confidence, governance, and decision-ready risk forecasting.",
              },
              {
                t: "EPCM",
                d: "Interface integration, schedule quality, and quantifiable milestone confidence.",
              },
              {
                t: "Contractor",
                d: "Recovery options, risk-informed execution sequencing, and credible narratives.",
              },
              {
                t: "Portfolio / PMO",
                d: "Portfolio rollups, consistent risk language, and executive reporting standards.",
              },
            ].map((x, i) => (
              <FadeIn key={x.t} delay={0.04 * i}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <div className="text-sm font-semibold text-white">{x.t}</div>
                  <p className="mt-2 text-sm text-white/70">{x.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Section>

        <Services />
        <Method />

        {/* Risk Credentials */}
        <Section
          id="credentials"
          eyebrow="Risk Credentials"
          title="Risk Credentials & Method Alignment (AACE)"
          subtitle="Technical alignment with AACE recommended practices and quantitative risk standards."
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <div className="text-sm font-semibold text-white">Quantitative Risk Framework</div>
              <ul className="mt-4 space-y-3 text-sm text-white/75">
                <li>AACE 41R-08 – Estimate Ranging</li>
                <li>AACE 43R-08 & 44R-08 – Contingency Determination</li>
                <li>AACE 65R-11 – Integrated Cost & Schedule Risk</li>
                <li>AACE 123R-22 – Monte Carlo Analysis</li>
                <li>AACE 122R-22 – Quantitative Risk Maturity Model</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <div className="text-sm font-semibold text-white">Schedule Governance Alignment</div>
              <ul className="mt-4 space-y-3 text-sm text-white/75">
                <li>AACE 38R-06 – Basis of Schedule</li>
                <li>AACE 89R-16 – Management Summary Schedule</li>
                <li>AACE 109R-19 – Schedule Change Management</li>
                <li>AACE 62R-11 & 72R-12 – Risk Identification & Planning</li>
              </ul>
            </div>
          </div>
        </Section>

        <Experience />
        <Industries />
        <Contact />

        {/* PDF button */}
        <div className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center">
            <div className="text-sm font-semibold text-white">Capability Statement</div>
            <p className="mt-2 text-sm text-white/70">
              Download a one-page overview of services, AACE alignment, and representative experience.
            </p>
            <a
              href="/JLG_Planning_Consulting_Capability_Statement.pdf"
              className={`mt-5 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r ${ACCENT} px-6 py-3 text-sm font-semibold text-slate-950 hover:opacity-95 transition`}
            >
              Download Capability Statement (PDF)
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
