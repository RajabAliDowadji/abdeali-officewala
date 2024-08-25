"use client";

function CustomTextArea({
  id,
  name,
  type,
  title,
  value,
  errorMsg,
  onChange,
  className,
  titleClassName,
  parentClassName,
}) {
  return (
    <div className={`mb-4 ${parentClassName}`}>
      <p
        className={`text-primary font-sans text-sm mb-1 tracking-wider ${titleClassName}`}
      >
        {title}
      </p>
      <textarea
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`px-4 py-3.5 rounded font-primary bg-secondary w-full text-white focus:outline-none ${className}`}
      />
      {errorMsg ? (
        <p className="font-primary text-xs text-secondary">{errorMsg}</p>
      ) : null}
    </div>
  );
}
export default CustomTextArea;
