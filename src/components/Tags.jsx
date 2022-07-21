import "../style/Tags.css";

function Tag(props) {
  const tags = props.tags;

  return (
    <div className="tags-grid">
      {tags.map((tag, index) => (
        <div key={`${tag}-${index}`} className="tag">
          {tag}
        </div>
      ))}
    </div>
  );
}

export default Tag;
