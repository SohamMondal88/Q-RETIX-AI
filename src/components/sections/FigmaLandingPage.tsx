"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  Bot,
  CalendarDays,
  ChevronDown,
  CircleCheck,
  Clock3,
  Link2,
  MessageCircle,
  Play,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import styles from "./FigmaLandingPage.module.css";
import FeaturedArticleStack from "./FeaturedArticleStack";

gsap.registerPlugin(ScrollTrigger);

const comparisonRows = [
  ["Molecule identification", true, true, true],
  ["Clinical-trial matching", false, true, true],
  ["Real-time simulation", false, true, true],
  ["Laboratory automation", false, false, true],
  ["Predictive pipeline", false, false, true],
  ["Researcher copilot", false, false, true],
];

const reveal = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

function CheckMark({ active }: { active: boolean }) {
  return (
    <span className={active ? styles.yesMark : styles.noMark}>
      {active ? "✓" : "×"}
    </span>
  );
}

const faqs = [
  "What AI drug discovery model was built?",
  "Is this just another large language model?",
  "Why is your platform revolutionary?",
  "Could reduce the cost and time of bringing medicines to market?",
  "Can your AI invent drugs that have never existed before?",
  "What is the long-term vision?",
  "How does the platform become smarter over time?",
  "What makes your technology difficult to replicate?",
];

function MoleculePanel({ side }: { side: "left" | "right" }) {
  return (
    <div
      className={`${styles.moleculePanel} ${styles[side]}`}
      aria-hidden="true"
    >
      <div className={styles.panelTop} />
      <div className={styles.energyCloud} />
      <span className={styles.atomOne} />
      <span className={styles.atomTwo} />
      <span className={styles.atomThree} />
      <span className={styles.atomFour} />
      <i className={styles.bondOne} />
      <i className={styles.bondTwo} />
      <i className={styles.bondThree} />
    </div>
  );
}

function DataPill() {
  return (
    <div className={styles.dataPillVisual} aria-hidden="true">
      <div className={styles.pillDisc}>
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className={styles.pillBody} />
    </div>
  );
}

function WorkflowArt() {
  return (
    <div className={styles.workflowArt} aria-hidden="true">
      <div className={`${styles.taskSheet} ${styles.sheetLeft}`}>
        <strong>Lab Application</strong>
        <span>Automated Experiments</span>
        <span>Lab Simulation</span>
        <span>Predictive Analysis</span>
      </div>
      <div className={`${styles.taskSheet} ${styles.sheetRight}`}>
        <strong>Accurate result</strong>
        <span>
          Early detect <i className={styles.greenDot} />
        </span>
        <span>
          AI-Powered Lab <i className={styles.orangeDot} />
        </span>
        <span>AI Chemistry Simulation</span>
      </div>
      <div className={styles.personTagLeft}>Jerome Bell</div>
      <div className={styles.personTagRight}>Floyd Miles</div>
    </div>
  );
}

function TimelineArt() {
  return (
    <div className={styles.timelineArt} aria-hidden="true">
      <div className={styles.timelineLegend}>
        <i /> Completed <span /> On Progress
      </div>
      <div className={`${styles.timelineRow} ${styles.completeRow}`}>
        <b>100%</b> Work done
      </div>
      <div className={`${styles.timelineRow} ${styles.progressRow}`}>
        <b>80%</b> Digital Lab Environment
      </div>
      <div className={`${styles.timelineRow} ${styles.labRow}`}>
        <b>40%</b> AI-Powered Lab
      </div>
    </div>
  );
}

function ManagementArt() {
  return (
    <div className={styles.managementArt} aria-hidden="true">
      <div className={styles.managementHeader}>
        AI-Powered Lab <span />
      </div>
      <p>Monitor experiment progress with real-time simulation tracking</p>
      <div className={styles.switchList}>
        <div>
          Security Protected <span />
        </div>
        <div>
          Privacy Access <span />
        </div>
      </div>
      <div className={styles.researchCard}>
        <b>Transforming Research</b>
        <small>Predict Reactions Before They Happen</small>
        <div className={styles.avatarRow}>
          <i />
          <i />
          <i />
          <i />
          <strong>+</strong>
        </div>
        <p>
          Project System <Link2 size={18} />
        </p>
      </div>
    </div>
  );
}

