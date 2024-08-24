const styles = {
  todoText: {
    maxWidth: { xs: "200px", sm: "300px", md: "400px" },
    wordWrap: "break-word",
    overflowWrap: "break-word",
    whiteSpace: "normal",
  },
  todoCheck: {
    maxWidth: "400px",
    wordWrap: "break-word",
    textDecoration: "line-through",
  },
  todosContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: "8px",
    backgroundColor: "lightgrey",
    borderRadius: "10px",
    padding: "5px",
    boxSizing: "border-box",
  },
  bgContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "skyblue",
    minHeight: "100vh",
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingBottom:'5px'
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  textField: {
    width: "90%",
  },
  todosBgContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  inptButtonItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "3px",
  },
  heading: {
    fontSize: "50px",
    fontFamily: "Roboto",
  },
  button: {
    backgroundColor: "#1976d2",
    color: "white",
    borderRadius: "10px",
    "&:hover": {
      backgroundColor: "#1976d2",
    },
  },
  avatar: {
    backgroundColor: "#1976d2",
    cursor: "pointer",
  },
  checkboxButtonContainer: {
    width: "100%",
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    justifyContent: "space-between",
    alignItems: { xs: "center", sm: "flex-start" },
    flexWrap: "wrap",
  },
  checkboxContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "4px",
  },
};

export default styles;
