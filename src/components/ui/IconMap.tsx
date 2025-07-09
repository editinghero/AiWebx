import React from 'react';
import {
  Layers,
  Image,
  Video,
  FileText,
  Code,
  Presentation,
  Bot,
  Layout,
  Music,
  Wrench,
  Grid,
  LucideProps
} from 'lucide-react';

type IconName = 
  | 'layers'
  | 'image'
  | 'video'
  | 'file-text'
  | 'code'
  | 'presentation'
  | 'bot'
  | 'layout'
  | 'music'
  | 'tool'
  | 'grid';

interface IconMapProps extends LucideProps {
  iconName: string;
}

const iconComponents = {
  'layers': Layers,
  'image': Image,
  'video': Video,
  'file-text': FileText,
  'code': Code,
  'presentation': Presentation,
  'bot': Bot,
  'layout': Layout,
  'music': Music,
  'tool': Wrench,
  'grid': Grid,
};

export const IconMap: React.FC<IconMapProps> = ({ iconName, ...props }) => {
  // Default to Wrench icon if the specified icon doesn't exist
  const IconComponent = iconComponents[iconName as IconName] || Wrench;
  
  return <IconComponent {...props} />;
}; 