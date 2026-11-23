import React, { useState, useEffect } from 'react';
import {
  Menu, X, ChevronRight, Code2, Layers,
  MonitorSmartphone, Database, Phone, Mail,
  MapPin, Send, Cpu, ShieldCheck, Zap,
  ArrowUpRight, CheckCircle2, Sparkles,
  Terminal, BarChart3, Globe2, Lock,
  Workflow, Rocket, MessageSquare, HelpCircle,
  ChevronDown, Activity, Server, GitBranch,
  Clock, Users
} from 'lucide-react';
import ZykonLogo from './components/ZykonLogo';

const WHATSAPP_NUMBER = '5562981919282';
const WHATSAPP_DISPLAY = '+55 (62) 98191-9282';
const OFFICIAL_DOMAIN = 'zykon.com.br';
const OFFICIAL_EMAIL = 'contato@zykon.com.br';

const getWhatsAppUrl = (customText) => {
  const defaultMsg = 'Olá! Vim pelo site zykon.com.br e gostaria de conversar sobre um projeto.';
  const text = encodeURIComponent(customText || defaultMsg);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
};

/* ==========================================
   NAVBAR
========================================== */
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      const sections = ['home', 'solucoes', 'arquitetura', 'processo', 'sobre', 'faq', 'contato'];
      const scrollPos = window.scrollY + 200;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home', id: 'home' },
    { name: 'Soluções', href: '#solucoes', id: 'solucoes' },
    { name: 'Engenharia', href: '#arquitetura', id: 'arquitetura' },
    { name: 'Processo', href: '#processo', id: 'processo' },
    { name: 'Sobre', href: '#sobre', id: 'sobre' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#050508]/80 backdrop-blur-xl border-b border-purple-500/15 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" className="focus:outline-none">
            <ZykonLogo size="sm" />
          </a>

          {/* Desktop Navigation Pill */}
          <nav className="hidden lg:flex items-center gap-1 px-2 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.07] backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 ${
                    isActive
                      ? 'bg-purple-600/25 text-purple-200 border border-purple-500/40 shadow-[0_0_15px_rgba(147,51,234,0.25)]'
                      : 'text-gray-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* CTA Action */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(124,58,237,0.75)] hover:scale-[1.02] transition-all duration-300"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping absolute -left-0.5 -top-0.5" />
              <span>Falar com Especialista</span>
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white focus:outline-none"
              aria-label="Abrir Menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#07070C]/95 backdrop-blur-2xl border-b border-purple-500/20 shadow-2xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-gray-200 hover:text-purple-400 hover:bg-purple-500/10 transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight size={16} className="text-purple-400" />
              </a>
            ))}
            <div className="pt-3 border-t border-white/10">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-sm shadow-lg shadow-purple-900/40"
              >
                <Phone size={16} />
                Falar com Especialista no WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

