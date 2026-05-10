/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  FileText, 
  Clock, 
  TrendingUp, 
  Users, 
  Globe, 
  ArrowLeft, 
  Menu, 
  X, 
  Facebook, 
  Instagram, 
  Youtube, 
  ShieldCheck, 
  Stethoscope, 
  GraduationCap, 
  MapPin, 
  ChevronDown, 
  Star, 
  Quote,
  Search,
  Award,
  BookOpen,
  Monitor,
  UserRoundCheck,
  ClipboardCheck
} from 'lucide-react';

// --- Reusable Components ---

const Counter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      if (start === end) return;

      const totalMiliseconds = duration * 1000;
      const incrementTime = totalMiliseconds / end;

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

const SectionHeader = ({ title, subtitle, centered = true }: { title: string; subtitle?: string; centered?: boolean }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={`mb-12 ${centered ? 'text-center' : 'text-right'}`}
  >
    <h2 className="text-xl md:text-3xl font-bold mb-4 text-[#0E26D8] leading-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    )}
    <div className={`mt-4 h-1.5 w-24 bg-[#FF6100] rounded-full ${centered ? 'mx-auto' : 'mr-0'}`} />
  </motion.div>
);

// --- Page Sections ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'من نحن', href: '#about' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'لماذا نحن؟', href: '#why-us' },
    { name: 'تواصل معنا', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm py-3 h-[70px]' : 'bg-transparent py-5 h-[90px]'} border-b border-transparent ${scrolled ? 'border-gray-100' : ''}`}>
      <div className="container mx-auto px-6 md:px-12 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#0E26D8] rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
            <Globe className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-extrabold text-[#0E26D8] tracking-tight">
            القاضي <span className="text-[#FF6100]">داتا فلو</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-700 hover:text-[#0E26D8] font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/201011016779" 
            className="bg-[#0E26D8] text-white px-6 py-2.5 rounded-full font-bold hover:bg-[#0E26D8]/90 transition-all shadow-md shadow-blue-100 flex items-center gap-2"
          >
            <MessageCircle size={18} />
            احجز الآن
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-[#0E26D8]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-800 hover:text-[#0E26D8]"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://wa.me/201011016779" 
                className="bg-[#0E26D8] text-white text-center py-3 rounded-xl font-bold"
              >
                تواصل واتساب
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[768px] flex items-center pt-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-right"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-[var(--accent-blue)] text-[#0E26D8] px-4 py-1.5 rounded-lg text-sm font-bold mb-6 border border-blue-100/50"
          >
            الموثوقية • السرعة • الاعتماد
          </motion.div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#222222] mb-6 leading-[1.3]">
            خطوتك الأولى نحو <br /> <span className="text-[#0E26D8]">المستقبل المهني</span> في الخليج
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-xl opacity-80">
            نقدم خدمات الداتافلو، البرومترك، والاعتماد المهني للكوادر الطبية بأعلى معايير الدقة والاحترافية. رحلتك للعمل في السعودية والإمارات وقطر تبدأ من هنا.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <motion.a 
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="bg-[#0E26D8] text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-blue-200/50 flex items-center justify-center gap-3 transition-all"
            >
              ابدأ رحلتك الآن
              <ArrowLeft size={20} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="#services"
              className="bg-white text-[#0E26D8] border-2 border-[#0E26D8] px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center transition-all bg-white hover:bg-blue-50/50 shadow-lg shadow-gray-100/50"
            >
              استشارة مجانية
            </motion.a>
          </div>

          <div className="mt-12 flex items-center gap-6 justify-start">
            <div className="flex -space-x-3 rtl:space-x-reverse">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-blue-100 flex items-center justify-center text-[#0E26D8] text-xs font-bold">U{i}</div>
                </div>
              ))}
            </div>
            <div className="text-sm font-medium text-gray-500">
              <span className="text-[#222222] font-bold">+500 عميل</span> يثقون بنا حول العالم
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative lg:block hidden"
        >
          <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center">
            {/* Soft Focus Background Element */}
            <div className="absolute w-[300px] h-[300px] bg-[#0E26D8] rounded-full blur-[80px] opacity-10 z-0" />
            
            {/* The Floating Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="relative w-[320px] bg-white rounded-[24px] p-6 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100 z-10"
            >
              <div className="mb-6 pb-6 border-b border-gray-50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 animate-pulse" />
                  <div>
                    <div className="w-24 h-2 bg-gray-100 rounded-full mb-2" />
                    <div className="w-16 h-1.5 bg-gray-50 rounded-full" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }}
                  className="h-8 w-full bg-[var(--accent-blue)] rounded-lg flex items-center px-3 font-bold text-[12px] text-[#0E26D8]"
                >
                  ✓ تم التحقق من المستندات
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 }}
                  className="h-8 w-full bg-[rgba(255,97,0,0.05)] rounded-lg flex items-center px-3 font-bold text-[12px] text-[#FF6100]"
                >
                  ⏳ جاري معالجة البرومترك
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.4 }}
                  className="h-8 w-full bg-green-50 rounded-lg flex items-center px-3 font-bold text-[12px] text-green-600"
                >
                  ✓ الاعتماد المهني جاهز
                </motion.div>
              </div>
            </motion.div>

            {/* Achievement Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-[20%] right-[-20px] bg-[#FF6100] text-white px-5 py-3 rounded-2xl font-bold shadow-[0_10px_15px_rgba(255,97,0,0.3)] z-20"
            >
              +1000 ملف مكتمل
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const AboutUs = () => {
  const missionVision = [
    { 
      title: "رسالتنا", 
      desc: "تسهيل رحلة الكوادر الطبية نحو الاعتماد المهني والعمل بالخارج من خلال خدمات احترافية موثوقة وسريعة.",
      icon: <Globe className="text-[#0E26D8]" /> 
    },
    { 
      title: "رؤيتنا", 
      desc: "أن تصبح القاضي داتا فلو الوجهة الأولى عربيًا لخدمات الداتافلو والبرومترك والاعتماد المهني.",
      icon: <TrendingUp className="text-[#FF6100]" /> 
    }
  ];

  return (
    <section id="about" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 bg-white rounded-3xl shadow-lg p-6 flex flex-col justify-center items-center text-center border border-gray-100">
                  <span className="text-4xl font-bold text-[#0E26D8] mb-2">+5</span>
                  <span className="text-gray-500 font-medium">سنوات خبرة</span>
                </div>
                <div className="h-64 bg-[#0E26D8] rounded-3xl shadow-lg p-6 flex flex-col justify-center items-center text-center text-white">
                  <Users size={40} className="mb-4 opacity-80" />
                  <span className="text-3xl font-bold mb-1">+500</span>
                  <span className="opacity-80">عميل سعيد</span>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-64 bg-[#FF6100] rounded-3xl shadow-lg p-6 flex flex-col justify-center items-center text-center text-white">
                  <FileText size={40} className="mb-4 opacity-80" />
                  <span className="text-3xl font-bold mb-1">+1000</span>
                  <span className="opacity-80">ملف منجز</span>
                </div>
                <div className="h-48 bg-white rounded-3xl shadow-lg p-6 flex flex-col justify-center items-center text-center border border-gray-100">
                  <Globe size={40} className="mb-4 text-[#0E26D8]" />
                  <span className="text-xl font-bold text-[#222222]">5 دول عربية</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-right order-1 lg:order-2"
          >
            <div className="inline-block bg-blue-100 text-[#0E26D8] px-4 py-1.5 rounded-full text-sm font-bold mb-6">
              تعرف علينا
            </div>
            <h2 className="text-xl md:text-3xl font-bold mb-8 text-[#222222] leading-relaxed">
              شركة <span className="text-[#0E26D8]">القاضي داتا فلو</span> <br /> للخدمات الطبية والمهنية
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              نحن متخصصون في تقديم خدمات الداتافلو، البرومترك، والاعتماد المهني للكوادر الطبية الراغبين في العمل بالخارج، خصوصًا في السعودية والإمارات وقطر والبحرين وعمان. هدفنا هو تقديم دعم كامل يضمن لك رحلة سهلة وخالية من التعقيدات.
            </p>
            
            <div className="space-y-6">
              {missionVision.map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: -10 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-6 items-start text-right"
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-[#222222]">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Services = () => {
  const services = [
    {
      title: "تقديم الداتا فلو",
      desc: "إذا كنت من العاملين في المجال الطبي والصحي في مصر، وترغب في السفر؛ فإن أول خطوة لك، هي التأكد من صحة أوراقك وتوثيقها، وذلك يكون من خلال الداتا فلو.. نحن نساعدك في إنهاء إجراءات الداتا فلو بسرعة واحترافية.",
      icon: <ShieldCheck className="w-10 h-10" />,
      features: ["توثيق شهادات التخرج", "تدقيق خبرات العمل", "متابعة الطلب لحظياً"],
      gradient: "from-blue-600 to-blue-400"
    },
    {
      title: "ممارس بلس",
      desc: "الخطوة الثانية، بعد الانتهاء من إجراءات الداتا فلو، هي خطوة التسجيل في “ممارس بلس” وذلك للحصول على الترخيص السعودي المهني.. نحن نتولى مسؤولية إدارة ورفع جميع متطلباتكم للحصول على الترخيص بسلاسة.",
      icon: <UserRoundCheck className="w-10 h-10" />,
      features: ["فتح حساب ممارس بلس", "رفع المستندات والبيانات", "متابعة إصدار التصنيف"],
      gradient: "from-indigo-600 to-indigo-400"
    },
    {
      title: "حجز امتحان البرومترك",
      desc: "بعد إكمال مرحلتي الداتا فلو، والتسجيل في ممارس بلس، ننتقل بك إلى الخطوة الثالثة، وهي حجز امتحان البرومترك. هذا الامتحان هو اختبار المعادلة المصمم لقياس مدى إتقانك للمعلومات الطبية المتعلقة بتخصصك.",
      icon: <GraduationCap className="w-10 h-10" />,
      features: ["تحديد الموعد المناسب", "اختيار المركز المعتمد", "استخراج تذكرة الدخول"],
      gradient: "from-orange-600 to-orange-400"
    },
    {
      title: "حجز امتحان البيرسون فيو",
      desc: "البيرسون فيو، هو نظام اختبارات عالمي معتمد، تجرى من خلاله بعض امتحانات المعادلة للتخصصات الصحية، وذلك بعد استيفائك لخطوات الداتا فلو والتسجيل في الهيئة الصحية.",
      icon: <Monitor className="w-10 h-10" />,
      features: ["تنسيق مواعيد Pearson VUE", "دفع الرسوم المقررة", "دعم فني كامل"],
      gradient: "from-cyan-600 to-cyan-400"
    },
    {
      title: "دورات التأهيل للبرومترك والبيرسون فيو",
      desc: "نساعدك على اجتياز امتحاني البرومترك والبيرسون فيو عبر دورات أونلاين تفاعلية، تشمل شرحًا شاملاً، مراجعة مستمرة، وأهم الأسئلة وفق أحدث التحديثات.",
      icon: <BookOpen className="w-10 h-10" />,
      features: ["محاضرات أونلاين", "بنك أسئلة محدث", "مراجعات ليلة الامتحان"],
      gradient: "from-teal-600 to-teal-400"
    },
    {
      title: "داتا تشيك",
      desc: "نقدم خدمة التحقق الشامل من مستنداتك وشهاداتك المهنية، قبل إرسالها إلى شركات التحقق المعتمدة. ونراجع ملفك للتأكد من استيفاء جميع المتطلبات، والتحقق من عدم وجود أي ثغرات قد تؤدي إلى تأخير أو رفض طلبك.",
      icon: <Search className="w-10 h-10" />,
      features: ["مراجعة دقة البيانات", "التأكد من الأختام", "تصحيح الأخطاء الشائعة"],
      gradient: "from-blue-800 to-blue-600"
    },
    {
      title: "المصادقة",
      desc: "بعد اجتياز التصنيف المهني، يتم توثيق الشهادات لدى الملحق الثقافي السعودي كخطوة أساسية لتأشيرة العمل، ونحن نتولى جميع إجراءات التوثيق والمتابعة لضمان إنجازها بسرعة ونجاح.",
      icon: <ClipboardCheck className="w-10 h-10" />,
      features: ["توثيق الملحق الثقافي", "الخارجية والجهات المعنية", "شحن المستندات بأمان"],
      gradient: "from-purple-600 to-purple-400"
    },
    {
      title: "الاعتماد المهني السعودي",
      desc: "هو إجراء للتحقق من صحة الشهادات عبر التواصل المباشر مع جهة الدراسة، مخصص لحاملي المؤهلات العليا وفوق المتوسطة، ونحن نتولى تنفيذه بالكامل بسرعة وكفاءة.",
      icon: <Award className="w-10 h-10" />,
      features: ["التواصل مع الجامعات", "تأكيد صحة المؤهل", "إصدار شهادة الصلاحية"],
      gradient: "from-blue-900 to-indigo-900"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeader 
          title="خدماتنا" 
          subtitle="نقدم جميع حلول التوثيق الطبي وحجز الامتحانات والتصنيف المهني في الخليج"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(14,38,216,0.12)] transition-all duration-500 h-full flex flex-col"
            >
              {/* Top Visual Area */}
              <div className={`h-40 bg-gradient-to-br ${service.gradient} relative overflow-hidden flex items-center justify-center`}>
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay" />
                <div className="absolute inset-0 bg-black/5" />
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/30 shadow-xl z-10"
                >
                  {service.icon}
                </motion.div>
                <div className="absolute top-2 left-2 w-12 h-12 bg-white/10 rounded-full blur-xl" />
                <div className="absolute bottom-2 right-2 w-20 h-20 bg-black/10 rounded-full blur-2xl" />
              </div>

              {/* Content Area */}
              <div className="p-8 flex flex-col flex-1 text-right">
                <h3 className="text-xl font-bold mb-4 text-[#222222] group-hover:text-[#0E26D8] transition-colors">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 opacity-80">
                  {service.desc}
                </p>

                {/* Checklist */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full border-2 border-[#FF6100] flex items-center justify-center shrink-0">
                        <CheckCircle2 size={12} className="text-[#FF6100]" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Footer Link */}
                <a 
                  href="#contact" 
                  className="mt-auto text-[#FF6100] font-bold text-sm flex items-center gap-2 group/link transition-all"
                >
                  تعرف أكثر
                  <ArrowLeft size={16} className="group-hover/link:-translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "خبرة واسعة وتخصص",
      desc: "فريقنا يمتلك باعاً طويلاً في التعامل مع كافة التخصصات الطبية والمهنية."
    },
    {
      title: "السرعة في الإنجاز",
      desc: "نقدّر وقتك، لذا نعمل بأقصى طاقة لإنهاء إجراءاتك في أسرع وقت ممكن."
    },
    {
      title: "دعم فني مستمر",
      desc: "خدمة عملاء متواجدة للرد على استفساراتك ومتابعة ملفك خطوة بخطوة."
    },
    {
      title: "تسهيلات الدفع",
      desc: "نوفر طرق دفع مرنة داخل مصر والسعودية والإمارات وعمان."
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-[#0E26D8] text-white relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-right"
          >
            <h2 className="text-xl md:text-3xl font-bold mb-8 leading-tight">
              لماذا يختارنا مئات <br /> <span className="text-[#FF6100]">الأطباء والصيادلة؟</span>
            </h2>
            <p className="text-lg opacity-80 mb-12 leading-relaxed">
              نحن لا نقدم مجرد خدمة، بل نكون شريكاً حقيقياً لك في نجاحك المهني وتخطيط مستقبلك في الخارج. التزامنا بالجودة هو سر تميزنا.
            </p>
            
            <div className="space-y-4">
              {reasons.map((reason, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
                >
                  <div className="text-right flex-1">
                    <h4 className="text-xl font-bold mb-1">{reason.title}</h4>
                    <p className="text-sm opacity-70 leading-relaxed">{reason.desc}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#FF6100] flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/30">
                    <CheckCircle2 size={18} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
            <div className="w-full aspect-square relative">
              <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-xl border border-white/10 rotate-3 shadow-2xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl shadow-xl flex flex-col justify-center items-center text-center p-12">
                <div className="w-24 h-24 bg-[#FF6100] rounded-full flex items-center justify-center mb-8 shadow-xl">
                  <Star size={48} className="fill-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4">نجاحك هو نجاحنا</h3>
                <p className="text-xl opacity-80">أكثر من 1000 ملف تم إنجازه بنسبة نجاح قياسية</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: "عميل سعيد", value: 500 },
    { label: "سنوات خبرة", value: 5 },
    { label: "دول عربية", value: 5 },
    { label: "ملف منجز", value: 1000 }
  ];

  return (
    <section className="bg-[#0E26D8] text-white py-4 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="text-xl md:text-2xl font-black text-[#FF6100]">
                +<Counter value={stat.value} />
              </span>
              <span className="text-sm font-medium opacity-70">{stat.label}</span>
            </div>
          ))}
        </div>
        <div className="text-xs font-medium opacity-50">
          © {new Date().getFullYear()} القاضي داتا فلو. جميع الحقوق محفوظة
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "د. أحمد كمال",
      role: "طبيب بشري",
      text: "تجربة رائعة مع القاضي داتا فلو. سرعة في الرد واحترافية في متابعة ملف الداتا فلو الخاص بي للسعودية. شكر خاص لفريق العمل على سعة صدرهم.",
      rating: 5
    },
    {
      name: "ص. مروة سعيد",
      role: "صيدلانية",
      text: "كنت قلقة بشأن إجراءات الاعتماد المهني للإمارات، لكن فريق القاضي داتا فلو بسط لي الأمور وساعدني في كل خطوة حتى حصلت على الترخيص. أنصح بهم بشدة.",
      rating: 5
    },
    {
      name: "د. خالد العجمي",
      role: "طبيب أسنان",
      text: "أفضل خدمة داتافلو وبرومترك تعاملت معها. المصداقية والسرعة هي أهم ما يميزهم. تم إنهاء تذكرة البرومترك الخاصة بي في أقل من 24 ساعة.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="ماذا يقول عملاؤنا؟" 
          subtitle="قصص نجاح نعتز بها من زملائنا الأطباء والصيادلة الذين وثقوا في خدماتنا."
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-start text-right relative"
            >
              <div className="absolute top-6 left-6 text-blue-100">
                <Quote size={48} />
              </div>
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-[#FF6100] text-[#FF6100]" />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-8 italic flex-1">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-bold text-[#0E26D8]">
                  {review.name.charAt(2)}
                </div>
                <div>
                  <h4 className="font-bold text-[#222222]">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-[40px] shadow-2xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
          
          {/* Form */}
          <div className="flex-1 p-8 md:p-16">
            <h2 className="text-xl md:text-3xl font-bold mb-4 text-[#222222]">تواصل معنا اليوم</h2>
            <p className="text-gray-500 mb-10 leading-relaxed">أدخل بياناتك وسيقوم أحد مستشارينا بالتواصل معك في أسرع وقت لمناقشة طلبك.</p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 block pr-2">الاسم بالكامل</label>
                  <input className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 focus:bg-white focus:border-[#0E26D8] focus:ring-4 focus:ring-blue-100 outline-none transition-all" placeholder="أدخل اسمك" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 block pr-2">رقم الهاتف</label>
                  <input className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 focus:bg-white focus:border-[#0E26D8] focus:ring-4 focus:ring-blue-100 outline-none transition-all" placeholder="0020123456789" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 block pr-2">الخدمة المطلوبة</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 focus:bg-white focus:border-[#0E26D8] focus:ring-4 focus:ring-blue-100 outline-none transition-all appearance-none">
                  <option>الداتافلو</option>
                  <option>البرومترك والبيرسون فيو</option>
                  <option>الاعتماد المهني</option>
                  <option>أخرى</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 block pr-2">الرسالة</label>
                <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 focus:bg-white focus:border-[#0E26D8] focus:ring-4 focus:ring-blue-100 outline-none transition-all" placeholder="كيف يمكننا مساعدتك؟" />
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#0E26D8] text-white font-bold py-5 rounded-2xl shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all text-xl"
              >
                إرسال الطلب
              </motion.button>
            </form>
          </div>

          {/* Contact Info Sidebar */}
          <div className="lg:w-[400px] bg-[#0E26D8] p-10 md:p-16 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold mb-10">معلومات التواصل</h3>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-sm opacity-60 mb-1">اتصل بنا</p>
                    <p className="text-xl font-bold" dir="ltr">+20 1011 016 779</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <MessageCircle className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-sm opacity-60 mb-1">واتساب</p>
                    <p className="text-xl font-bold" dir="ltr">+20 1011 016 779</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <Globe className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-sm opacity-60 mb-1">الموقع الإلكتروني</p>
                    <p className="text-xl font-bold">elkadydataflow.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <p className="opacity-80 mb-6">تابعنا على منصات التواصل</p>
              <div className="flex gap-4">
                {[
                  { icon: <Facebook />, href: "https://www.facebook.com/elkadydataflowpage" },
                  { icon: <Instagram />, href: "https://www.instagram.com/elkadydataflow/" },
                  { icon: <Youtube />, href: "https://www.youtube.com/channel/UCW2tEKsL22JqlHom8mSNGlA" }
                ].map((social, idx) => (
                  <a key={idx} href={social.href} className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#0E26D8] transition-all">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => (
  <section className="py-20">
    <div className="container mx-auto px-6">
      <div className="bg-gradient-to-r from-[#0E26D8] to-blue-700 rounded-[40px] p-10 md:p-16 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-xl md:text-3xl font-bold mb-8 leading-relaxed">
            هل أنت جاهز لبدء رحلتك المهنية في الخارج؟
          </h2>
          <p className="text-xl opacity-80 mb-10 leading-relaxed">
            لا تضيع وقتك في الإجراءات المعقدة، دع الخبراء يتولون الأمر عنك. تواصل معنا الآن للحصول على استشارة مجانية.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/201011016779"
              className="bg-[#FF6100] text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl flex items-center justify-center gap-3"
            >
              <MessageCircle />
              تحدث معنا عبر واتساب
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => {
  return (
    <footer className="bg-[#222222] text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-[#0E26D8] rounded-xl flex items-center justify-center">
                <Globe size={24} />
              </div>
              <span className="text-2xl font-extrabold tracking-tight">
                القاضي <span className="text-[#FF6100]">داتا فلو</span>
              </span>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md mb-8">
              شركة رائدة متخصصة في تقديم حلول الاعتماد المهني والتوثيق للكوادر الطبية الطموحة، نجمع بين الخبرة والسرعة لنضمن لك مستقبلاً مشرقاً.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Facebook size={20} />, href: "https://www.facebook.com/elkadydataflowpage" },
                { icon: <Instagram size={20} />, href: "https://www.instagram.com/elkadydataflow/" },
                { icon: <Youtube size={20} />, href: "https://www.youtube.com/channel/UCW2tEKsL22JqlHom8mSNGlA" }
              ].map((s, idx) => (
                <a key={idx} href={s.href} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0E26D8] transition-all">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-8">روابط سريعة</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">الرئيسية</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">من نحن</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">خدماتنا</a></li>
              <li><a href="#why-us" className="text-gray-400 hover:text-white transition-colors">لماذا نحن؟</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">تواصل معنا</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8">معلومات التواصل</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start text-gray-400">
                <MapPin className="shrink-0 text-[#FF6100]" size={20} />
                <span>مقرنا متاح لمقابلتكم وتلقي استفساراتكم</span>
              </li>
              <li className="flex gap-4 items-start text-gray-400" dir="ltr">
                <Phone className="shrink-0 text-[#FF6100]" size={20} />
                <span>+20 1011 016 779</span>
              </li>
              <li className="flex gap-4 items-start text-gray-400">
                <Globe className="shrink-0 text-[#FF6100]" size={20} />
                <span>elkadydataflow.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-10 text-center text-gray-500">
          <p>© {new Date().getFullYear()} شركة القاضي داتا فلو. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-[#0E26D8]" dir="rtl">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <WhyChooseUs />
        <Stats />
        <CTASection />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/201011016779"
        className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-[#25D366]/50 transition-all overflow-hidden"
      >
        <MessageCircle size={36} fill="white" />
      </motion.a>
    </div>
  );
}