function ChartArt() {
  return (
    <div className={styles.chartArt} aria-hidden="true">
      <div className={styles.chartHead}>
        <b>Our Workflow</b>
        <span>Week 1</span>
      </div>
      <svg viewBox="0 0 620 270" preserveAspectRatio="none">
        <defs>
          <pattern
            id="bars"
            width="12"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path d="M 1 0 V 10" stroke="#d9d8e2" strokeWidth="2" />
          </pattern>
        </defs>
        <path
          d="M0 220 L120 130 C165 85 180 180 225 170 C260 160 272 90 315 86 C390 80 445 100 475 70 L620 0 V270 H0Z"
          fill="url(#bars)"
        />
        <path
          d="M0 220 L120 130 C165 85 180 180 225 170 C260 160 272 90 315 86 C390 80 445 100 475 70 L620 0"
          fill="none"
          stroke="#1676ff"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>
      <span className={`${styles.chartBadge} ${styles.chartBadgeOne}`}>
        ● Design System&nbsp;&nbsp; 100%
      </span>
      <span className={`${styles.chartBadge} ${styles.chartBadgeTwo}`}>
        ● Wireframe&nbsp;&nbsp; 80%
      </span>
      <span className={`${styles.chartBadge} ${styles.chartBadgeThree}`}>
        ● UI Design&nbsp;&nbsp; 0%
      </span>
    </div>
  );
}

function ProjectArt() {
  return (
    <div className={styles.projectArt} aria-hidden="true">
      <div className={styles.projectIcon}>
        <Sparkles />
      </div>
      <div className={styles.projectBoard}>
        <div>
          <i /> Final Project <span className={styles.miniAvatars}>●●●●</span>
        </div>
        {[0, 1, 2, 3].map((row) => (
          <p key={row}>
            <b />
            <span />
            <span />
          </p>
        ))}
      </div>
    </div>
  );
}

