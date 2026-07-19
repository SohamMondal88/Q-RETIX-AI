import React from "react";
import { Metadata } from "next";
import { Code, ArrowRight, Copy, Check, Terminal, Globe, Webhook } from "lucide-react";

export const metadata: Metadata = {
  title: "API Reference | Q-RETIX AI",
  description: "Complete API documentation for Q-RETIX AI platform integration.",
};

const endpoints = [
  {
    method: "GET",
    path: "/v1/compounds",
    description: "List all compounds in the database",
  },
  {
    method: "POST",
    path: "/v1/compounds/screen",
    description: "Run AI screening on a compound",
  },
  {
    method: "GET",
    path: "/v1/trials",
    description: "List clinical trials",
  },
  {
    method: "POST",
    path: "/v1/trials/analyze",
    description: "Analyze trial data with AI models",
  },
  {
    method: "GET",
    path: "/v1/reports",
    description: "Generate compliance reports",
  },
];

const codeExample = `curl -X POST https://api.qretix.ai/v1/compounds/screen \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "smiles": "CC(C)Cc1ccc(C(C)C(=O)O)cc1",
    "target": "COX-2",
    "model": "affinity_v3"
  }'`;

export default function APIReferencePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-[#F8FAFB]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-[#2C4D78] to-[#98D7C2] rounded-full" />
              <span className="text-[13px] font-bold text-[#2C4D78] uppercase tracking-[0.15em]">API Reference</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#2C4D78] tracking-tight mb-6 leading-tight">
              REST API
            </h1>
            <p className="text-lg text-[#5A6B82] leading-relaxed">
              Integrate Q-RETIX AI directly into your applications with our powerful REST API.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-[#0f172a] rounded-2xl p-6 overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-[#98D7C2]" />
                    <span className="text-sm font-medium text-white">Example Request</span>
                  </div>
                  <button className="flex items-center gap-1.5 text-[11px] text-[#5A6B82] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded">
                    <Copy className="w-3 h-3" />
                    Copy
                  </button>
                </div>
                <pre className="text-[13px] text-[#D0E0E8] overflow-x-auto">
                  <code>{codeExample}</code>
                </pre>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#2C4D78] mb-6">Endpoints</h2>
                <div className="space-y-3">
                  {endpoints.map((endpoint) => (
                    <div
                      key={endpoint.path}
                      className="flex items-center gap-4 p-4 rounded-xl bg-[#F8FAFB] border border-[#E6EEF2] hover:border-[#A8DADC] transition-colors"
                    >
                      <span className={`text-[11px] font-bold px-2 py-1 rounded ${
                        endpoint.method === "GET"
                          ? "bg-[#98D7C2]/20 text-[#2C4D78]"
                          : "bg-[#2C4D78]/20 text-[#2C4D78]"
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-[13px] font-mono text-[#33415C]">{endpoint.path}</code>
                      <span className="text-[13px] text-[#5A6B82] ml-auto">{endpoint.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-[#F8FAFB] rounded-2xl p-8 border border-[#E6EEF2] sticky top-24">
                <h3 className="text-lg font-bold text-[#2C4D78] mb-6">API Status</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] text-[#5A6B82]">API Uptime</span>
                    <span className="text-[13px] font-bold text-[#98D7C2]">99.9%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] text-[#5A6B82]">Response Time</span>
                    <span className="text-[13px] font-bold text-[#2C4D78]">{"< 200ms"}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] text-[#5A6B82]">Version</span>
                    <span className="text-[13px] font-bold text-[#2C4D78]">v1.0.4</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#2C4D78] to-[#1A3650] rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Webhook className="w-6 h-6 text-[#98D7C2]" />
                  <h3 className="text-lg font-semibold">Need Help?</h3>
                </div>
                <p className="text-sm text-white/70 mb-6">
                  Our developer support team is available to help with integration questions.
                </p>
                <a
                  href="mailto:api@qretix.ai"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#98D7C2] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded"
                >
                  Contact Developer Support
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
