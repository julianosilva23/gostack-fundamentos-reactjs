const formatValue = (value: number): string =>
  Intl.NumberFormat('bzs', { style: 'currency', currency: 'BRL' }).format(value);

export default formatValue;
