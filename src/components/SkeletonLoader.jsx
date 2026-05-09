const Pulse = ({ w, h, r = 10 }) => (
  <div style={{
    width: w, height: h, borderRadius: r,
    background: "linear-gradient(90deg, #e8e8e8 25%, #f5f5f5 50%, #e8e8e8 75%)",
    backgroundSize: "200% 100%",
    animation: "shimmer 1.5s infinite",
  }} />
);

export default function SkeletonLoader() {
  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 3fr", gap: 14 }}>
        <div style={{ background: "white", borderRadius: 20, padding: 20, display: "flex", flexDirection: "column", gap: 12 }}>
          <Pulse w="60%" h={12} />
          <Pulse w="40%" h={10} />
          <Pulse w="80px" h={80} r={50} />
          <Pulse w="50%" h={40} />
          <Pulse w="70%" h={10} />
        </div>
        <div style={{ background: "white", borderRadius: 16, padding: 20 }}>
          <Pulse w="100%" h="100%" r={16} />
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 3fr 2fr", gap: 14 }}>
        {[1,2,3].map(i => (
          <div key={i} style={{ background: "white", borderRadius: 18, padding: 16, display: "flex", flexDirection: "column", gap: 10 }}>
            <Pulse w="60%" h={12} />
            <Pulse w="100%" h={80} />
          </div>
        ))}
      </div>
    </>
  );
}