export default function FigmaLandingPage() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(`.${styles.pixelField}`, {
        backgroundPosition:
          "6% 21%,13% 13%,90% 14%,86% 27%,5% 82%,13% 75%,91% 80%,95% 86%",
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.utils
        .toArray<HTMLElement>(`.${styles.moleculePanel}`)
        .forEach((panel, index) => {
          gsap.to(panel, {
            y: index === 0 ? -22 : 22,
            rotationZ: index === 0 ? -1.5 : 1.5,
            duration: 3.6,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });

      gsap.utils
        .toArray<HTMLElement>(`.${styles.showcaseCard}`)
        .forEach((card) => {
          gsap.from(card, {
            scrollTrigger: { trigger: card, start: "top 82%" },
            y: 60,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
          });
        });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.pixelField} aria-hidden="true" />
        <p className={styles.announcement}>
          We are accepting early waitlist now,{" "}
          <a href="#waitlist">join Q-RETIX AI</a>
        </p>
        <MoleculePanel side="left" />
        <MoleculePanel side="right" />
        <motion.div
          className={styles.heroCopy}
          initial={{ opacity: 0, y: 26, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1>Q-RETIX AI</h1>
          <p className={styles.heroLead}>from module to medicine in seconds</p>
          <p className={styles.heroSub}>Navigating your life along side you.</p>
          <div className={styles.heroActions}>
            <a href="#demo" className={styles.primaryButton}>
              Schedule Call <CalendarDays size={15} />
            </a>
            <a href="#articles" className={styles.secondaryButton}>
              <span>
                <Clock3 size={14} />
              </span>{" "}
              Book A Call
            </a>
          </div>
        </motion.div>
      </section>

      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        id="demo"
        className={styles.aiSection}
      >
        <motion.div variants={reveal} className={styles.sectionHeader}>
          <div>
            <h2>Q-RETIX AI</h2>
            <span>BETA 0.1.2</span>
          </div>
          <nav>
            <a href="#demo">Watch Demo</a>
            <a href="#tools">
              Learn more <ArrowRight size={14} />
            </a>
          </nav>
        </motion.div>
        <motion.div variants={reveal} className={styles.aiGrid}>
          <div className={styles.aiPitch}>
            <div className={styles.pitchItem}>
              <span>
                <Bot size={16} />
              </span>
              <p>
                <b>Connect AI</b> has all the <em>relevant information</em>
                <br />
                about your day to day life that it needs.
              </p>
            </div>
            <div className={styles.pitchItem}>
              <span>
                <MessageCircle size={16} />
              </span>
              <p>
                <b>Connect AI</b> adapts to your <em>conversation style</em>
              </p>
            </div>
            <div className={styles.pitchItem}>
              <span>
                <CircleCheck size={16} />
              </span>
              <p>
                <b>Connect AI</b> can <em>take action</em> even when you&apos;re
                asleep
              </p>
            </div>
            <button className={styles.demoButton}>
              <Play size={13} fill="currentColor" /> Demo
            </button>
          </div>
          <div className={styles.chatVisual}>
            <div className={styles.userBubble}>
              hi doctor, get me
              <br />
              insights on yesterday&apos;s
              <br />
              team stand-up
            </div>
            <div className={styles.aiBubble}>
              Sure, discussed about the
              <br />
              current development site issues
              <br />
              that are raised on <em>netlify</em>, listed
              <br />
              as below:
              <div className={styles.issueCard}>
                <span>01</span>
                <b>dev 2.4.1</b>
                <small>Connect AI Platform</small>
                <i />
              </div>
            </div>
            <div className={styles.chatRail}>
              <i />
              <i />
              <i />
            </div>
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        id="tools"
        className={styles.toolSection}
      >
        <motion.div variants={reveal} className={styles.toolGrid}>
          <article className={`${styles.toolCard} ${styles.distributionCard}`}>
            <div className={styles.orbitStage}>
              <span className={styles.orbitTop} />
              <span className={styles.orbitCore} />
              <span className={styles.orbitLine} />
            </div>
            <h3>Easy distribution</h3>
            <p>
              Our AI helps you quickly and easily distribute
              <br />
              products between you and your clients.
            </p>
            <button aria-label="Explore easy distribution">
              <ArrowRight size={15} />
            </button>
          </article>
          <div className={styles.toolStack}>
            <article className={`${styles.toolCard} ${styles.pillCard}`}>
              <div>
                <h3>AI data pills</h3>
                <p>Smart insights for every need.</p>
              </div>
              <DataPill />
            </article>
            <article className={`${styles.toolCard} ${styles.globeCard}`}>
              <h3>Globe AI</h3>
              <p>
                Instantly prepare your data
                <br />
                for tomorrow&apos;s challenges.
              </p>
              <div className={styles.globe} />
            </article>
          </div>
          <article className={`${styles.toolCard} ${styles.smartCard}`}>
            <h3>Smart AI tools</h3>
            <p>
              Explore your creative side while simplifying
              <br />
              routine tasks for maximum productivity.
            </p>
            <div className={styles.smartSlabs}>
              <span />
              <span />
              <span />
            </div>
            <button>
              <i /> Open The Box
            </button>
          </article>
        </motion.div>
      </motion.section>

      <section
        className={styles.showcaseSection}
        aria-label="Product workflows"
      >
        <div className={styles.showcaseTrack}>
          <article className={styles.showcaseCard}>
            <WorkflowArt />
            <h3>Streamlined Project Management</h3>
            <p>
              Experience seamless navigation for efficient task management and
              effortless project oversight.
            </p>
          </article>
          <article className={styles.showcaseCard}>
            <TimelineArt />
            <h3>Effortless Timeline Tracking</h3>
            <p>
              Visualize progress, priorities, and ownership without losing the
              bigger picture.
            </p>
          </article>
          <article className={styles.showcaseCard}>
            <ManagementArt />
            <h3>Effortless Time Management</h3>
            <p>
              Keep projects on schedule with real-time tracking, ensuring no
              minute goes unnoticed.
            </p>
          </article>
          <article className={styles.showcaseCard}>
            <ChartArt />
            <h3>Connected Research Workflow</h3>
            <p>
              From design systems to final delivery, keep every research stream
              moving together.
            </p>
          </article>
          <article className={styles.showcaseCard}>
            <ProjectArt />
            <h3>Streamlined Project Management</h3>
            <p>
              Tailored solutions fit your project, whether you are a student or
              a growing lab.
            </p>
          </article>
        </div>
      </section>

      <FeaturedArticleStack />

      <motion.section
        className={styles.compareSection}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={stagger}
      >
        <motion.h2 variants={reveal}>Why Qretix-AI is different</motion.h2>
        <motion.div variants={reveal} className={styles.compareTable}>
          <div className={styles.compareHead}>
            <span>Features</span>
            <span>Traditional Pharma</span>
            <span>Other competitors</span>
            <span>Qretix AI</span>
          </div>
          {comparisonRows.map(([label, traditional, competitor, qretix]) => (
            <div className={styles.compareRow} key={String(label)}>
              <span>{label}</span>
              <CheckMark active={Boolean(traditional)} />
              <CheckMark active={Boolean(competitor)} />
              <CheckMark active={Boolean(qretix)} />
            </div>
          ))}
        </motion.div>
      </motion.section>

      <section className={styles.faqSection}>
        <div className={styles.faqGlow}>
          <span>FAQ</span>
        </div>
        <h2>
          Answers to Your Most
          <br />
          <em>Common</em> Questions
        </h2>
        <p>
          Everything you need to know about getting started, using the
          <br />
          platform, and unlocking its full potential.
        </p>
        <div className={styles.faqGrid}>
          {faqs.map((faq) => (
            <details key={faq}>
              <summary>
                {faq}
                <ChevronDown size={15} />
              </summary>
              <p>
                Q-RETIX AI combines research intelligence, workflow automation,
                and domain-focused models to help teams move from evidence to
                action faster.
              </p>
            </details>
          ))}
        </div>
      </section>

      <section id="waitlist" className={styles.waitlistStrip}>
        <ShieldCheck size={20} />
        <p>
          Ready to build the next generation of pharmaceutical intelligence?
        </p>
        <a href="mailto:hello@qretix.ai">
          Join the waitlist <ArrowRight size={15} />
        </a>
      </section>
    </div>
  );
}
