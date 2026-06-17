import * as Icons from 'lucide-react';

export default function DynamicIcon({ name, className }) {
  const IconComponent = Icons[name] || Icons.HelpCircle;
  return <IconComponent className={className} />;
}
