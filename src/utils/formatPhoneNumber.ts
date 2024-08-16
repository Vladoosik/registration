export const formatPhoneNumber = (input: string): string => {
  const cleaned = input.replace(/(?!^)\D/g, '');

  const hasPlus = cleaned.startsWith('+');
  const digitsOnly = hasPlus ? cleaned.substring(1) : cleaned;

  const parts = [
    digitsOnly.substring(0, 2),
    digitsOnly.substring(2, 5),
    digitsOnly.substring(5, 8),
    digitsOnly.substring(8, 10),
    digitsOnly.substring(10, 13),
  ];

  const formatted = parts.filter(Boolean).join(' ');

  return hasPlus ? `+${formatted}` : formatted;
};

export const handlePhoneNumberChange = (
  text: string,
  setPhoneNumber: (s: string) => void,
) => {
  const formatted = formatPhoneNumber(text);
  setPhoneNumber(formatted);
};
