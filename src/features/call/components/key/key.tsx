import "./key.css";

export function Key() {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "Delete"];

  return (
    <ul>
      {numbers.map((item) => (
        <li>
          <button className="key" data-number={item}>
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
}
