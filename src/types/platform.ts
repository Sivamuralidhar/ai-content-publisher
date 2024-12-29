export type Platform = 'twitter' | 'facebook' | 'instagram' | 'linkedin' | 'reddit' | 'threads';

export interface PlatformConfig {
  icon: React.ElementType;
  label: string;
  color: string;
  selectedColor: string;
}