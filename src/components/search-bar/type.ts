export interface SearchBarProps {
  placeholder: string;
  onChange: (text: string) => void;
  onVoiceSearch: () => void;
  onEndVoiceSearch: () => void;
  listening?: boolean;
  value: string;
}
