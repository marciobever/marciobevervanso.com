import React from 'react';
import { 
  Wallet, 
  FileText, 
  Car, 
  Smile, 
  Home, 
  Accessibility, 
  HelpCircle,
  AlertCircle,
  Flame,
  Zap,
  GraduationCap,
  PlusCircle,
  HeartHandshake,
  ShieldCheck,
  Bike,
  Pill,
  Bus,
  Tv,
  Coins,
  Briefcase
} from 'lucide-react';

interface IconHelperProps {
  name: string;
  className?: string;
}

export const IconHelper: React.FC<IconHelperProps> = ({ name, className }) => {
  const icons: { [key: string]: React.ElementType } = {
    'Wallet': Wallet,
    'FileText': FileText,
    'Car': Car,
    'Smile': Smile,
    'Home': Home,
    'Accessibility': Accessibility,
    'HelpCircle': HelpCircle,
    'AlertCircle': AlertCircle,
    'Flame': Flame,
    'Zap': Zap,
    'GraduationCap': GraduationCap,
    'PlusCircle': PlusCircle,
    'HeartHandshake': HeartHandshake,
    'ShieldCheck': ShieldCheck,
    'Bike': Bike,
    'Pill': Pill,
    'Bus': Bus,
    'Tv': Tv,
    'Coins': Coins,
    'Briefcase': Briefcase
  };

  const IconComponent = icons[name] || HelpCircle;

  return <IconComponent className={className} />;
};