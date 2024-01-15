import { Path, Svg } from "react-native-svg";

export const HomeIcon = ({ color }: { color?: string }) => {
  if (!color) color = "#2c3e50";
  return (
    <Svg
      width="44"
      height="44"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#2c3e50"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Path d="M20 3v10a8 8 0 1 1 -16 0v-10l3.432 3.432a7.963 7.963 0 0 1 4.568 -1.432c1.769 0 3.403 .574 4.728 1.546l3.272 -3.546z" />
      <Path d="M2 16h5l-4 4" />
      <Path d="M22 16h-5l4 4" />
      <Path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <Path d="M9 11v.01" />
      <Path d="M15 11v.01" />
    </Svg>
  );
};
