import faIconNames from './fa';
import nucleoIconNames from './nucleo';
import type IconName from './type';
import type { FAIconName, NucleoIconName } from './type';

const iconNames = [
  ...nucleoIconNames,
  ...faIconNames,
];

export const isFAIcon = (iconName: IconName): iconName is FAIconName =>
  faIconNames.includes(iconName);

export const isNucleoIcon = (iconName: IconName): iconName is NucleoIconName =>
  nucleoIconNames.includes(iconName);

export default iconNames;
