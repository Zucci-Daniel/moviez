export interface SearchBarProps {
  placeholder: string;
  onChange: (text: string) => void;
  onVoiceSearch: () => void;
  listening?: boolean;
  value: string;
}
