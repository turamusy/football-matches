import { StyleSheet } from "react-native";
import { theme } from "../../styles/color-varibles";
import { convertHexToRGBA } from "../../utils/convert-hex-to-rgba";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: convertHexToRGBA(theme.black, 0.2),
    flex: 1,
    padding: 12,
    borderRadius: 10,
    marginHorizontal: 4,
  },
  matchText: {
    fontSize: 15,
    color: theme.white,
    marginBottom: 4,
  },
});