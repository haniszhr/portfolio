export default function Title({ title }) {
  return (
    <>
      <div className="section-title mb-4">
        <h3 className="section-title_text">&lt;{title} /&gt;</h3>

        <span className="section-title_line"></span>
      </div>
    </>
  );
}
