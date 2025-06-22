function Selection({ title, changeFunc, name, optionData }) {
  return (
    <div className="flex items-center gap-2 p-2 w-full">
      <h2>{title}</h2>

      <select
        className="w-full py-2 rounded-md outline-none border border-black my-4 max-w-4xl hoverEffect "
        onChange={changeFunc}
        name={name}
        id={name}
      >
        {optionData.map((opt) => (
          <option key={opt.tech} value={opt.tech}>{opt.title}</option>
        ))}
      </select>
    </div>
  );
}

export default Selection;
