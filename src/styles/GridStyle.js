const rowStyle = (record, index) => ({
  backgroundColor: index % 2 === 0 ? "#fafafa" : "white",
});

const GridStyle = {
  rowStyle: rowStyle,
  centered: {
    textAlign: "center",
  },
};

export default GridStyle;
