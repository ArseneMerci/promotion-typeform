import '../../styles/input.module.css';

export default function Input({ placeholder, type, handleOnchange, name }) {
  return (
    <>
      <input
        placeholder={placeholder}
        type={type}
        onChange={handleOnchange}
        name={name}
        className={`input`}
      />
    </>
  );
}
