"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  Calendar,
  User,
  Share2,
  Link as LinkIcon,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import WaitlistCommunitySection from "./WaitlistCommunitySection";

/* ────────────── Blog definitions ────────────── */

const posts: Record<
  string,
  {
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    author: string;
    authorRole: string;
    cover: string;
    tocSections: { label: string; id: string }[];
    body: React.ReactNode;
  }
> = {
  "unlocking-undruggable-aim2-inflammasome": {
    title: 'Q-RETIX.AI: Unlocking the "Undruggable" AIM2 Inflammasome',
    excerpt:
      "How Structural AI Bypassed the Electrostatic Charge Trap to Reignite a Dormant Therapeutic Target",
    category: "Research",
    date: "July 4, 2026",
    readTime: "15 min read",
    author: "Q-RETIX Research Team",
    authorRole: "Structural AI Drug Discovery, Q-RETIX.AI",
    cover: "/images/blog/cover1.jpg",
    tocSections: [
      { label: "Executive Summary", id: "executive-summary" },
      { label: "The AIM2 Paradox: A Critical Node in Innate Immunity", id: "the-aim2-paradox" },
      { label: "The Traditional Bottleneck: The Electrostatic Charge Trap", id: "the-traditional-bottleneck" },
      { label: "Enter Q-RETIX.AI: Redefining Target Discovery", id: "enter-q-retixai" },
      { label: "Comparative Pharmacology: A Paradigm Shift in Drug Design", id: "comparative-pharmacology" },
      { label: "Reviving a Dormant Multi-Billion Dollar Market", id: "reviving-a-dormant-market" },
      { label: "Conclusion: The Power of AI in Structural Biology", id: "conclusion" },
    ],
    body: (
      <>
        <p className="text-lg text-[#5A6B82] leading-relaxed mb-8">
          For over a decade, the Absent in Melanoma 2 (AIM2) inflammasome has represented one of the most promising, yet frustratingly elusive, targets in immunology. While universally recognized as a primary driver of autoinflammatory pathologies, metabolic diseases, and neurodegenerative disorders, pharmaceutical development has stalled. Traditional drug discovery pipelines have consistently failed to drug AIM2 due to the <strong>&ldquo;Electrostatic Charge Trap&rdquo;</strong>&mdash;a biophysical paradox that forces traditional competitive inhibitors to mimic the dense negative charge of double-stranded DNA (dsDNA), resulting in toxic, non-permeable compounds.
        </p>
        <p className="text-[#5A6B82] leading-relaxed mb-6">
          Consequently, AIM2, while heavily researched in academia, is currently not being actively pursued in commercial clinical pipelines.
        </p>
        <p className="text-[#5A6B82] leading-relaxed mb-6">
          Enter <strong>Q-RETIX.AI</strong>. By deploying our proprietary structural AI discovery matrix, we have completely reimagined the approach to AIM2 inhibition. Rather than competing at the highly charged orthosteric active site, Q-RETIX.AI mapped the dynamic conformational landscape of the AIM2 protein to uncover a hidden, hydrophobic cryptic pocket within the interdomain hinge. The result is the computational design of a first-in-class, uncharged, lipophilic small-molecule modulator that selectively immobilizes AIM2 in its basal autoinhibited state.
        </p>
        <p className="text-[#5A6B82] leading-relaxed mb-8">
          This report outlines the scientific architecture of the AIM2 target, the historic bottlenecks that halted its pursuit, and how Q-RETIX.AI is reviving this multi-billion dollar therapeutic opportunity.
        </p>

        <h2 id="executive-summary" className="text-2xl font-bold text-[#33415C] mt-12 mb-4 scroll-mt-32">
          Executive Summary
        </h2>
        <p className="text-[#5A6B82] leading-relaxed mb-6">
          Q-RETIX.AI has computationally designed a first-in-class, uncharged, lipophilic small-molecule modulator targeting AIM2. By moving away from competitive orthosteric inhibition at the highly charged HIN-200 dsDNA binding site, our platform identified a previously undocumented hydrophobic cryptic pocket in the interdomain hinge. The resulting allosteric molecular wedge immobilizes AIM2 in its basal autoinhibited state, bypassing the Electrostatic Charge Trap entirely and reigniting a dormant therapeutic target.
        </p>

        <h2 id="the-aim2-paradox" className="text-2xl font-bold text-[#33415C] mt-12 mb-4 scroll-mt-32">
          1. The AIM2 Paradox: A Critical Node in Innate Immunity
        </h2>
        <p className="text-[#5A6B82] leading-relaxed mb-6">
          The innate immune system relies on pattern recognition receptors (PRRs) to act as the first line of defense, detecting danger-associated or pathogen-associated molecular patterns. Among these, AIM2 stands out as a critical cytosolic sensor belonging to the PYHIN (HIN-200) family. Its primary function is to detect aberrant cytosolic dsDNA&mdash;a universal danger signal indicative of viral infection, bacterial invasion, or severe genomic instability.
        </p>

        <h3 className="text-xl font-semibold text-[#33415C] mt-8 mb-3">
          Structural Topography of the Basal Autoinhibited State
        </h3>
        <p className="text-[#5A6B82] leading-relaxed mb-6">
          Human AIM2 is an elegant, bipartite molecular machine consisting of two primary domains connected by a flexible 15-amino-acid hinge:
        </p>
        <ul className="list-disc pl-5 space-y-3 text-[#5A6B82] mb-6">
          <li>
            <strong>The N-Terminal Pyrin Domain (PYD):</strong> Spanning residues 1-94, the PYD acts as the signaling hub. It possesses a canonical six-helix death-domain fold characterized by an asymmetric charge distribution. The &alpha;1 and &alpha;2 helices harbor dense negative charges, while the opposite face is basic, facilitating homotypic polymerization during activation.
          </li>
          <li>
            <strong>The C-Terminal HIN-200 Domain:</strong> Spanning residues 138-343, this domain features tandem OB-folds heavily enriched with lysine and arginine residues. This creates a highly basic, positively charged surface optimized for binding non-sequence-specific nucleic acids (dsDNA).
          </li>
        </ul>
        <p className="text-[#5A6B82] leading-relaxed mb-6">
          In a healthy, resting cell, AIM2 is transcriptionally silent. It maintains a basal, autoinhibited configuration stabilized by an intramolecular electrostatic equilibrium between the PYD and the HIN-200 domains. This delicate lock prevents premature inflammasome activation and unintended cellular destruction.
        </p>
        <p className="text-sm text-[#8A9BB0] italic mb-8">
          Figure 1: Comprehensive Insights into AIM2-like Receptor Biology and Targeting, detailing the molecular architecture, activation cascade, and the dual role of AIM2 dysregulation in disease.
        </p>

        <h3 className="text-xl font-semibold text-[#33415C] mt-8 mb-3">
          The Pathological Activation Cascade
        </h3>
        <p className="text-[#5A6B82] leading-relaxed mb-6">
          When the PYD-HIN lock is broken, the consequences are severe. Dysregulation of AIM2, specifically excessive DNA sensing, drives severe autoimmune and autoinflammatory conditions, including Systemic Lupus Erythematosus (SLE), Psoriasis, and Rheumatoid Arthritis.
        </p>
        <p className="text-[#5A6B82] leading-relaxed mb-4">
          The activation involves a dramatic macromolecular cascade:
        </p>
        <ol className="list-decimal pl-5 space-y-3 text-[#5A6B82] mb-8">
          <li>
            <strong>Ligand Engagement:</strong> Cytosolic dsDNA outcompetes the intramolecular PYD-HIN bond.
          </li>
          <li>
            <strong>Filament Nucleation:</strong> The flexible hinge rotates, exposing the PYD. Monomers rapidly stack to form massive filamentous structures.
          </li>
          <li>
            <strong>ASC Speck Assembly &amp; Pyroptosis:</strong> The PYD filament recruits ASC adapter proteins, forming an &ldquo;ASC Speck.&rdquo; This activates Pro-Caspase-1, which aggressively cleaves interleukins (IL-1&beta;, IL-18) and Gasdermin D (GSDMD), culminating in pore-mediated pyroptosis (inflammatory cell death).
          </li>
        </ol>

        {/* Blog Image 1 */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-[#F8FAFB] border border-[#E6EEF2] mb-8">
          <Image
            src="/images/blog/1blog1.jpg"
            alt="AIM2 Receptor Biology and Targeting"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 800px"
          />
        </div>

        <h2 id="the-traditional-bottleneck" className="text-2xl font-bold text-[#33415C] mt-12 mb-4 scroll-mt-32">
          2. The Traditional Bottleneck: The Electrostatic &ldquo;Charge Trap&rdquo;
        </h2>
        <p className="text-[#5A6B82] leading-relaxed mb-6">
          Given its role in severe autoimmune diseases, inhibiting AIM2 should be a primary objective for pharma. However, the industry has largely abandoned the target. Why? The answer lies in the <strong>Electrostatic Charge Trap</strong>.
        </p>
        <p className="text-[#5A6B82] leading-relaxed mb-6">
          Traditional rational drug design focuses on competitive, orthosteric inhibitors&mdash;molecules designed to block the active site where the natural ligand binds. In the case of AIM2, the natural ligand is the highly negatively charged backbone of dsDNA, which binds to the highly positive basic patch on the HIN-200 domain.
        </p>
        <p className="text-[#5A6B82] leading-relaxed mb-6">
          To outcompete dsDNA, traditional drug candidates have been engineered as highly anionic (negatively charged) molecules. This electrostatic arms race created two insurmountable pharmacological barriers:
        </p>

        <h3 className="text-xl font-semibold text-[#33415C] mt-8 mb-3">
          1. The Permeability Penalty
        </h3>
        <p className="text-[#5A6B82] leading-relaxed mb-6">
          Highly charged molecules violate Lipinski&apos;s Rule of Five. The dense anionic nature required to bind the HIN domain effectively prevents these traditional drug candidates from crossing the hydrophobic lipid bilayer of the cell membrane. If a drug cannot enter the cytosol, it cannot reach AIM2, rendering it therapeutically useless in vivo.
        </p>

        <h3 className="text-xl font-semibold text-[#33415C] mt-8 mb-3">
          2. The Pan-Sensor Cross-Reactivity Risk
        </h3>
        <p className="text-[#5A6B82] leading-relaxed mb-8">
          Even if permeability issues could be mitigated, mimicking the universal structure of the dsDNA backbone introduces severe toxicity risks. The innate immune system contains multiple distinct DNA sensors, most notably Cyclic GMP-AMP Synthase (cGAS). Orthosteric AIM2 inhibitors invariably bind to the basic patches of cGAS and other sensors. This pan-sensor cross-reactivity triggers catastrophic off-target immunotoxicity, making these compounds far too dangerous for clinical trials.
        </p>
        <p className="text-[#5A6B82] leading-relaxed mb-8">
          Because of this paradox&mdash;needing a heavy charge for efficacy, but a neutral profile for safety and delivery&mdash;AIM2 was shelved.
        </p>

        <h2 id="enter-q-retixai" className="text-2xl font-bold text-[#33415C] mt-12 mb-4 scroll-mt-32">
          3. Enter Q-RETIX.AI: Redefining Target Discovery
        </h2>
        <p className="text-[#5A6B82] leading-relaxed mb-6">
          Where traditional high-throughput screening and orthosteric modeling failed, <strong>Q-RETIX.AI</strong> succeeded.
        </p>
        <p className="text-[#5A6B82] leading-relaxed mb-6">
          The Q-RETIX platform does not merely look at static, crystallized snapshots of target proteins. Our <strong>Structural AI Discovery Matrix</strong> models the dynamic thermodynamic ensembles of proteins in real-time, scanning for transient, cryptic pockets that exist outside of known active sites.
        </p>
        <p className="text-[#5A6B82] leading-relaxed mb-6">
          We instructed the Q-RETIX engine to bypass the HIN-200 dsDNA binding face entirely and search for allosteric modulation points capable of stabilizing the autoinhibited monomeric state.
        </p>

        <h3 className="text-xl font-semibold text-[#33415C] mt-8 mb-3">
          Discovery of the Hydrophobic Interdomain Hinge Node
        </h3>
        <p className="text-[#5A6B82] leading-relaxed mb-6">
          The AI identified a previously undocumented, non-polar junction within the flexible 15-amino-acid hinge connecting the PYD and HIN domains. Unlike the highly charged external surfaces of the protein, this deep interdomain node is distinctly hydrophobic (oily) and structurally neutral.
        </p>
        <p className="text-sm text-[#8A9BB0] italic mb-6">
          Figure 2: The Electrostatic Charge Trap vs. The Q-RETIX.AI Approach. By abandoning the highly charged DNA binding site in favor of an AI-identified neutral pocket, Q-RETIX enables high-specificity, high-permeability therapeutics.
        </p>

        {/* Blog Image 2 */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-[#F8FAFB] border border-[#E6EEF2] mb-8">
          <Image
            src="/images/blog/1blog2.jpg"
            alt="Electrostatic Charge Trap vs Q-RETIX.AI Approach"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 800px"
          />
        </div>

        <h3 className="text-xl font-semibold text-[#33415C] mt-8 mb-3">
          The Allosteric Molecular Wedge
        </h3>
        <p className="text-[#5A6B82] leading-relaxed mb-6">
          Leveraging this discovery, Q-RETIX computationally generated a novel class of therapeutic molecules. Instead of acting as an orthosteric mimic of DNA, the new drug acts as an <strong>Allosteric Molecular Wedge</strong>.
        </p>
        <p className="text-[#5A6B82] leading-relaxed mb-6">
          This next-generation drug candidate is an uncharged, lipophilic small molecule. It slips perfectly into the hydrophobic hinge pocket identified by the AI. Once engaged, it creates a web of hydrophobic interactions that artificially strengthen the PYD-HIN bond.
        </p>
        <p className="text-[#5A6B82] leading-relaxed mb-6">
          By locking the hinge, the molecule effectively immobilizes AIM2 in its basal, autoinhibited configuration. Even when vast quantities of cytosolic dsDNA flood the cell, the AIM2 monomer cannot undergo the conformational liberation necessary for PYD exposure and filament nucleation.
        </p>
        <p className="text-[#5A6B82] leading-relaxed mb-8">
          By breaking the energetic linkage of filament assembly at the hinge, Q-RETIX successfully halts the inflammasome cascade at step zero.
        </p>

        <h2 id="comparative-pharmacology" className="text-2xl font-bold text-[#33415C] mt-12 mb-4 scroll-mt-32">
          4. Comparative Pharmacology: A Paradigm Shift in Drug Design
        </h2>
        <p className="text-[#5A6B82] leading-relaxed mb-6">
          The pharmacological advantages of the Q-RETIX allosteric architecture over traditional orthosteric mimics are profound. Our candidate completely reverses the historic liabilities associated with AIM2 targeting.
        </p>

        {/* Table */}
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#2C4D78] text-white">
                <th className="text-left px-4 py-3 font-semibold rounded-tl-xl">Pharmacological Metric</th>
                <th className="text-left px-4 py-3 font-semibold">Traditional Orthosteric Mimics</th>
                <th className="text-left px-4 py-3 font-semibold rounded-tr-xl">Q-RETIX.AI Allosteric Architecture</th>
              </tr>
            </thead>
            <tbody className="text-[#5A6B82]">
              <tr className="border-b border-[#E6EEF2] bg-white">
                <td className="px-4 py-3 font-medium text-[#33415C]">Target Domain Face</td>
                <td className="px-4 py-3">Basic HIN-200 patch</td>
                <td className="px-4 py-3">Hydrophobic interdomain hinge pocket</td>
              </tr>
              <tr className="border-b border-[#E6EEF2] bg-[#F8FAFB]">
                <td className="px-4 py-3 font-medium text-[#33415C]">Net Charge</td>
                <td className="px-4 py-3">Highly Anionic (-)</td>
                <td className="px-4 py-3">Neutral</td>
              </tr>
              <tr className="border-b border-[#E6EEF2] bg-white">
                <td className="px-4 py-3 font-medium text-[#33415C]">Polar Surface Area</td>
                <td className="px-4 py-3">Extremely High</td>
                <td className="px-4 py-3">Low (Lipophilic)</td>
              </tr>
              <tr className="border-b border-[#E6EEF2] bg-[#F8FAFB]">
                <td className="px-4 py-3 font-medium text-[#33415C]">Mechanism of Action</td>
                <td className="px-4 py-3">Competitive displacement of DNA</td>
                <td className="px-4 py-3">Allosteric hinge stabilization</td>
              </tr>
              <tr className="border-b border-[#E6EEF2] bg-white">
                <td className="px-4 py-3 font-medium text-[#33415C]">Membrane Permeability</td>
                <td className="px-4 py-3">Severely Restricted</td>
                <td className="px-4 py-3">Highly Efficient</td>
              </tr>
              <tr className="border-b border-[#E6EEF2] bg-[#F8FAFB]">
                <td className="px-4 py-3 font-medium text-[#33415C]">cGAS / Off-Target Selectivity</td>
                <td className="px-4 py-3">Poor (Pan-sensor binding)</td>
                <td className="px-4 py-3">Excellent (Hinge-specific)</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 font-medium text-[#33415C] rounded-bl-xl">Clinical Toxicity Risk</td>
                <td className="px-4 py-3">High</td>
                <td className="px-4 py-3 rounded-br-xl">Low</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-[#5A6B82] leading-relaxed mb-8">
          As outlined in the comparative data above, the Q-RETIX molecule possesses ideal drug-like properties. Its neutral, lipophilic nature ensures rapid, efficient penetration of the cellular membrane. Furthermore, because the interdomain hinge pocket is unique to AIM2&apos;s specific geometry (unlike the universal DNA-binding traits of HIN domains), the Q-RETIX compound completely ignores cGAS and other nucleic acid sensors.
        </p>

        <h2 id="reviving-a-dormant-market" className="text-2xl font-bold text-[#33415C] mt-12 mb-4 scroll-mt-32">
          5. Reviving a Dormant Multi-Billion Dollar Market
        </h2>
        <p className="text-[#5A6B82] leading-relaxed mb-6">
          By solving the biophysical roadblock that halted AIM2 research, Q-RETIX.AI is not just introducing a new drug; it is opening an entirely unexploited vertical in immunology.
        </p>
        <p className="text-[#5A6B82] leading-relaxed mb-6">
          Because the broader pharmaceutical industry deemed AIM2 &quot;undruggable&quot; due to the charge trap, the competitive landscape is currently sparse. Q-RETIX holds a first-mover advantage in a target biology that is unequivocally validated by human genetics and pathology.
        </p>

        <h3 className="text-xl font-semibold text-[#33415C] mt-8 mb-3">
          Target Indications
        </h3>
        <p className="text-[#5A6B82] leading-relaxed mb-4">
          The successful inhibition of the AIM2 inflammasome via our allosteric hinge modulator has immediate therapeutic implications for massive patient populations suffering from:
        </p>
        <ul className="list-disc pl-5 space-y-3 text-[#5A6B82] mb-6">
          <li>
            <strong>Systemic Autoimmunity:</strong> Downregulating AIM2 directly curtails the excessive DNA-sensing feedback loops characteristic of Systemic Lupus Erythematosus (SLE) and Rheumatoid Arthritis.
          </li>
          <li>
            <strong>Autoinflammatory Dermatoses:</strong> Psoriasis and related skin pathologies heavily rely on AIM2-driven IL-1&beta; and IL-18 maturation. Blocking ASC speck assembly provides a direct, upstream intervention compared to current biologic therapies.
          </li>
          <li>
            <strong>Metabolic &amp; Neurodegenerative Disorders:</strong> Emerging data links chronic AIM2 activation to sterile inflammation in atherosclerosis and select neurodegenerative conditions. An orally bioavailable, highly permeable inhibitor opens the door to treating the chronic inflammatory components of these systemic diseases.
          </li>
        </ul>
        <p className="text-sm text-[#8A9BB0] italic mb-8">
          (Note: While AIM2 acts as a tumor suppressor in certain cancers&mdash;giving rise to its namesake &quot;Absent in Melanoma 2&quot;&mdash;Q-RETIX&apos;s precise, titratable allosteric inhibition allows for the careful management of the immune response, focusing exclusively on autoimmune overactivity without permanently ablating baseline function.)
        </p>

        {/* Blog Image 3 */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-[#F8FAFB] border border-[#E6EEF2] mb-8">
          <Image
            src="/images/blog/1blog3.jpg"
            alt="AIM2 Therapeutic Market and Indications"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 800px"
          />
        </div>

        <h2 id="conclusion" className="text-2xl font-bold text-[#33415C] mt-12 mb-4 scroll-mt-32">
          6. Conclusion: The Power of AI in Structural Biology
        </h2>
        <p className="text-[#5A6B82] leading-relaxed mb-6">
          The story of AIM2 is a testament to the limitations of traditional drug discovery and the transformative power of <strong>Q-RETIX.AI</strong>.
        </p>
        <p className="text-[#5A6B82] leading-relaxed mb-6">
          When human intuition and standard biochemical assays encountered the impenetrable Electrostatic Charge Trap, pharmaceutical development ceased. By shifting the computational focus away from the obvious, highly charged active sites, Q-RETIX discovered a protected interdomain junction that fundamentally alters how we can control protein function.
        </p>
        <p className="text-[#5A6B82] leading-relaxed mb-6">
          Our AI-driven design achieves what was previously thought impossible: high specificity and high membrane permeability in a DNA sensor inhibitor. This success not only yields a highly lucrative, first-in-class asset for autoimmune disease but also establishes Q-RETIX.AI as the definitive platform for unlocking the industry&apos;s most challenging, dormant therapeutic targets.
        </p>
        <p className="text-[#5A6B82] leading-relaxed mb-8">
          <strong>Q-RETIX has cracked the AIM2 code. The inflammasome can finally be stopped.</strong>
        </p>
      </>
    ),
  },

  /* ────────────── Blog 2: SREBF1 / Diabetes ────────────── */

  "decoding-diabetes-srebf1-gene-discovery": {
    title: "Decoding Diabetes: AI's Breakthrough in Gene Discovery",
    excerpt:
      "How Q-RETIX AI Identified SREBF1 as a Systems-Level Therapeutic Target for Type 2 Diabetes",
    category: "Research",
    date: "July 19, 2026",
    readTime: "12 min read",
    author: "Q-RETIX Research Team",
    authorRole: "Metabolic AI Drug Discovery, Q-RETIX.AI",
    cover: "/images/blog/cover2.jpg",
    tocSections: [
      { label: "Executive Summary", id: "executive-summary" },
      { label: "The Diabetes Paradox", id: "the-diabetes-paradox" },
      { label: "The Traditional Bottleneck: Downstream Thinking", id: "the-traditional-bottleneck" },
      { label: "Enter Q-RETIX AI: Redefining Target Discovery", id: "enter-q-retix-ai" },
      { label: "Comparative Pharmacology", id: "comparative-pharmacology" },
      { label: "Target Validation and Mechanistic Logic", id: "target-validation" },
      { label: "Therapeutic Implications", id: "therapeutic-implications" },
      { label: "The Q-RETIX AI Discovery Framework", id: "discovery-framework" },
      { label: "Conclusion: AI Beyond Prediction", id: "conclusion" },
    ],
    body: (
      <>
        <h2 id="executive-summary" className="text-2xl font-bold text-[#33415C] mt-12 mb-4 scroll-mt-32">
          Executive Summary
        </h2>
        <p className="text-[#5A6B82] leading-relaxed mb-6">
          Type 2 Diabetes Mellitus (T2DM) is a pervasive condition affecting over half a billion individuals worldwide, posing significant challenges despite numerous therapeutic advances over the years. Current treatments primarily aim to control blood sugar levels by various methods, such as stimulating insulin secretion, enhancing insulin sensitivity, or promoting renal glucose excretion. However, these strategies often fail to tackle the root molecular causes behind insulin resistance.
        </p>
        <p className="text-[#5A6B82] leading-relaxed mb-6">
          <strong>Q-RETIX AI</strong> introduces a revolutionary approach by delving into metabolic regulatory networks to pinpoint crucial control nodes that impact lipid metabolism, inflammatory signaling, and overall insulin sensitivity. This led to the groundbreaking discovery of <strong>Sterol Regulatory Element-Binding Protein 1 (SREBF1)</strong> as a pivotal systems biology target.
        </p>
        <p className="text-[#5A6B82] leading-relaxed mb-6">
          In contrast to downstream metabolic enzymes, SREBF1 serves as a master transcriptional regulator, overseeing lipid biosynthesis, metabolic inflammation, and cellular energy homeostasis. By modulating SREBF1, it is possible to simultaneously influence multiple pathogenic pathways, addressing the core of insulin resistance rather than merely its symptoms.
        </p>
        <p className="text-[#5A6B82] leading-relaxed mb-8">
          This comprehensive report elucidates the computational reasoning, biological architecture, and therapeutic rationale that underpin Q-RETIX AI&apos;s discovery.
        </p>

        <h2 id="the-diabetes-paradox" className="text-2xl font-bold text-[#33415C] mt-12 mb-4 scroll-mt-32">
          1. The Diabetes Paradox: Treating Glucose Instead of Disease
        </h2>
        <p className="text-[#5A6B82] leading-relaxed mb-6">
          While elevated blood glucose is a characteristic feature of Type 2 Diabetes, hyperglycemia is not the initiating factor of the disease. Insulin resistance begins to develop well before glucose levels become abnormal, driven by several factors:
        </p>
        <ul className="list-disc pl-5 space-y-3 text-[#5A6B82] mb-6">
          <li>Excess caloric intake</li>
          <li>Chronic hyperinsulinemia</li>
          <li>Dysregulated lipid synthesis</li>
          <li>Mitochondrial stress</li>
          <li>Low-grade inflammation</li>
          <li>Metabolic remodeling</li>
        </ul>
        <p className="text-[#5A6B82] leading-relaxed mb-6">
          These factors collectively lead to systemic insulin resistance that affects the liver, skeletal muscles, and adipose tissue. Most therapies focus on managing glucose after insulin resistance has set in, rarely interrupting the biological processes that initiate it.
        </p>

        <h3 className="text-xl font-semibold text-[#33415C] mt-8 mb-3">
          Structural Architecture of Metabolic Homeostasis
        </h3>
        <p className="text-[#5A6B82] leading-relaxed mb-6">
          Under normal circumstances, SREBF1 is tightly regulated, orchestrating gene expression responsible for:
        </p>
        <ul className="list-disc pl-5 space-y-3 text-[#5A6B82] mb-6">
          <li>Fatty acid synthesis</li>
          <li>Triglyceride production</li>
          <li>Lipid storage</li>
          <li>Membrane biosynthesis</li>
          <li>Energy metabolism</li>
        </ul>
        <p className="text-[#5A6B82] leading-relaxed mb-6">
          Proper activation of these pathways ensures normal metabolism and prevents excessive lipid accumulation. However, chronic nutritional overload and persistent insulin signaling can lead to pathological activation of SREBF1.
        </p>

        {/* ── Image 1 ── */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-[#F8FAFB] border border-[#E6EEF2] mb-8">
          <Image
            src="/images/blog/2blog1.jpg"
            alt="SREBF1 Pathological Activation"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 800px"
          />
        </div>

        <h2 id="the-traditional-bottleneck" className="text-2xl font-bold text-[#33415C] mt-12 mb-4 scroll-mt-32">
          2. The Traditional Bottleneck: Downstream Thinking
        </h2>
        <p className="text-[#5A6B82] leading-relaxed mb-6">
          Historically, pharmaceuticals have targeted individual metabolic enzymes such as:
        </p>
        <ul className="list-disc pl-5 space-y-3 text-[#5A6B82] mb-6">
          <li>Fatty Acid Synthase (FASN)</li>
          <li>Acetyl-CoA Carboxylase (ACACA)</li>
          <li>DGAT enzymes</li>
          <li>SCD1</li>
        </ul>
        <p className="text-[#5A6B82] leading-relaxed mb-6">
          These enzymes operate downstream of SREBF1, often resulting in metabolic compensation through alternative pathways, thereby reducing drug efficacy over time. Q-RETIX AI identified this as a systems-level limitation rather than a mere chemistry problem.
        </p>

        <h3 className="text-xl font-semibold text-[#33415C] mt-8 mb-3">
          The Lipotoxicity Cascade
        </h3>
        <p className="text-[#5A6B82] leading-relaxed mb-4">
          Q-RETIX AI prioritized lipid toxicity as the primary disease bottleneck, reconstructing the following pathological cascade:
        </p>
        <ol className="list-decimal pl-5 space-y-3 text-[#5A6B82] mb-8">
          <li>Chronic Hyperinsulinemia</li>
          <li>Persistent SREBF1 Activation</li>
          <li>Excessive Lipogenesis</li>
          <li>Intracellular Lipid Accumulation</li>
          <li>Endoplasmic Reticulum Stress</li>
          <li>Inflammatory Cytokine Production</li>
          <li>IRS-1 Signaling Dysfunction</li>
          <li>Insulin Resistance</li>
          <li>Progressive Type 2 Diabetes</li>
        </ol>
        <p className="text-[#5A6B82] leading-relaxed mb-8">
          By targeting the earliest regulatory node, the AI anticipates the disruption of the entire downstream disease network.
        </p>

        <h2 id="enter-q-retix-ai" className="text-2xl font-bold text-[#33415C] mt-12 mb-4 scroll-mt-32">
          3. Enter Q-RETIX AI: Redefining Target Discovery
        </h2>
        <p className="text-[#5A6B82] leading-relaxed mb-6">
          Traditional computational screening evaluates predefined targets. In contrast, <strong>Q-RETIX AI</strong> employs a systems-level approach, integrating:
        </p>
        <ul className="list-disc pl-5 space-y-3 text-[#5A6B82] mb-6">
          <li>Gene regulatory networks</li>
          <li>Transcriptomic datasets</li>
          <li>Metabolic pathway architecture</li>
          <li>Protein interaction networks</li>
          <li>Disease ontology</li>
          <li>Functional genomics</li>
          <li>Literature intelligence</li>
        </ul>
        <p className="text-[#5A6B82] leading-relaxed mb-6">
          SREBF1 emerged as the dominant regulatory node due to its pivotal role in:
        </p>
        <ul className="list-disc pl-5 space-y-3 text-[#5A6B82] mb-6">
          <li>Lipogenesis</li>
          <li>Cholesterol synthesis</li>
          <li>Fatty acid metabolism</li>
          <li>Cellular nutrient sensing</li>
          <li>Endoplasmic reticulum homeostasis</li>
        </ul>
        <p className="text-[#5A6B82] leading-relaxed mb-8">
          SREBF1&apos;s systems-level influence explains its high biological priority score.
        </p>

        {/* ── Image 2 ── */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-[#F8FAFB] border border-[#E6EEF2] mb-8">
          <Image
            src="/images/blog/2blog2.jpg"
            alt="SREBF1 Systems-Level Influence"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 800px"
          />
        </div>

        <h2 id="comparative-pharmacology" className="text-2xl font-bold text-[#33415C] mt-12 mb-4 scroll-mt-32">
          4. Comparative Pharmacology: A Systems Biology Approach
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#2C4D78] text-white">
                <th className="text-left px-4 py-3 font-semibold rounded-tl-xl">Pharmacological Layer</th>
                <th className="text-left px-4 py-3 font-semibold">Traditional Strategy</th>
                <th className="text-left px-4 py-3 font-semibold rounded-tr-xl">Q-RETIX AI Strategy</th>
              </tr>
            </thead>
            <tbody className="text-[#5A6B82]">
              <tr className="border-b border-[#E6EEF2] bg-white">
                <td className="px-4 py-3 font-medium text-[#33415C]">Therapeutic Target</td>
                <td className="px-4 py-3">Individual enzymes</td>
                <td className="px-4 py-3">Master transcription factor</td>
              </tr>
              <tr className="border-b border-[#E6EEF2] bg-[#F8FAFB]">
                <td className="px-4 py-3 font-medium text-[#33415C]">Biological Scope</td>
                <td className="px-4 py-3">Single pathway</td>
                <td className="px-4 py-3">Entire metabolic network</td>
              </tr>
              <tr className="border-b border-[#E6EEF2] bg-white">
                <td className="px-4 py-3 font-medium text-[#33415C]">Compensation Risk</td>
                <td className="px-4 py-3">High</td>
                <td className="px-4 py-3">Significantly reduced</td>
              </tr>
              <tr className="border-b border-[#E6EEF2] bg-[#F8FAFB]">
                <td className="px-4 py-3 font-medium text-[#33415C]">Inflammatory Control</td>
                <td className="px-4 py-3">Indirect</td>
                <td className="px-4 py-3">Direct</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 font-medium text-[#33415C] rounded-bl-xl">Disease Modification</td>
                <td className="px-4 py-3">Limited</td>
                <td className="px-4 py-3 rounded-br-xl">Potential systems-level correction</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-[#5A6B82] leading-relaxed mb-8">
          The advantage lies in improved biological positioning rather than merely stronger inhibition.
        </p>

        <h2 id="target-validation" className="text-2xl font-bold text-[#33415C] mt-12 mb-4 scroll-mt-32">
          5. Target Validation and Mechanistic Logic
        </h2>

        <h3 className="text-xl font-semibold text-[#33415C] mt-8 mb-3">
          Nuclear Transcriptional Control
        </h3>
        <p className="text-[#5A6B82] leading-relaxed mb-6">
          SREBF1, part of the basic helix-loop-helix leucine zipper family, translocates to the nucleus to initiate lipid synthesis gene transcription. Persistent activation leads to excessive lipid accumulation in metabolically active tissues.
        </p>

        <h3 className="text-xl font-semibold text-[#33415C] mt-8 mb-3">
          Immunometabolism Integration
        </h3>
        <p className="text-[#5A6B82] leading-relaxed mb-6">
          Q-RETIX AI observed a convergence of metabolism and inflammation, where lipid overload activates:
        </p>
        <ul className="list-disc pl-5 space-y-3 text-[#5A6B82] mb-6">
          <li>NF-&kappa;B signaling</li>
          <li>JNK pathways</li>
          <li>NLRP3 inflammasome activation</li>
          <li>Endoplasmic reticulum stress</li>
          <li>Oxidative stress responses</li>
        </ul>
        <p className="text-[#5A6B82] leading-relaxed mb-8">
          These mechanisms impair insulin receptor signaling, establishing chronic insulin resistance. Targeting SREBF1 offers both metabolic and anti-inflammatory benefits.
        </p>

        <h2 id="therapeutic-implications" className="text-2xl font-bold text-[#33415C] mt-12 mb-4 scroll-mt-32">
          6. Therapeutic Implications
        </h2>
        <p className="text-[#5A6B82] leading-relaxed mb-6">
          Modulating SREBF1 may benefit disorders characterized by pathological lipid metabolism:
        </p>

        <h3 className="text-xl font-semibold text-[#33415C] mt-8 mb-3">
          Type 2 Diabetes Mellitus
        </h3>
        <ul className="list-disc pl-5 space-y-3 text-[#5A6B82] mb-6">
          <li>Reduction of insulin resistance</li>
          <li>Improved hepatic glucose regulation</li>
          <li>Lower metabolic inflammation</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#33415C] mt-8 mb-3">
          Non-Alcoholic Fatty Liver Disease (NAFLD)
        </h3>
        <ul className="list-disc pl-5 space-y-3 text-[#5A6B82] mb-6">
          <li>Reduced hepatic lipid accumulation</li>
          <li>Improved liver function</li>
          <li>Attenuation of steatohepatitis progression</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#33415C] mt-8 mb-3">
          Metabolic Syndrome
        </h3>
        <ul className="list-disc pl-5 space-y-3 text-[#5A6B82] mb-6">
          <li>Normalization of lipid metabolism</li>
          <li>Improved systemic insulin sensitivity</li>
          <li>Reduction in chronic inflammatory burden</li>
        </ul>

        {/* ── Image 3 ── */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-[#F8FAFB] border border-[#E6EEF2] mb-8">
          <Image
            src="/images/blog/2blog3.jpg"
            alt="Therapeutic Implications of SREBF1 Modulation"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 800px"
          />
        </div>

        <h3 className="text-xl font-semibold text-[#33415C] mt-8 mb-3">
          Cardiovascular Disease
        </h3>
        <ul className="list-disc pl-5 space-y-3 text-[#5A6B82] mb-8">
          <li>Lower lipotoxic stress</li>
          <li>Improved vascular metabolism</li>
          <li>Reduced inflammatory signaling</li>
        </ul>

        <h2 id="discovery-framework" className="text-2xl font-bold text-[#33415C] mt-12 mb-4 scroll-mt-32">
          7. The Q-RETIX AI Discovery Framework
        </h2>
        <p className="text-[#5A6B82] leading-relaxed mb-6">
          The discovery process involved four computational stages:
        </p>
        <ol className="list-decimal pl-5 space-y-3 text-[#5A6B82] mb-8">
          <li>
            <strong>Literature Intelligence</strong>
          </li>
          <li>
            <strong>Systems Biology Network Construction</strong>
          </li>
          <li>
            <strong>Regulatory Node Prioritization</strong>
          </li>
          <li>
            <strong>Mechanistic Validation</strong>
          </li>
        </ol>
        <p className="text-[#5A6B82] leading-relaxed mb-8">
          SREBF1 was selected as the primary therapeutic target. Unlike conventional methods, Q-RETIX AI begins with disease architecture.
        </p>

        <h2 id="conclusion" className="text-2xl font-bold text-[#33415C] mt-12 mb-4 scroll-mt-32">
          Conclusion: AI Beyond Prediction
        </h2>
        <p className="text-[#5A6B82] leading-relaxed mb-6">
          The identification of SREBF1 exemplifies how AI can extend beyond predictive analytics to mechanistic scientific reasoning. Instead of asking, &ldquo;Which molecule binds this protein?&rdquo;, Q-RETIX AI probes deeper, asking, &ldquo;Which biological control point governs the disease?&rdquo;
        </p>
        <p className="text-[#5A6B82] leading-relaxed mb-6">
          By identifying SREBF1 as a systems-level regulator, the platform highlights an upstream therapeutic opportunity that could transform future metabolic drug discovery. While computational findings require experimental validation, this work illustrates Q-RETIX AI&apos;s broader vision: discovering hidden biological control nodes that conventional approaches might overlook.
        </p>
      </>
    ),
  },
};

/* ────────────── Component ────────────── */

export default function BlogPost({ slug }: { slug: string }) {
  const post = posts[slug];
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    if (!post) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    post.tocSections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [slug, post]);

  if (!post) return null;

  const handleTocClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -120;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="pt-[96px]">
      <section className="relative py-16 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-[#5A6B82] hover:text-[#2C4D78] transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>

              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#E6EEF2] text-sm font-medium text-[#2C4D78] mb-4">
                {post.category}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C4D78] mb-4 tracking-tight">
                {post.title}
              </h1>
              <p className="text-lg text-[#5A6B82] leading-relaxed mb-6">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-[#8A9BB0] mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#E6EEF2] flex items-center justify-center">
                    <User className="w-4 h-4 text-[#2C4D78]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#33415C]">{post.author}</p>
                    <p className="text-xs">{post.authorRole}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cover Image - full width, perfectly fitted */}
      <div className="relative w-full aspect-[21/9] sm:aspect-[3/1] lg:aspect-[4/1] overflow-hidden">
        <Image
          src={post.cover}
          alt={post.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/90" />
      </div>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12 max-w-5xl mx-auto">
            <div>
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="prose prose-lg max-w-none"
              >
                {post.body}
              </motion.article>

              <div className="mt-12 pt-8 border-t border-[#D0E0E8]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-[#5A6B82]">Share:</span>
                    <div className="flex gap-2">
                      {[
                        { icon: Share2, label: "Share" },
                        { icon: LinkIcon, label: "Copy Link" },
                      ].map((social) => (
                        <button
                          key={social.label}
                          aria-label={social.label}
                          className="w-9 h-9 rounded-lg bg-[#E6EEF2] flex items-center justify-center text-[#5A6B82] hover:text-[#2C4D78] hover:bg-[#D0E0E8] transition-colors"
                        >
                          <social.icon className="w-4 h-4" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky Sidebar */}
            <div className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                {/* Table of Contents */}
                <div className="bg-white rounded-2xl border border-[#D0E0E8] p-6">
                  <h4 className="text-sm font-semibold text-[#33415C] mb-4">Table of Contents</h4>
                  <nav className="space-y-1">
                    {post.tocSections.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        onClick={(e) => handleTocClick(e, section.id)}
                        className={`block text-sm py-1.5 px-2 rounded-lg transition-colors ${
                          activeSection === section.id
                            ? "text-[#2C4D78] font-medium bg-[#E6EEF2]"
                            : "text-[#5A6B82] hover:text-[#2C4D78] hover:bg-[#F8FAFB]"
                        }`}
                      >
                        {section.label}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* CTA Card */}
                <div className="bg-gradient-to-br from-[#2C4D78] to-[#3D5F8A] rounded-2xl p-6 text-white">
                  <h4 className="text-sm font-semibold mb-2">Stay Updated</h4>
                  <p className="text-sm text-white/70 mb-4">
                    Get the latest research insights delivered to your inbox.
                  </p>
                  <Link
                    href="/blog"
                    className="w-full bg-white text-[#2C4D78] hover:bg-white/90 font-semibold inline-flex items-center justify-center gap-2 h-10 rounded-lg text-sm px-4 py-2 transition-colors"
                  >
                    Subscribe
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaitlistCommunitySection />
    </div>
  );
}