/* ==========================================
   HERO SECTION + INTERACTIVE DASHBOARD PREVIEW
========================================== */
const Hero = () => {
  const [activeTab, setActiveTab] = useState('saas');

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-[#050508]">
      {/* Ambient Lighting */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-purple-700/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-[450px] h-[450px] bg-indigo-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-violet-800/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Cyber Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_75%_60%_at_50%_25%,#000_65%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center flex flex-col items-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-200 text-xs sm:text-sm font-medium mb-8 shadow-[0_0_25px_rgba(139,92,246,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400" />
            </span>
            <span>Engenharia de Software & Soluções SaaS de Alta Performance</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-5xl leading-[1.08] mb-6">
            CONECTANDO IDEIAS.{' '}
            <span className="block mt-1 bg-gradient-to-r from-white via-purple-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(168,85,247,0.35)]">
              CRIANDO O FUTURO.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-2 max-w-2xl text-base sm:text-lg md:text-xl text-gray-400 mb-10 font-normal leading-relaxed">
            Transformamos desafios operacionais complexos em <strong className="text-gray-200 font-semibold">plataformas digitais escaláveis</strong>.
            Desenvolvemos SaaS sob medida, sistemas ERP inteligentes e arquiteturas em nuvem prontas para o crescimento da sua empresa.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center mb-16">
            <a
              href={getWhatsAppUrl('Olá! Quero tirar um projeto do papel com a Zykon Tecnologia.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white font-bold text-base overflow-hidden transition-all duration-300 hover:scale-[1.02] shadow-[0_0_35px_rgba(124,58,237,0.5)] hover:shadow-[0_0_50px_rgba(139,92,246,0.8)]"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <span className="relative flex items-center gap-2">
                Iniciar Meu Projeto
                <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </span>
            </a>

            <a
              href="#solucoes"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-gray-200 font-semibold text-base hover:bg-white/[0.07] hover:border-purple-500/40 transition-all"
            >
              Explorar Soluções
            </a>
          </div>
        </div>

        {/* Interactive System Architecture & SaaS Cockpit Preview */}
        <div className="relative mx-auto max-w-5xl mt-2">
          {/* Outer Neon Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/40 via-indigo-500/30 to-purple-600/40 rounded-3xl blur-xl opacity-70 pointer-events-none" />

          <div className="relative rounded-2xl bg-[#0A0A12]/90 border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl">
            {/* Browser / Cockpit Topbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-3.5 bg-[#0F0F1A] border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-3 text-xs font-mono text-gray-400 hidden sm:inline-block">
                  https://app.zykon.com.br/core-platform
                </span>
              </div>

              {/* Interactive Switcher Tabs */}
              <div className="flex items-center gap-1.5 bg-black/50 p-1 rounded-lg border border-white/5">
                {[
                  { id: 'saas', label: 'SaaS & Telemetria', icon: Activity },
                  { id: 'erp', label: 'ERP & Logística', icon: Workflow },
                  { id: 'code', label: 'Arquitetura Cloud', icon: Terminal },
                ].map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-all ${
                        activeTab === tab.id
                          ? 'bg-purple-600 text-white shadow-[0_0_12px_rgba(147,51,234,0.6)]'
                          : 'text-gray-400 hover:text-gray-200'
                      }`}
                    >
                      <Icon size={13} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="hidden md:flex items-center gap-2 text-xs text-emerald-400 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>99.98% UPTIME</span>
              </div>
            </div>

            {/* Cockpit Body */}
            <div className="p-6 sm:p-8">
              {activeTab === 'saas' && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                  {/* KPI Cards */}
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.07]">
                      <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                        <span>Receita Recorrente (MRR)</span>
                        <span className="text-emerald-400 font-mono font-semibold">+34.8%</span>
                      </div>
                      <div className="text-2xl font-display font-bold text-white">Escalabilidade Multi-Tenant</div>
                      <p className="text-xs text-gray-500 mt-1">Assinaturas, Split de Pagamentos e Dashboards em Tempo Real</p>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.07]">
                      <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                        <span>Tempo de Resposta da API</span>
                        <span className="text-purple-400 font-mono font-semibold">18ms p95</span>
                      </div>
                      <div className="text-2xl font-display font-bold text-white">Alta Disponibilidade</div>
                      <div className="mt-3 w-full bg-white/5 h-2 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 h-full w-[94%] rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Simulated Real-Time Chart */}
                  <div className="lg:col-span-2 p-5 rounded-xl bg-gradient-to-br from-purple-950/20 via-[#0D0D17] to-[#0D0D17] border border-purple-500/20 flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <span className="text-xs uppercase tracking-wider text-purple-400 font-semibold">Performance em Produção</span>
                        <h3 className="text-lg font-bold text-white">Processamento de Eventos & Usuários Ativos</h3>
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20">
                        LIVE TELEMETRY
                      </span>
                    </div>

                    {/* Visual Bars */}
                    <div className="grid grid-cols-12 gap-2 items-end h-32 pt-4 px-1">
                      {[35, 48, 42, 60, 54, 72, 68, 84, 76, 92, 88, 100].map((height, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-1.5 h-full justify-end group">
                          <div
                            style={{ height: `${height}%` }}
                            className="w-full rounded-t-md bg-gradient-to-t from-purple-900/40 via-purple-600/80 to-purple-400 transition-all duration-500 group-hover:from-purple-500 group-hover:to-white"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-gray-500 pt-3 border-t border-white/5 mt-3">
                      <span>Autenticação JWT / OAuth2</span>
                      <span>Webhooks Assíncronos</span>
                      <span>Relatórios Automatizados</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'erp' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                    <div className="w-9 h-9 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-300 mb-3">
                      <MapPin size={18} />
                    </div>
                    <h4 className="text-white font-bold text-base mb-1">Otimização de Rotas & Frota</h4>
                    <p className="text-gray-400 text-xs leading-relaxed mb-3">
                      Rastreamento operacional, cálculo inteligente de entregas e redução de custos logísticos em tempo real.
                    </p>
                    <span className="text-[11px] font-mono text-emerald-400">● Sincronizado com GPS / Mobile</span>
                  </div>

                  <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                    <div className="w-9 h-9 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-300 mb-3">
                      <Layers size={18} />
                    </div>
                    <h4 className="text-white font-bold text-base mb-1">Controle de Estoque & SKU</h4>
                    <p className="text-gray-400 text-xs leading-relaxed mb-3">
                      Movimentação multi-depósito, alertas automáticos de reposição, curva ABC e leitura integrada.
                    </p>
                    <span className="text-[11px] font-mono text-purple-300">● Zero ruptura de inventário</span>
                  </div>

                  <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                    <div className="w-9 h-9 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-300 mb-3">
                      <BarChart3 size={18} />
                    </div>
                    <h4 className="text-white font-bold text-base mb-1">Gestão Financeira & DRE</h4>
                    <p className="text-gray-400 text-xs leading-relaxed mb-3">
                      Fluxo de caixa automatizado, conciliação bancária, faturamento e indicadores estratégicos para diretoria.
                    </p>
                    <span className="text-[11px] font-mono text-indigo-300">● Relatórios exportáveis em 1 clique</span>
                  </div>
                </div>
              )}

              {activeTab === 'code' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center font-mono text-xs">
                  <div className="p-4 rounded-xl bg-black/70 border border-white/10 text-gray-300 space-y-1.5 overflow-x-auto">
                    <div className="text-gray-500">// Arquitetura Escalável Zykon Tecnologia (zykon.com.br)</div>
                    <div>
                      <span className="text-purple-400">export const</span>{' '}
                      <span className="text-indigo-300">deployZykonCluster</span> = <span className="text-purple-400">async</span> (tenant) =&gt; {'{'}
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-400">await</span> security.enforceZeroTrust(tenant.id);
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-400">const</span> cluster = <span className="text-purple-400">await</span> cloud.autoScale({'{'}
                    </div>
                    <div className="pl-8 text-emerald-300">domain: &apos;zykon.com.br&apos;,</div>
                    <div className="pl-8 text-emerald-300">isolation: &apos;multi-tenant-strict&apos;,</div>
                    <div className="pl-8 text-emerald-300">slaTarget: 0.9998</div>
                    <div className="pl-4">{'}'});</div>
                    <div className="pl-4">
                      <span className="text-purple-400">return</span> cluster.streamTelemetry();
                    </div>
                    <div>{'}'};</div>
                  </div>

                  <div className="space-y-3 font-sans">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                      <ShieldCheck className="text-purple-400 shrink-0 mt-0.5" size={18} />
                      <div>
                        <h5 className="text-white font-semibold text-sm">Código 100% Auditável & Escalável</h5>
                        <p className="text-gray-400 text-xs">Padrões Clean Architecture, testes automatizados e CI/CD contínuo.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                      <Server className="text-indigo-400 shrink-0 mt-0.5" size={18} />
                      <div>
                        <h5 className="text-white font-semibold text-sm">Infraestrutura Cloud-Native</h5>
                        <p className="text-gray-400 text-xs">Containers Docker, bancos de dados otimizados e backups automáticos.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ==========================================
   TECH STACK STRIP
========================================== */
const TechStrip = () => {
  const stack = [
    'React & Next.js',
    'Node.js & TypeScript',
    'Arquitetura SaaS Multi-Tenant',
    'PostgreSQL & Redis',
    'AWS & Google Cloud',
    'Sistemas ERP Sob Medida',
    'APIs REST & GraphQL',
    'Docker & CI/CD',
    'UI/UX de Alta Conversão',
    'Automações & Integrações',
  ];

  return (
    <div className="py-8 bg-[#07070D] border-y border-white/[0.06] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
        <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-gray-500">
          ECOSSISTEMA TECNOLÓGICO DE PADRÃO INTERNACIONAL
        </p>
      </div>
      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-6 py-1">
          {[...stack, ...stack].map((item, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/[0.02] border border-white/[0.06] text-gray-300 text-xs font-medium"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ==========================================
   SOLUTIONS BENTO GRID
========================================== */
const Solutions = () => {
  return (
    <section id="solucoes" className="py-28 bg-[#050508] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-wider mb-4">
              <Sparkles size={13} />
              <span>Nossas Especialidades</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Soluções de <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Alto Impacto</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-base leading-relaxed">
            Desenhamos e construímos softwares sob medida para destravar gargalos operacionais e criar novas fontes de receita.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Card 1: SaaS Platforms (7 cols) */}
          <div className="lg:col-span-7 group relative rounded-3xl bg-gradient-to-b from-[#0E0E1A] to-[#080810] border border-white/[0.08] hover:border-purple-500/40 p-8 sm:p-10 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-600/15 rounded-full blur-3xl group-hover:bg-purple-600/25 transition-all" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-300">
                  <Layers size={24} />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                  Core Business
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                Plataformas SaaS Personalizadas
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8 max-w-xl">
                Desenvolvemos o seu produto digital comercializável do zero ao lançamento. Arquitetura multi-tenant segura, cobrança recorrente automatizada, controle de permissões por níveis e painéis analíticos completos.
              </p>
            </div>

            {/* Mini UI Feature Tags */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-white/[0.06]">
              {[
                'Multi-Tenant Isolado',
                'Checkout & Assinaturas',
                'Painel Admin Completo',
                'API Pública Documentada',
                'Onboarding Automático',
                'Métricas em Tempo Real',
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                  <CheckCircle2 size={14} className="text-purple-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: ERP Systems (5 cols) */}
          <div className="lg:col-span-5 group relative rounded-3xl bg-gradient-to-b from-[#0E0E1A] to-[#080810] border border-white/[0.08] hover:border-indigo-500/40 p-8 sm:p-10 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div className="absolute -left-16 -bottom-16 w-56 h-56 bg-indigo-600/15 rounded-full blur-3xl group-hover:bg-indigo-600/25 transition-all" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-300">
                  <MonitorSmartphone size={24} />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-indigo-300 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                  Eficiência Operacional
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-white mb-3">
                Sistemas de Gestão (ERP) & Logística
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Sistemas web e mobile sob medida para centralizar a operação da sua empresa: controle inteligente de rotas, gestão de estoque, faturamento e financeiro integrado.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-black/50 border border-white/5 space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400">Redução de retrabalho manual</span>
                <span className="text-emerald-400 font-mono font-bold">-75%</span>
              </div>
              <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-400 h-full w-4/5 rounded-full" />
              </div>
              <p className="text-[11px] text-gray-500">
                Substitua planilhas desconectadas por um sistema único feito para a regra do seu negócio.
              </p>
            </div>
          </div>

          {/* Card 3: Full-Stack Engineering (6 cols) */}
          <div className="lg:col-span-6 group relative rounded-3xl bg-gradient-to-b from-[#0E0E1A] to-[#080810] border border-white/[0.08] hover:border-purple-500/40 p-8 sm:p-10 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-300 mb-6">
              <Code2 size={24} />
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-3">
              Desenvolvimento Full-Stack & Aplicações Web
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Interfaces ultra-rápidas em React e Next.js combinadas com backends robustos em Node.js. Foco total em experiência do usuário (UX/UI), responsividade mobile e velocidade de carregamento.
            </p>
            <div className="flex flex-wrap gap-2">
              {['React.js', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'REST / WebSockets'].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.07] text-xs font-mono text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 4: Cloud & Database Architecture (6 cols) */}
          <div className="lg:col-span-6 group relative rounded-3xl bg-gradient-to-b from-[#0E0E1A] to-[#080810] border border-white/[0.08] hover:border-purple-500/40 p-8 sm:p-10 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-300 mb-6">
              <Database size={24} />
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-3">
              Arquitetura em Nuvem, APIs & Integrações
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Estruturação e otimização de infraestrutura cloud (AWS / GCP), modelagem de bancos de dados de alto desempenho e integração entre sistemas legados, gateways de pagamento, ERPs e WhatsApp.
            </p>
            <div className="flex flex-wrap gap-2">
              {['AWS / GCP', 'PostgreSQL', 'Docker', 'Segurança & LGPD', 'Integrações via API', 'Alta Disponibilidade'].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.07] text-xs font-mono text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ==========================================
   ENGINEERING DIFFERENTIALS (WHY ZYKON)
========================================== */
const EngineeringSection = () => {
  const pillars = [
    {
      icon: <Zap size={22} />,
      title: 'Performance Extrema',
      desc: 'Sistemas otimizados desde a consulta no banco de dados até a renderização no navegador, garantindo respostas instantâneas.'
    },
    {
      icon: <Lock size={22} />,
      title: 'Segurança por Design',
      desc: 'Criptografia de ponta a ponta, controle rigoroso de sessão, proteção contra vulnerabilidades web e conformidade com a LGPD.'
    },
    {
      icon: <GitBranch size={22} />,
      title: 'Código Limpo & Escalável',
      desc: 'Arquitetura modular documentada que permite adicionar novas funcionalidades no futuro sem precisar reescrever o sistema.'
    },
    {
      icon: <Globe2 size={22} />,
      title: 'UX/UI de Padrão Global',
      desc: 'Interfaces intuitivas que reduzem a curva de aprendizado da sua equipe e encantam os seus clientes finais.'
    }
  ];

  return (
    <section id="arquitetura" className="py-24 bg-[#080810] border-y border-white/[0.06] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-purple-900/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-purple-400">
            PADRÃO DE ENGENHARIA ZYKON
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
            Construído para durar, projetado para escalar.
          </h2>
          <p className="text-gray-400 text-base">
            Não entregamos apenas linhas de código. Entregamos ativos tecnológicos sólidos que valorizam a sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-purple-500/30 transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-5 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ==========================================
   PROCESS / HOW WE WORK
========================================== */
const ProcessSection = () => {
  const steps = [
    {
      num: '01',
      title: 'Imersão & Escopo Estratégico',
      desc: 'Mapeamos a fundo suas regras de negócio, dores operacionais e objetivos de crescimento para definir a arquitetura ideal.',
      badge: 'Discovery'
    },
    {
      num: '02',
      title: 'Prototipação & Design UI/UX',
      desc: 'Desenhamos a interface completa e navegável antes do código, garantindo clareza visual e validação rápida de cada tela.',
      badge: 'Design System'
    },
    {
      num: '03',
      title: 'Engenharia Ágil em Sprints',
      desc: 'Desenvolvimento com entregas semanais acompanháveis. Você vê a evolução real do seu sistema em ambiente de homologação.',
      badge: 'Clean Code'
    },
    {
      num: '04',
      title: 'Deploy, Treinamento & Escala',
      desc: 'Publicação em nuvem segura, testes de carga, treinamento da equipe e acompanhamento próximo para evolução contínua.',
      badge: 'Go-Live'
    }
  ];

  return (
    <section id="processo" className="py-28 bg-[#050508] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Rocket size={13} />
            <span>Metodologia Transparente</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white">
            Da ideia ao software em produção
          </h2>
          <p className="text-gray-400 mt-4">
            Um processo previsível, sem surpresas e com comunicação direta com quem constrói o seu projeto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative p-7 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.08] hover:border-purple-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-4xl font-bold bg-gradient-to-b from-purple-400 to-purple-900 bg-clip-text text-transparent">
                    {step.num}
                  </span>
                  <span className="text-[11px] font-mono uppercase px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/10">
                    {step.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2.5">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-purple-400 font-medium">
                <span>Etapa {step.num}</span>
                <ChevronRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ==========================================
   ABOUT SECTION (WITH BRAND SHOWCASE)
========================================== */
const About = () => {
  return (
    <section id="sobre" className="py-28 bg-[#07070E] border-t border-white/[0.06] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          {/* Brand Visual Showcase Card */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition duration-700" />
            <div className="relative rounded-3xl bg-[#050508] border border-white/10 p-6 sm:p-8 overflow-hidden flex flex-col items-center justify-center min-h-[380px]">
              <div className="absolute inset-0 bg-dot-pattern opacity-40" />

              {/* Uploaded Brand Artwork Image */}
              <div className="relative z-10 w-full flex flex-col items-center">
                <img
                  src="/zykon-logo.jpg"
                  alt="Zykon Tecnologia - Conectando Ideias. Criando o Futuro."
                  className="w-full max-w-md rounded-2xl object-contain shadow-2xl border border-white/5"
                />

                <div className="mt-6 w-full grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.07]">
                    <div className="text-lg font-display font-bold text-white">100%</div>
                    <div className="text-[10px] uppercase tracking-wider text-gray-400">Sob Medida</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.07]">
                    <div className="text-lg font-display font-bold text-purple-400">24/7</div>
                    <div className="text-[10px] uppercase tracking-wider text-gray-400">Cloud Ativa</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.07]">
                    <div className="text-lg font-display font-bold text-white">Brasil</div>
                    <div className="text-[10px] uppercase tracking-wider text-gray-400">Atuação Nacional</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content - Purple ONLY on "Z" */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-wider mb-4">
              <Cpu size={13} />
              <span>Sobre a Zykon Tecnologia</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Parceiros estratégicos na sua evolução com a{' '}
              <span className="inline-flex items-baseline">
                <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">Z</span>
                <span className="text-white">ykon.</span>
              </span>
            </h2>

            <p className="text-gray-300 text-base sm:text-lg mb-5 leading-relaxed">
              Nascemos da paixão por engenharia de software e inovação prática. A{' '}
              <strong className="font-bold text-white">
                <span className="text-purple-400">Z</span>ykon Tecnologia
              </strong>{' '}
              é mais do que uma fábrica de códigos: atuamos lado a lado com fundadores, gestores e empresas para transformar ideias ambiciosas em plataformas SaaS robustas e sistemas de gestão inteligentes.
            </p>

            <p className="text-gray-400 text-base mb-8 leading-relaxed">
              Nossa missão é descomplicar o complexo. Utilizamos as tecnologias mais modernas do mercado para entregar produtos rápidos, seguros e com uma experiência de uso (UX/UI) pensada para gerar produtividade e resultado real.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.07]">
                <Users className="text-purple-400 shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="text-white font-bold text-sm">Atendimento Direto & Consultivo</h4>
                  <p className="text-gray-400 text-xs mt-1">Sem intermediários burocráticos. Você fala diretamente com especialistas técnicos.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.07]">
                <Clock className="text-indigo-400 shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="text-white font-bold text-sm">Foco em ROI e Agilidade</h4>
                  <p className="text-gray-400 text-xs mt-1">Priorizamos entregas enxutas de alto valor para colocar seu produto no ar mais rápido.</p>
                </div>
              </div>
            </div>

            <a
              href={getWhatsAppUrl('Olá! Gostaria de conhecer melhor como a Zykon trabalha e conversar sobre uma ideia.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-purple-400 hover:text-purple-300 transition-colors"
            >
              <span>Agendar uma conversa sem compromisso</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ==========================================
   FAQ SECTION
========================================== */
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Como funciona o orçamento de um sistema ou SaaS sob medida?',
      a: 'Realizamos uma primeira conversa rápida pelo WhatsApp ou reunião online para entender seus objetivos e funcionalidades principais. A partir disso, estruturamos uma proposta técnica detalhada com cronograma de entregas e investimento transparente.'
    },
    {
      q: 'O código-fonte e a propriedade intelectual ficam com a minha empresa?',
      a: 'Sim, 100%. Todo software sob medida desenvolvido pela Zykon Tecnologia é de propriedade exclusiva do cliente, com documentação limpa e liberdade total para evoluir.'
    },
    {
      q: 'Vocês oferecem suporte e evolução após o lançamento do sistema?',
      a: 'Com certeza. Após a entrega em produção (Go-Live), oferecemos garantia técnica, monitoramento em nuvem e planos de acompanhamento contínuo para novas funcionalidades conforme sua operação cresce.'
    },
    {
      q: 'Ainda tenho apenas a ideia do projeto, a Zykon ajuda a estruturar?',
      a: 'Sim! Na nossa etapa inicial de Discovery e UI/UX, ajudamos você a transformar a ideia em um escopo enxuto (MVP) viável, desenhando as telas e definindo o caminho mais rápido para validar e escalar no mercado.'
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#050508] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-wider mb-3">
            <HelpCircle size={13} />
            <span>Dúvidas Frequentes</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Perguntas que costumamos receber
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'bg-white/[0.04] border-purple-500/40 shadow-[0_0_25px_rgba(124,58,237,0.1)]'
                    : 'bg-white/[0.02] border-white/[0.07] hover:border-white/15'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none"
                >
                  <span className="font-semibold text-white text-base sm:text-lg">{item.q}</span>
                  <ChevronDown
                    size={20}
                    className={`text-purple-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-gray-400 text-sm sm:text-base leading-relaxed border-t border-white/5 pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ==========================================
   CONTACT SECTION (WHATSAPP + CONTATO@ZYKON.COM.BR)
========================================== */
const Contact = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [projectType, setProjectType] = useState('Plataforma SaaS');
  const [message, setMessage] = useState('');

  const projectOptions = [
    'Plataforma SaaS',
    'Sistema ERP / Gestão',
    'Aplicação Web / App',
    'Automação & APIs',
    'Outro Desafio'
  ];

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const lines = [
      `Olá, equipe da *Zykon Tecnologia*! 👋`,
      ``,
      `*Nome:* ${name || 'Não informado'}`,
      company ? `*Empresa:* ${company}` : null,
      `*Interesse:* ${projectType}`,
      `*Detalhes do Projeto:* ${message || 'Gostaria de conversar sobre uma solução sob medida.'}`,
    ].filter(Boolean).join('\n');

    window.open(getWhatsAppUrl(lines), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-28 bg-[#07070D] relative border-t border-white/[0.08] overflow-hidden">
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-purple-900/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-wider mb-4">
              <MessageSquare size={13} />
              <span>Canais Oficiais • {OFFICIAL_DOMAIN}</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Vamos criar o futuro juntos.
            </h2>

            <p className="text-gray-400 text-base sm:text-lg mb-10 leading-relaxed">
              Tem um projeto em mente ou precisa modernizar a operação da sua empresa? Fale diretamente com a nossa engenharia pelo WhatsApp ou e-mail corporativo.
            </p>

            <div className="space-y-4">
              {/* WhatsApp Card */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-all">
                  <Phone size={22} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-white font-semibold">WhatsApp / Telefone Direto</h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      Online
                    </span>
                  </div>
                  <p className="text-purple-300 font-mono text-base mt-0.5">{WHATSAPP_DISPLAY}</p>
                  <p className="text-xs text-gray-500 mt-1">Clique para iniciar conversa imediata</p>
                </div>
              </a>

              {/* Official Email Card */}
              <a
                href={`mailto:${OFFICIAL_EMAIL}?subject=Contato%20Comercial%20-%20Zykon%20Tecnologia`}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-300 shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">E-mail Corporativo</h4>
                  <p className="text-indigo-300 font-mono text-sm sm:text-base mt-0.5">{OFFICIAL_EMAIL}</p>
                  <p className="text-xs text-gray-500 mt-1">Propostas comerciais, parcerias e documentação</p>
                </div>
              </a>

              {/* Location Card */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-purple-400 shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-0.5">Localização & Domínio Oficial</h4>
                  <p className="text-gray-400 text-sm">Goiás, Brasil • <span className="text-gray-300 font-mono">{OFFICIAL_DOMAIN}</span></p>
                  <p className="text-xs text-gray-500 mt-0.5">Atendimento 100% digital para todo o Brasil e exterior.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive WhatsApp Briefing Form */}
          <div className="lg:col-span-7 bg-[#0B0B14]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                Briefing Rápido do Projeto
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Preencha abaixo para abrir a conversa no WhatsApp já com os detalhes estruturados.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleWhatsAppSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                    placeholder="Ex: Lucas Xavier"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                    Empresa (Opcional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                    placeholder="Nome do seu negócio"
                  />
                </div>
              </div>

              {/* Project Type Selector Pills */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2.5">
                  Qual solução você busca?
                </label>
                <div className="flex flex-wrap gap-2">
                  {projectOptions.map((option) => (
                    <button
                      type="button"
                      key={option}
                      onClick={() => setProjectType(option)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-medium border transition-all ${
                        projectType === option
                          ? 'bg-purple-600/30 border-purple-500 text-white shadow-[0_0_15px_rgba(147,51,234,0.3)]'
                          : 'bg-black/40 border-white/10 text-gray-400 hover:text-gray-200 hover:border-white/20'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                  Resumo da Ideia ou Necessidade
                </label>
                <textarea
                  id="message"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-none"
                  placeholder="Conte brevemente sobre o sistema, aplicativo ou processo que deseja criar ou automatizar..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:shadow-[0_0_40px_rgba(124,58,237,0.7)]"
              >
                <span>Enviar para Especialista no WhatsApp</span>
                <Send size={17} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ==========================================
   FOOTER & FLOATING WHATSAPP
========================================== */
const Footer = () => {
  return (
    <footer className="bg-[#040407] border-t border-white/[0.08] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <ZykonLogo size="sm" />

          <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-400 font-medium">
            <a href="#home" className="hover:text-purple-400 transition-colors">Início</a>
            <a href="#solucoes" className="hover:text-purple-400 transition-colors">Soluções</a>
            <a href="#arquitetura" className="hover:text-purple-400 transition-colors">Engenharia</a>
            <a href="#processo" className="hover:text-purple-400 transition-colors">Processo</a>
            <a href="#sobre" className="hover:text-purple-400 transition-colors">Sobre Nós</a>
            <a href="#contato" className="hover:text-purple-400 transition-colors">Contato</a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400 text-xs">
              &copy; {new Date().getFullYear()} <span className="text-purple-400 font-semibold">Z</span><span className="text-white font-semibold">ykon</span> Tecnologia • <span className="font-mono text-gray-300">{OFFICIAL_DOMAIN}</span>
            </p>
            <p className="text-gray-600 text-[11px] mt-1">
              Conectando Ideias. Criando o Futuro. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FloatingWhatsApp = () => {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 pl-4 pr-5 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-xs uppercase tracking-wider shadow-[0_10px_30px_rgba(124,58,237,0.55)] hover:scale-105 hover:shadow-[0_10px_40px_rgba(139,92,247,0.85)] transition-all duration-300 border border-purple-400/30"
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
      </span>
      <Phone size={15} />
      <span className="hidden sm:inline">Orçamento Rápido</span>
    </a>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#050508] text-slate-50 font-sans selection:bg-purple-500/30">
      <Navbar />
      <main>
        <Hero />
        <TechStrip />
        <Solutions />
        <EngineeringSection />
        <ProcessSection />
        <About />
        <FAQSection />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
