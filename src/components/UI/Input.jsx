function Input({ name, labelText, type, onChange, value }) {
  return (
    <div className="flex flex-col gap-2 ">
      <label htmlFor={name} className="font-semibold">
        {labelText}
      </label>

      {name === "description" ? (
        <textarea
        value={value}
        required
        onChange={onChange}
          id={name}
          name={name}
          className="border border-gray-400 rounded p-2 w-full"
         
        ></textarea>
      ) : (
        <input
        value={value}
        required
        onChange={onChange}
          id={name}
          name={name}
          type={type}
          className="border border-gray-400 rounded p-2 w-full"
        />
      )}
    </div>
  );
}

export default Input;
