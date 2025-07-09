export interface AiWebsite {
  id: string;
  name: string;
  description: string;
  url: string;
  category: AiCategory;
}

export type AiCategory = 
  | 'all-in-one'
  | 'image-generation'
  | 'video-generation'
  | 'text-generation'
  | 'code-generation'
  | 'presentation'
  | 'personal-assistant'
  | 'website-builder'
  | 'audio-generation'
  | 'other';

export interface CategoryInfo {
  id: AiCategory;
  name: string;
  description: string;
  icon: string;
} 