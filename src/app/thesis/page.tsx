export default function Thesis() {
  return (
    <div className="bg-gray-100" style={{ height: "calc(100vh - 4rem)" }}>
      <embed
        src="master_strengell_ville_2024.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
        title="Embedded PDF Viewer"
      />
    </div>
  );
}
