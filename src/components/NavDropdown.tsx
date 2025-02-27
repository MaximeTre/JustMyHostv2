import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, LucideIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  path: string;
  highlight?: boolean;
  external?: boolean;
}

interface NavDropdownProps {
  label: string;
  items: NavItem[];
  icon: LucideIcon;
}

export default function NavDropdown({ label, items, icon: Icon }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number>();

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const renderLink = (item: NavItem) => {
    const content = (
      <div className="flex items-start space-x-3 p-3">
        <item.icon className={`w-5 h-5 mt-0.5 ${
          item.highlight ? 'text-blue-400' : 'text-gray-400'
        }`} />
        <div>
          <div className={`font-medium ${
            item.highlight ? 'text-blue-400' : 'text-gray-100'
          }`}>
            {item.title}
          </div>
          <div className="text-sm text-gray-400">
            {item.subtitle}
          </div>
        </div>
      </div>
    );

    const className = `
      block rounded-lg transition-all duration-200
      ${item.highlight 
        ? 'bg-blue-600/20 hover:bg-blue-600/30' 
        : 'hover:bg-gray-800/50'
      }
    `;

    return item.external ? (
      <a
        href={item.path}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    ) : (
      <Link
        to={item.path}
        className={className}
      >
        {content}
      </Link>
    );
  };

  return (
    <div 
      ref={dropdownRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button 
        className="flex items-center space-x-1 hover:text-blue-400 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon className="w-4 h-4" />
        <span>{label}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
          isOpen ? 'rotate-180' : ''
        }`} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className={`
              absolute left-0 mt-2 w-72 rounded-xl bg-gray-900/95 backdrop-blur-sm shadow-xl 
              border border-blue-900/30 overflow-hidden
            `}
          >
            <div className="p-2">
              {items.map((item, index) => (
                <React.Fragment key={item.path}>
                  {renderLink(item)}
                  {index < items.length - 1 && <div className="my-1" />}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}