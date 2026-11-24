import React, { useState, useEffect } from 'react';
import {
  Menu, X, ChevronRight, Layers,
  MonitorSmartphone, Database, Phone, Mail,
  MapPin, Cpu, ShieldCheck, Zap,
  ArrowUpRight, CheckCircle2, Sparkles,
  BarChart3, Globe2, Lock,
  Rocket, MessageSquare, HelpCircle,
  ChevronDown, Activity, Server,
  Calendar, Bot, ShoppingBag, Truck, Wrench,
  Smartphone, TrendingUp, Users, ExternalLink, Play
} from 'lucide-react';
import ZykonLogo from './components/ZykonLogo';

const WHATSAPP_NUMBER = '5562981919282';
const WHATSAPP_DISPLAY = '+55 (62) 98191-9282';
const OFFICIAL_DOMAIN = 'zykon.com.br';
const OFFICIAL_EMAIL = 'contato@zykon.com.br';
const BEAUTY_URL = 'https://beauty.zykon.com.br';
const BEAUTY_DEMO_URL = 'https://beauty.zykon.com.br/demo';

const getWhatsAppUrl = (customText) => {
  const defaultMsg = 'Olá! Vim pelo site zykon.com.br e gostaria de saber mais sobre os produtos SaaS da Zykon (Zykon Beauty).';
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

      const sections = ['home', 'beauty', 'ia-nativa', 'ecossistema', 'sobre', 'faq', 'contato'];
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
    { name: 'Zykon Beauty', href: '#beauty', id: 'beauty' },
    { name: 'IA Nativa', href: '#ia-nativa', id: 'ia-nativa' },
    { name: 'Verticais', href: '#ecossistema', id: 'ecossistema' },
    { name: 'A Startup', href: '#sobre', id: 'sobre' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#050508]/85 backdrop-blur-xl border-b border-purple-500/15 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]'
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

          {/* CTA Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={BEAUTY_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-gray-200 text-xs font-semibold uppercase tracking-wider transition-all"
            >
              Ver Demo
            </a>
            <a
              href={BEAUTY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(124,58,237,0.75)] hover:scale-[1.02] transition-all duration-300"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping absolute -left-0.5 -top-0.5" />
              <span>Acessar Zykon Beauty</span>
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
            <div className="pt-3 border-t border-white/10 grid grid-cols-1 gap-2.5">
              <a
                href={BEAUTY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-sm shadow-lg shadow-purple-900/40"
              >
                <span>Conhecer o Zykon Beauty</span>
                <ArrowUpRight size={16} />
              </a>
              <a
                href={BEAUTY_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-200 font-semibold text-sm"
              >
                <Play size={15} />
                <span>Testar Demo Interativa</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

/* ==========================================
   1. HERO SECTION (DOBRA INICIAL)
========================================== */
const Hero = () => {
  const [activeTab, setActiveTab] = useState('booking');

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
          {/* Mandatory Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/35 text-purple-200 text-xs sm:text-sm font-medium mb-8 shadow-[0_0_25px_rgba(139,92,246,0.25)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span>SaaS Verticais com IA para Pequenas Empresas</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-5xl leading-[1.08] mb-6">
            PLATAFORMAS PRONTAS COM{' '}
            <span className="block mt-1 bg-gradient-to-r from-white via-purple-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(168,85,247,0.35)]">
              IA NATIVA PARA SERVIÇOS E VAREJO.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-2 max-w-3xl text-base sm:text-lg md:text-xl text-gray-300 mb-10 font-normal leading-relaxed">
            A <strong className="text-white font-semibold"><span className="text-purple-400">Z</span>ykon</strong> constrói uma suíte de produtos SaaS verticais <strong className="text-white font-semibold">multi-tenant e mobile-first</strong> desenhados para substituir planilhas, cadernos e o atendimento manual no WhatsApp por operação automatizada e inteligente.
          </p>

          {/* Primary & Secondary CTAs -> Direct links to beauty.zykon.com.br and /demo */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center mb-6">
            <a
              href={BEAUTY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white font-bold text-base overflow-hidden transition-all duration-300 hover:scale-[1.02] shadow-[0_0_35px_rgba(124,58,237,0.5)] hover:shadow-[0_0_50px_rgba(139,92,246,0.8)]"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <span className="relative flex items-center gap-2">
                Conhecer o Zykon Beauty
                <ArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" size={20} />
              </span>
            </a>

            <a
              href={BEAUTY_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white/[0.04] border border-purple-500/30 text-white font-semibold text-base hover:bg-purple-500/10 hover:border-purple-400 transition-all shadow-[0_0_20px_rgba(124,58,237,0.15)]"
            >
              <Play size={17} className="text-purple-400 fill-purple-400" />
              <span>Testar Demo Interativa</span>
            </a>
          </div>

          {/* Quick Live Link Pill */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-gray-400 mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 font-mono">
              ● PRODUTO EM PRODUÇÃO
            </span>
            <span>Acesse agora:</span>
            <a
              href={BEAUTY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-purple-300 hover:text-white underline underline-offset-4 transition-colors"
            >
              https://beauty.zykon.com.br
            </a>
            <span>•</span>
            <a
              href={BEAUTY_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-indigo-300 hover:text-white underline underline-offset-4 transition-colors"
            >
              https://beauty.zykon.com.br/demo
            </a>
          </div>
        </div>

        {/* Live Product Cockpit Preview (beauty.zykon.com.br) */}
        <div className="relative mx-auto max-w-5xl mt-2">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/40 via-indigo-500/30 to-purple-600/40 rounded-3xl blur-xl opacity-70 pointer-events-none" />

          <div className="relative rounded-2xl bg-[#0A0A12]/90 border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl">
            {/* Browser Topbar with real beauty.zykon.com.br URL */}
            <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-3.5 bg-[#0F0F1A] border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <a
                  href={BEAUTY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-3 px-3 py-1 rounded-md bg-black/50 border border-white/10 text-xs font-mono text-purple-300 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <Lock size={11} className="text-emerald-400" />
                  <span>https://beauty.zykon.com.br</span>
                  <ExternalLink size={11} />
                </a>
              </div>

              {/* Interactive Product View Switcher */}
              <div className="flex items-center gap-1.5 bg-black/50 p-1 rounded-lg border border-white/5">
                {[
                  { id: 'booking', label: 'Autoagendamento (/:slug/agendar)', icon: Calendar },
                  { id: 'admin', label: 'Painel Multi-Estúdio (/admin)', icon: BarChart3 },
                  { id: 'ai', label: 'Agente IA & Retenção', icon: Bot },
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
                      <span className="hidden sm:inline">{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="hidden md:flex items-center gap-2 text-xs text-emerald-400 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>SAAS AO VIVO</span>
              </div>
            </div>

            {/* Cockpit Body */}
            <div className="p-6 sm:p-8">
              {activeTab === 'booking' && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.07]">
                      <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                        <span>Rota Pública Instantânea</span>
                        <span className="text-emerald-400 font-mono font-semibold">Zero fricção</span>
                      </div>
                      <div className="text-xl font-display font-bold text-white">/:slug/agendar</div>
                      <p className="text-xs text-gray-400 mt-1">
                        A cliente agenda em menos de 30 segundos pelo celular sem precisar baixar app ou criar senha.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.07]">
                      <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                        <span>Vitrine Digital do Estúdio</span>
                        <span className="text-purple-400 font-mono font-semibold">Mobile-First</span>
                      </div>
                      <div className="text-xl font-display font-bold text-white">Catálogo & Horários Reais</div>
                      <p className="text-xs text-gray-400 mt-1">
                        Sincronização imediata de disponibilidade por profissional, serviço e duração.
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-2 p-5 rounded-xl bg-gradient-to-br from-purple-950/25 via-[#0D0D17] to-[#0D0D17] border border-purple-500/20 flex flex-col justify-between">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <div>
                        <span className="text-xs uppercase tracking-wider text-purple-400 font-semibold">
                          Zykon Beauty • Experiência da Cliente Final
                        </span>
                        <h3 className="text-lg font-bold text-white">Fluxo de Autoagendamento Inteligente</h3>
                      </div>
                      <a
                        href={BEAUTY_DEMO_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 rounded-full text-xs font-mono bg-purple-500/20 hover:bg-purple-500/30 text-purple-200 border border-purple-500/30 flex items-center gap-1 transition-colors"
                      >
                        <span>Abrir /demo ao vivo</span>
                        <ArrowUpRight size={12} />
                      </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-2">
                      <div className="p-3.5 rounded-xl bg-black/50 border border-white/10">
                        <span className="text-[11px] font-mono text-purple-400">PASSO 1</span>
                        <h4 className="text-white font-semibold text-sm mt-1">Escolha do Serviço</h4>
                        <p className="text-gray-400 text-xs mt-1">Catálogo com preços, duração e fotos reais do estúdio.</p>
                      </div>
                      <div className="p-3.5 rounded-xl bg-black/50 border border-white/10">
                        <span className="text-[11px] font-mono text-purple-400">PASSO 2</span>
                        <h4 className="text-white font-semibold text-sm mt-1">Horário em Tempo Real</h4>
                        <p className="text-gray-400 text-xs mt-1">Cálculo automático de encaixes livres na agenda do profissional.</p>
                      </div>
                      <div className="p-3.5 rounded-xl bg-black/50 border border-white/10">
                        <span className="text-[11px] font-mono text-emerald-400">PASSO 3</span>
                        <h4 className="text-white font-semibold text-sm mt-1">Confirmação Automática</h4>
                        <p className="text-gray-400 text-xs mt-1">Reserva registrada no painel /admin e lembrete anti-falta.</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between text-[11px] font-mono text-gray-400 pt-3 border-t border-white/5 mt-3 gap-2">
                      <span>✓ Sem download de aplicativo</span>
                      <span>✓ Isolamento Multi-Tenant por Estúdio</span>
                      <span>✓ 100% Responsivo</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'admin' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                    <div className="w-9 h-9 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-300 mb-3">
                      <Calendar size={18} />
                    </div>
                    <h4 className="text-white font-bold text-base mb-1">Gestão de Agenda (/admin)</h4>
                    <p className="text-gray-400 text-xs leading-relaxed mb-3">
                      Visão diária e semanal de atendimentos, bloqueio de horários, controle de status e histórico completo por cliente.
                    </p>
                    <span className="text-[11px] font-mono text-emerald-400">● Sincronização instantânea</span>
                  </div>

                  <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                    <div className="w-9 h-9 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-300 mb-3">
                      <TrendingUp size={18} />
                    </div>
                    <h4 className="text-white font-bold text-base mb-1">Financeiro & Comissões</h4>
                    <p className="text-gray-400 text-xs leading-relaxed mb-3">
                      Acompanhamento de receitas, ticket médio, serviços mais vendidos e fechamento financeiro simplificado para o gestor.
                    </p>
                    <span className="text-[11px] font-mono text-purple-300">● Visão clara de lucratividade</span>
                  </div>

                  <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                    <div className="w-9 h-9 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-300 mb-3">
                      <Layers size={18} />
                    </div>
                    <h4 className="text-white font-bold text-base mb-1">Arquitetura Multi-Estúdio</h4>
                    <p className="text-gray-400 text-xs leading-relaxed mb-3">
                      Cada negócio possui sua própria vitrine personalizada, regras de horários, catálogo de serviços e dados isolados.
                    </p>
                    <span className="text-[11px] font-mono text-indigo-300">● SaaS Multi-Tenant nativo</span>
                  </div>
                </div>
              )}

              {activeTab === 'ai' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-300 mb-3">
                      <MessageSquare size={18} />
                    </div>
                    <h4 className="text-white font-bold text-base mb-1">Agente de IA no WhatsApp</h4>
                    <p className="text-gray-400 text-xs leading-relaxed mb-3">
                      Atende clientes 24/7 em linguagem natural, consulta horários livres reais na agenda, agenda, reagenda e confirma presença.
                    </p>
                    <span className="text-[11px] font-mono text-emerald-400">● Redução drástica de no-show</span>
                  </div>

                  <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                    <div className="w-9 h-9 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-300 mb-3">
                      <BarChart3 size={18} />
                    </div>
                    <h4 className="text-white font-bold text-base mb-1">Copiloto de Retenção (+21 dias)</h4>
                    <p className="text-gray-400 text-xs leading-relaxed mb-3">
                      Analisa faturamento e frequência de visitas para acionar campanhas automáticas de retorno para clientes inativos.
                    </p>
                    <span className="text-[11px] font-mono text-purple-300">● Recorrência automatizada</span>
                  </div>

                  <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                    <div className="w-9 h-9 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-300 mb-3">
                      <Sparkles size={18} />
                    </div>
                    <h4 className="text-white font-bold text-base mb-1">Onboarding Inteligente</h4>
                    <p className="text-gray-400 text-xs leading-relaxed mb-3">
                      Gera automaticamente o catálogo de serviços, descrições comerciais e templates de atendimento para o novo assinante.
                    </p>
                    <span className="text-[11px] font-mono text-indigo-300">● Ativação em poucos minutos</span>
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
   PLATFORM PILLARS STRIP
========================================== */
const PlatformStrip = () => {
  const highlights = [
    'SaaS Multi-Tenant Nativo',
    'Agentes Conversacionais com IA (Claude / LLMs)',
    'Autoagendamento Sem Cadastro (/:slug/agendar)',
    'Painel Administrativo Mobile-First (/admin)',
    'Copiloto Financeiro & Retenção de Clientes',
    'Onboarding Inteligente por Nicho',
    'Assinatura Acessível para PMEs',
    'Alta Disponibilidade em Nuvem',
  ];

  return (
    <div className="py-7 bg-[#07070D] border-y border-white/[0.06] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 mb-3 text-center">
        <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-gray-500">
          TECNOLOGIA DE PRODUTO SAAS + INTELIGÊNCIA ARTIFICIAL NATIVA
        </p>
      </div>
      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-6 py-1">
          {[...highlights, ...highlights].map((item, i) => (
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
   2. PRODUTO EM PRODUÇÃO: ZYKON BEAUTY
========================================== */
const ZykonBeautyShowcase = () => {
  const features = [
    {
      title: 'Vitrine Digital do Estúdio',
      desc: 'Página pública exclusiva e personalizada para cada estúdio exibir seu portfólio, serviços, valores, equipe e localização com visual premium.'
    },
    {
      title: 'Autoagendamento Público Sem Cadastro (/:slug/agendar)',
      desc: 'Fluxo direto onde o cliente final escolhe o serviço, seleciona o dia e horário disponível em tempo real e confirma o agendamento em segundos.'
    },
    {
      title: 'Painel Administrativo Multi-Estúdio (/admin)',
      desc: 'Ambiente de gestão completo com isolamento multi-tenant para controle de agenda, cadastro de serviços, horários de funcionamento e clientes.'
    },
    {
      title: 'Gestão de Agenda, Financeiro & Experiência Mobile-First',
      desc: 'Projetado para ser operado integralmente pelo smartphone do profissional ou computador da recepção, com métricas claras de faturamento e ocupação.'
    }
  ];

  return (
    <section id="beauty" className="py-28 bg-[#050508] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Produto SaaS em Produção • Ao Vivo</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
              <span className="text-purple-400">Z</span>ykon <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Beauty</span>
            </h2>
            <p className="text-gray-300 text-lg mt-3 max-w-2xl">
              Nossa plataforma SaaS vertical para salões de beleza, estúdios de estética, nail designers, barbearias e clínicas de bem-estar.
            </p>
          </div>

          {/* Direct Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={BEAUTY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm shadow-[0_0_25px_rgba(124,58,237,0.4)] transition-all"
            >
              <span>Acessar beauty.zykon.com.br</span>
              <ArrowUpRight size={17} />
            </a>
            <a
              href={BEAUTY_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 text-white font-semibold text-sm transition-all"
            >
              <Play size={15} className="text-purple-400" />
              <span>Testar Demo (/demo)</span>
            </a>
          </div>
        </div>

        {/* Main Product Bento Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Product Overview & Architecture Card */}
          <div className="lg:col-span-5 rounded-3xl bg-gradient-to-b from-[#111122] to-[#080810] border border-purple-500/30 p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-60 h-60 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-2 mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-500/15 text-purple-300 border border-purple-500/30">
                  beauty.zykon.com.br
                </span>
                <span className="text-xs font-mono text-emerald-400">v1.0 LIVE</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                Do agendamento online à gestão financeira em um só SaaS.
              </h3>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                Pequenos negócios de beleza perdem horas todos os dias respondendo mensagens repetitivas no WhatsApp e anotando horários no papel. O <strong className="text-white">Zykon Beauty</strong> automatiza a captação de agendamentos e organiza toda a operação do estúdio na nuvem.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  'URL própria do estúdio com agendamento 24 horas',
                  'Zero necessidade de download de app pelo cliente final',
                  'Painel administrativo (/admin) rápido e intuitivo',
                  'Arquitetura SaaS multi-tenant com dados isolados',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-200">
                    <CheckCircle2 size={16} className="text-purple-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <a
                href={BEAUTY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-wider transition-all"
              >
                <span>Abrir Plataforma</span>
                <ExternalLink size={14} />
              </a>
              <a
                href={BEAUTY_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 font-bold text-xs uppercase tracking-wider transition-all"
              >
                <span>Explorar Demo</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Right: 4 Real Feature Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-purple-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-purple-600/15 border border-purple-500/25 flex items-center justify-center text-purple-300 mb-5 group-hover:bg-purple-600 group-hover:text-white transition-all">
                    {idx === 0 && <Globe2 size={22} />}
                    {idx === 1 && <Calendar size={22} />}
                    {idx === 2 && <MonitorSmartphone size={22} />}
                    {idx === 3 && <Smartphone size={22} />}
                  </div>
                  <h4 className="font-display text-lg font-bold text-white mb-2.5">
                    {feat.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feat.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-purple-400">
                  <span>Módulo Ativo</span>
                  <span>beauty.zykon.com.br</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ==========================================
   3. INTELIGÊNCIA ARTIFICIAL NATIVA (CORE DE IA DA ZYKON)
========================================== */
const NativeAISection = () => {
  const aiModules = [
    {
      badge: 'Módulo IA 01 • WhatsApp 24/7',
      icon: <MessageSquare size={24} />,
      title: 'Agente Conversacional no WhatsApp',
      desc: 'Nosso agente de IA compreende linguagem natural (texto e áudio), consulta em tempo real os horários livres na agenda do estabelecimento, realiza agendamentos e reagendamentos sozinho e envia confirmações automáticas para reduzir drasticamente as faltas (no-show).',
      metrics: [
        'Atendimento imediato 24h por dia, 7 dias por semana',
        'Sincronizado em tempo real com a agenda da plataforma',
        'Confirmação ativa e reagendamento automático sem intervenção humana'
      ]
    },
    {
      badge: 'Módulo IA 02 • Receita & CRM',
      icon: <TrendingUp size={24} />,
      title: 'Copiloto Financeiro e de Retenção',
      desc: 'Inteligência analítica embarcada no painel do gestor: analisa faturamento, margens, comissões da equipe e histórico de visitas de cada cliente, disparando campanhas automáticas e personalizadas para reativar clientes inativos há mais de 21 dias.',
      metrics: [
        'Detecção automática de clientes ausentes há +21 dias',
        'Previsibilidade de caixa, comissões e ocupação da agenda',
        'Sugestões práticas para aumentar o ticket médio e recorrência'
      ]
    },
    {
      badge: 'Módulo IA 03 • Ativação Instantânea',
      icon: <Sparkles size={24} />,
      title: 'Onboarding Inteligente por Nicho',
      desc: 'Eliminamos a barreira de configuração inicial para o pequeno empresário. Ao cadastrar um novo negócio, nossa IA estrutura automaticamente o catálogo de serviços, sugere durações, cria descrições comerciais atraentes e configura as mensagens de atendimento.',
      metrics: [
        'Catálogo de serviços e preços estruturado em poucos cliques',
        'Descrições persuasivas geradas sob medida para o segmento',
        'Negócio pronto para receber agendamentos no mesmo dia'
      ]
    }
  ];

  return (
    <section id="ia-nativa" className="py-28 bg-[#080811] border-y border-white/[0.07] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-800/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Bot size={14} />
            <span>Core de IA da Zykon</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Inteligência Artificial <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Nativa no Produto</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Não tratamos IA como um complemento externo. Na Zykon, modelos avançados de linguagem operam dentro do fluxo de agendamento, retenção e gestão financeira de cada assinante.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {aiModules.map((mod, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-gradient-to-b from-[#10101E] to-[#07070D] border border-white/10 hover:border-purple-500/45 p-8 flex flex-col justify-between transition-all duration-300 shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all">
                    {mod.icon}
                  </div>
                  <span className="text-[11px] font-mono text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                    {mod.badge}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3">
                  {mod.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {mod.desc}
                </p>
              </div>

              <div className="pt-5 border-t border-white/[0.07] space-y-2.5">
                {mod.metrics.map((m, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                    <CheckCircle2 size={14} className="text-purple-400 shrink-0 mt-0.5" />
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ==========================================
   4. ECOSSISTEMA / SUÍTE DE VERTICAIS ZYKON
========================================== */
const VerticalsSuiteSection = () => {
  const verticals = [
    {
      name: 'Zykon Beauty',
      status: 'Em Produção',
      isLive: true,
      icon: <Calendar size={24} />,
      segment: 'Beleza, Estética & Bem-Estar',
      desc: 'Plataforma completa para estúdios de beleza, salões, nail designers e barbearias com vitrine digital, autoagendamento público (/:slug/agendar), painel multi-estúdio (/admin) e IA de atendimento.',
      link: BEAUTY_URL,
      demoLink: BEAUTY_DEMO_URL,
      highlights: ['Autoagendamento 24/7', 'Gestão de Agenda & Caixa', 'Retenção Automática com IA']
    },
    {
      name: 'Zykon Moda & Varejo',
      status: 'Em breve',
      isLive: false,
      icon: <ShoppingBag size={24} />,
      segment: 'Lojas de Roupas, Calçados & Acessórios',
      desc: 'SaaS vertical para varejo de moda com controle inteligente de grade (cor/tamanho), catálogo digital integrado ao WhatsApp, vendedor assistido por IA e recompra automatizada.',
      highlights: ['Catálogo & Grade Inteligente', 'Agente de Vendas no WhatsApp', 'CRM de Clientes & Condicional']
    },
    {
      name: 'Zykon Delivery',
      status: 'Em breve',
      isLive: false,
      icon: <Truck size={24} />,
      segment: 'Gastronomia, Dark Kitchens & Comércio Local',
      desc: 'Cardápio digital próprio sem taxas abusivas por pedido, recepção automatizada de pedidos no WhatsApp com IA conversacional e gestão simplificada de entregas e fidelidade.',
      highlights: ['Cardápio Digital & Pedidos via IA', 'Zero Comissão por Pedido', 'Programa de Recompra Automático']
    },
    {
      name: 'Zykon Assistência Técnica',
      status: 'Em breve',
      isLive: false,
      icon: <Wrench size={24} />,
      segment: 'Assistências de Celulares, Informática & Manutenção',
      desc: 'Gestão completa de Ordens de Serviço (OS), acompanhamento em tempo real pelo cliente via link público, aprovação de orçamentos em 1 clique e notificações automáticas no WhatsApp.',
      highlights: ['Ordem de Serviço Digital (OS)', 'Status ao Vivo para o Cliente', 'Orçamentos e Alertas via IA']
    }
  ];

  return (
    <section id="ecossistema" className="py-28 bg-[#050508] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-wider mb-4">
              <Rocket size={13} />
              <span>Roadmap & Plataforma Multi-Tenant</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white">
              Suíte de Verticais <span className="text-purple-400">Z</span>ykon
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-base leading-relaxed">
            Um motor tecnológico único de IA e arquitetura multi-tenant adaptado às regras específicas de cada setor de serviços e varejo no Brasil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {verticals.map((v, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 sm:p-9 border transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
                v.isLive
                  ? 'bg-gradient-to-b from-[#121126] to-[#080810] border-purple-500/50 shadow-[0_0_40px_rgba(124,58,237,0.15)]'
                  : 'bg-gradient-to-b from-[#0C0C15] to-[#07070C] border-white/[0.08] hover:border-white/20'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      v.isLive
                        ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(147,51,234,0.5)]'
                        : 'bg-white/5 border border-white/10 text-gray-300'
                    }`}
                  >
                    {v.icon}
                  </div>

                  {v.isLive ? (
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      {v.status}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono text-amber-300 bg-amber-500/10 border border-amber-500/25">
                      {v.status}
                    </span>
                  )}
                </div>

                <span className="text-xs font-mono uppercase tracking-wider text-purple-400">
                  {v.segment}
                </span>
                <h3 className="font-display text-2xl font-bold text-white mt-1 mb-3">
                  {v.name}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                  {v.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {v.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.07] text-xs text-gray-300"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-white/[0.07]">
                {v.isLive ? (
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={v.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-wider transition-all"
                    >
                      <span>Acessar beauty.zykon.com.br</span>
                      <ArrowUpRight size={15} />
                    </a>
                    <a
                      href={v.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 font-semibold text-xs uppercase tracking-wider transition-all"
                    >
                      <span>Ver Demo</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                ) : (
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>Em desenvolvimento no Core SaaS da Zykon</span>
                    <a
                      href="#contato"
                      className="text-purple-400 hover:text-purple-300 font-semibold inline-flex items-center gap-1"
                    >
                      <span>Entrar na lista de espera</span>
                      <ChevronRight size={14} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ==========================================
   ABOUT THE STARTUP & ARCHITECTURE
========================================== */
const AboutStartup = () => {
  return (
    <section id="sobre" className="py-28 bg-[#07070E] border-t border-white/[0.06] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          {/* Brand Visual Card */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition duration-700" />
            <div className="relative rounded-3xl bg-[#050508] border border-white/10 p-6 sm:p-8 overflow-hidden flex flex-col items-center justify-center min-h-[380px]">
              <div className="absolute inset-0 bg-dot-pattern opacity-40" />

              <div className="relative z-10 w-full flex flex-col items-center">
                <img
                  src="/zykon-logo.jpg"
                  alt="Zykon Tecnologia - SaaS Verticais Nativos em IA"
                  className="w-full max-w-md rounded-2xl object-contain shadow-2xl border border-white/5"
                />

                <div className="mt-6 w-full grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.07]">
                    <div className="text-lg font-display font-bold text-white">SaaS</div>
                    <div className="text-[10px] uppercase tracking-wider text-gray-400">Multi-Tenant</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.07]">
                    <div className="text-lg font-display font-bold text-purple-400">AI-First</div>
                    <div className="text-[10px] uppercase tracking-wider text-gray-400">Agentes Nativos</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.07]">
                    <div className="text-lg font-display font-bold text-white">PMEs</div>
                    <div className="text-[10px] uppercase tracking-wider text-gray-400">Serviços & Varejo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Startup Mission & Product Philosophy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-wider mb-4">
              <Cpu size={13} />
              <span>Nossa Tese de Produto</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Democratizando software e IA para pequenos negócios com a{' '}
              <span className="inline-flex items-baseline">
                <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">Z</span>
                <span className="text-white">ykon.</span>
              </span>
            </h2>

            <p className="text-gray-300 text-base sm:text-lg mb-5 leading-relaxed">
              A{' '}
              <strong className="font-bold text-white">
                <span className="text-purple-400">Z</span>ykon Tecnologia
              </strong>{' '}
              é uma startup brasileira de produtos SaaS verticais nativos em Inteligência Artificial. Nossa missão é colocar nas mãos do pequeno empresário de serviços e varejo a mesma tecnologia de automação, retenção e gestão antes restrita às grandes redes.
            </p>

            <p className="text-gray-400 text-base mb-8 leading-relaxed">
              Em vez de softwares genéricos e complexos que exigem semanas de treinamento, criamos plataformas verticais prontas para uso — começando pelo <strong className="text-white">Zykon Beauty</strong> — onde o profissional ativa sua conta em minutos e conta com agentes de IA trabalhando 24/7 pela sua agenda e pelo seu faturamento.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.07]">
                <ShieldCheck className="text-purple-400 shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="text-white font-bold text-sm">Isolamento Multi-Tenant & Segurança</h4>
                  <p className="text-gray-400 text-xs mt-1">Arquitetura moderna em nuvem com proteção de dados por estabelecimento e conformidade LGPD.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.07]">
                <Zap className="text-indigo-400 shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="text-white font-bold text-sm">Assinatura SaaS Simples & Escalável</h4>
                  <p className="text-gray-400 text-xs mt-1">Produtos prontos na nuvem com atualizações contínuas e ativação imediata no navegador.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={BEAUTY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-purple-400 hover:text-purple-300 transition-colors"
              >
                <span>Conhecer o Zykon Beauty ao vivo</span>
                <ArrowUpRight size={16} />
              </a>
              <span className="text-gray-600">•</span>
              <a
                href={BEAUTY_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                <span>Testar ambiente de demonstração</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ==========================================
   5. FAQ FOCADO EM PRODUTO SAAS
========================================== */
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Como funciona o acesso ao Zykon Beauty e a demonstração gratuita?',
      a: 'O Zykon Beauty é uma plataforma SaaS 100% em nuvem. Você pode testar agora mesmo a experiência completa acessando https://beauty.zykon.com.br/demo ou criar a conta do seu estúdio em https://beauty.zykon.com.br para configurar seus serviços e horários em poucos minutos.'
    },
    {
      q: 'Eu ou minhas clientes precisamos instalar algum aplicativo no celular?',
      a: 'Não! O Zykon Beauty é mobile-first e funciona diretamente no navegador. Suas clientes agendam pelo link público exclusivo do seu estúdio (/:slug/agendar) sem precisar baixar aplicativo nem criar senha, e você gerencia tudo pelo painel (/admin) no celular ou computador.'
    },
    {
      q: 'Meus dados e a agenda do meu negócio ficam isolados (Multi-Tenant)?',
      a: 'Sim. Nossa arquitetura SaaS é multi-tenant com isolamento rigoroso por estabelecimento. Cada negócio assinante possui seu próprio ambiente, catálogo, histórico financeiro, base de clientes e configurações de forma totalmente segura e independente.'
    },
    {
      q: 'Como a Inteligência Artificial da Zykon ajuda no atendimento e nas vendas?',
      a: 'Nossa IA atua em três frentes nativas dentro do produto: 1) Agente Conversacional no WhatsApp que responde clientes, consulta a disponibilidade real da agenda e confirma horários automaticamente; 2) Copiloto Financeiro e de Retenção que identifica clientes inativos há mais de 21 dias e cria ações de reativação; e 3) Onboarding Inteligente que monta seu catálogo inicial em segundos.'
    },
    {
      q: 'Quando serão lançadas as verticais de Moda/Varejo, Delivery e Assistência Técnica?',
      a: 'O Zykon Beauty já está em produção (https://beauty.zykon.com.br). As novas verticais da suíte Zykon utilizam nossa mesma fundação multi-tenant e motor de IA e estão em desenvolvimento com lançamento gradual. Você pode entrar na lista de espera na seção de contato abaixo para receber acesso antecipado.'
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#050508] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-wider mb-3">
            <HelpCircle size={13} />
            <span>FAQ • Produtos SaaS Zykon</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Perguntas frequentes sobre nossas plataformas
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
   6. CONTATO & ACESSO AOS PRODUTOS
========================================== */
const Contact = () => {
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [verticalInterest, setVerticalInterest] = useState('Zykon Beauty (Em Produção)');
  const [message, setMessage] = useState('');

  const verticalOptions = [
    'Zykon Beauty (Em Produção)',
    'Lista de Espera: Moda & Varejo',
    'Lista de Espera: Delivery',
    'Lista de Espera: Assistência Técnica',
    'Parcerias / Imprensa / Investidores'
  ];

  const handleProductContactSubmit = (e) => {
    e.preventDefault();
    const lines = [
      `Olá, time da *Zykon Tecnologia*! 👋`,
      ``,
      `*Nome:* ${name || 'Não informado'}`,
      businessName ? `*Estabelecimento / Empresa:* ${businessName}` : null,
      `*Produto SaaS de Interesse:* ${verticalInterest}`,
      message ? `*Mensagem:* ${message}` : null,
    ].filter(Boolean).join('\n');

    window.open(getWhatsAppUrl(lines), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-28 bg-[#07070D] relative border-t border-white/[0.08] overflow-hidden">
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-purple-900/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Product & Support Channels */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-wider mb-4">
              <MessageSquare size={13} />
              <span>Canais Oficiais • {OFFICIAL_DOMAIN}</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Comece a usar ou fale com nosso time.
            </h2>

            <p className="text-gray-400 text-base sm:text-lg mb-8 leading-relaxed">
              Quer ativar o <strong className="text-white">Zykon Beauty</strong> no seu estúdio, tirar dúvidas sobre nossos planos SaaS ou entrar na lista de espera das próximas verticais?
            </p>

            <div className="space-y-4">
              {/* Direct Link to Zykon Beauty */}
              <a
                href={BEAUTY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-2xl bg-purple-950/30 border border-purple-500/35 hover:border-purple-400 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300 shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-all">
                  <ExternalLink size={22} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-white font-semibold">Zykon Beauty — Plataforma Ao Vivo</h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      Produção
                    </span>
                  </div>
                  <p className="text-purple-300 font-mono text-sm sm:text-base mt-0.5">https://beauty.zykon.com.br</p>
                  <p className="text-xs text-gray-400 mt-1">Acesse o produto ou teste em beauty.zykon.com.br/demo</p>
                </div>
              </a>

              {/* Official Corporate Email Card */}
              <a
                href={`mailto:${OFFICIAL_EMAIL}?subject=Zykon%20SaaS%20-%20Contato`}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-300 shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">E-mail Corporativo Oficial</h4>
                  <p className="text-indigo-300 font-mono text-sm sm:text-base mt-0.5">{OFFICIAL_EMAIL}</p>
                  <p className="text-xs text-gray-500 mt-1">Suporte ao assinante, parcerias e institucional</p>
                </div>
              </a>

              {/* WhatsApp Support Card */}
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
                  <h4 className="text-white font-semibold">Suporte Comercial via WhatsApp</h4>
                  <p className="text-purple-300 font-mono text-base mt-0.5">{WHATSAPP_DISPLAY}</p>
                  <p className="text-xs text-gray-500 mt-1">Goiás, Brasil • Atendimento para todo o país</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Product Onboarding / Waitlist Form */}
          <div className="lg:col-span-7 bg-[#0B0B14]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                Falar com o Time de Produto ou Entrar na Lista de Espera
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Selecione a vertical SaaS do seu negócio para atendimento direto ou acesso antecipado.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleProductContactSubmit}>
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
                    placeholder="Ex: Ana Carolina"
                  />
                </div>

                <div>
                  <label htmlFor="businessName" className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                    Nome do Estúdio ou Loja
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                    placeholder="Ex: Studio Beleza & Arte"
                  />
                </div>
              </div>

              {/* Vertical Selector Pills */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2.5">
                  Produto SaaS de Interesse
                </label>
                <div className="flex flex-wrap gap-2">
                  {verticalOptions.map((option) => (
                    <button
                      type="button"
                      key={option}
                      onClick={() => setVerticalInterest(option)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-medium border transition-all ${
                        verticalInterest === option
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
                  Como podemos ajudar seu negócio? (Opcional)
                </label>
                <textarea
                  id="message"
                  rows="3"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-none"
                  placeholder="Ex: Quero ativar o Zykon Beauty no meu estúdio ou tirar dúvidas sobre o Agente de IA no WhatsApp..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-[0_0_30px_rgba(124,58,237,0.4)]"
                >
                  <span>Falar com Time de Produto</span>
                  <ArrowUpRight size={17} />
                </button>
                <a
                  href={BEAUTY_DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-gray-200 font-semibold text-sm transition-all"
                >
                  <Play size={15} className="text-purple-400" />
                  <span>Ir para Demo Ao Vivo</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ==========================================
   FOOTER & FLOATING PRODUCT BAR
========================================== */
const Footer = () => {
  return (
    <footer className="bg-[#040407] border-t border-white/[0.08] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-white/[0.06]">
          <div className="md:col-span-5 space-y-3">
            <ZykonLogo size="sm" />
            <p className="text-gray-400 text-xs sm:text-sm max-w-sm leading-relaxed pt-1">
              Startup brasileira de produtos SaaS verticais multi-tenant nativos em Inteligência Artificial para pequenas empresas de serviços e varejo.
            </p>
            <div className="pt-1 flex items-center gap-3 text-xs font-mono text-gray-400">
              <a href={`mailto:${OFFICIAL_EMAIL}`} className="text-purple-300 hover:text-white transition-colors">
                {OFFICIAL_EMAIL}
              </a>
              <span>•</span>
              <span>{OFFICIAL_DOMAIN}</span>
            </div>
          </div>

          <div className="md:col-span-4 space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Produtos & Links Diretos
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <a href={BEAUTY_URL} target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 inline-flex items-center gap-1 transition-colors">
                  <span>Zykon Beauty (Produção)</span>
                  <ArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <a href={BEAUTY_DEMO_URL} target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 inline-flex items-center gap-1 transition-colors">
                  <span>Zykon Beauty — Demo Interativa (/demo)</span>
                  <ArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <a href="#ia-nativa" className="hover:text-purple-300 transition-colors">
                  Core de IA Nativa (WhatsApp & Copiloto)
                </a>
              </li>
              <li>
                <a href="#ecossistema" className="hover:text-purple-300 transition-colors">
                  Roadmap de Verticais (Moda, Delivery, Assistência)
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Institucional
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><a href="#sobre" className="hover:text-purple-300 transition-colors">Sobre a Startup</a></li>
              <li><a href="#faq" className="hover:text-purple-300 transition-colors">Perguntas Frequentes (SaaS)</a></li>
              <li><a href="#contato" className="hover:text-purple-300 transition-colors">Contato & Suporte</a></li>
              <li>
                <a href={`mailto:${OFFICIAL_EMAIL}`} className="hover:text-purple-300 transition-colors">
                  {OFFICIAL_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} <span className="text-purple-400 font-semibold">Z</span><span className="text-white font-semibold">ykon</span> Tecnologia • <span className="font-mono text-gray-400">{OFFICIAL_DOMAIN}</span>
          </p>
          <p>
            SaaS Verticais Nativos em IA • Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

const FloatingProductCTA = () => {
  return (
    <a
      href={BEAUTY_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Acessar Zykon Beauty"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 pl-4 pr-5 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-xs uppercase tracking-wider shadow-[0_10px_30px_rgba(124,58,237,0.55)] hover:scale-105 hover:shadow-[0_10px_40px_rgba(139,92,247,0.85)] transition-all duration-300 border border-purple-400/30"
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
      </span>
      <span>Zykon Beauty</span>
      <ArrowUpRight size={15} />
    </a>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#050508] text-slate-50 font-sans selection:bg-purple-500/30">
      <Navbar />
      <main>
        <Hero />
        <PlatformStrip />
        <ZykonBeautyShowcase />
        <NativeAISection />
        <VerticalsSuiteSection />
        <AboutStartup />
        <FAQSection />
        <Contact />
      </main>
      <Footer />
      <FloatingProductCTA />
    </div>
  );
}
