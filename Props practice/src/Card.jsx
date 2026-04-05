function Card({ children }) {
  return (
    <div style={{
      border: "2px solid blue",
      padding: "15px",
      margin: "10px",
      borderRadius: "8px",
      backgroundColor: "#f0f8ff",
      color: "black"
    }}>
      {children}
    </div>
  );
}

export default Card;