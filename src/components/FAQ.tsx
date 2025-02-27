import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FAQItem = React.memo(({ 
  faq, 
  isOpen, 
  onToggle, 
  index 
}: { 
  faq: { question: string, answer: string }, 
  isOpen: boolean, 
  onToggle: () => void, 
  index: number 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-gray-900/50 rounded-xl border border-blue-900/30 overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between text-left transition-colors hover:bg-blue-600/10"
      >
        <span className="font-medium pr-4">{faq.question}</span>
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          {isOpen ? (
            <Minus className="w-5 h-5 text-blue-500" />
          ) : (
            <Plus className="w-5 h-5 text-blue-500" />
          )}
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: "auto", 
              opacity: 1,
              transition: {
                height: { duration: 0.2, ease: "easeOut" },
                opacity: { duration: 0.15, ease: "linear" }
              }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: {
                height: { duration: 0.2, ease: "easeIn" },
                opacity: { duration: 0.1, ease: "linear" }
              }
            }}
          >
            <div className="px-6 py-4 text-gray-400 border-t border-blue-900/30 bg-blue-950/20">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});

FAQItem.displayName = 'FAQItem';

const FAQColumn = React.memo(({ 
  items, 
  openIndex, 
  startIndex, 
  onToggle 
}: { 
  items: { question: string, answer: string }[], 
  openIndex: number | null, 
  startIndex: number, 
  onToggle: (index: number) => void 
}) => (
  <div className="space-y-4">
    {items.map((faq, index) => {
      const actualIndex = startIndex + index;
      return (
        <FAQItem
          key={actualIndex}
          faq={faq}
          isOpen={openIndex === actualIndex}
          onToggle={() => onToggle(actualIndex)}
          index={index}
        />
      );
    })}
  </div>
));

FAQColumn.displayName = 'FAQColumn';

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const handleToggle = React.useCallback((index: number) => {
    setOpenIndex(prevIndex => prevIndex === index ? null : index);
  }, []);

  // FAQ traduit avec `t()`
  const faqs = [
    { question: t('faq.question1'), answer: t('faq.answer1') },
    { question: t('faq.question2'), answer: t('faq.answer2') },
    { question: t('faq.question3'), answer: t('faq.answer3') },
    { question: t('faq.question4'), answer: t('faq.answer4') },
    { question: t('faq.question5'), answer: t('faq.answer5') },
    { question: t('faq.question6'), answer: t('faq.answer6') },
    { question: t('faq.question7'), answer: t('faq.answer7') },
    { question: t('faq.question8'), answer: t('faq.answer8') },
    { question: t('faq.question9'), answer: t('faq.answer9') },
    { question: t('faq.question10'), answer: t('faq.answer10') }
  ];

  const midPoint = Math.ceil(faqs.length / 2);
  const leftColumnFaqs = faqs.slice(0, midPoint);
  const rightColumnFaqs = faqs.slice(midPoint);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <HelpCircle className="w-8 h-8 text-blue-500" />
            <h2 className="text-3xl font-bold">{t('faq.title')}</h2>
          </div>
          <p className="text-gray-400 text-lg">
            {t('faq.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FAQColumn 
            items={leftColumnFaqs} 
            openIndex={openIndex} 
            startIndex={0} 
            onToggle={handleToggle}
          />
          <FAQColumn 
            items={rightColumnFaqs} 
            openIndex={openIndex} 
            startIndex={midPoint} 
            onToggle={handleToggle}
          />
        </div>
      </div>
    </section>
  );
}
