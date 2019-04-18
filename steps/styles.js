import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "6%"
  },
  step1: {
    // backgroundColor: "#1dd1a1"
    flex: 1
  },
  step2: {
    // backgroundColor: "#feca57"
    flex: 1
  },
  step3: {
    // backgroundColor: "#FF9800"
    flex: 1
  },
  step4: {
    // backgroundColor: "#2196F3"
    flex: 1
  },
  input: {
    width: "80%",
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 6,
    paddingHorizontal: 8,
    marginTop: "6%"
  },
  btnStyle: {
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 100,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center"
  },
  btnImage: {
    width: "40%",
    height: "40%"
  },
  backBtn: {
    transform: [{ rotate: "180deg" }]
  },
  marginAround: {
    width: "40%",
    justifyContent: "space-between"
  }
});
