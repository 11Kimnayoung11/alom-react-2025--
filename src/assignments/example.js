import { useState, useEffect} from "react";

function App() {
  // 과제1-1: 7-1, 7-2강을 듣고 이곳에 투두리스트 컴포넌트를 작성해주세요.
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState(() => {
    const savedToDos = localStorage.getItem("toDos");
    return savedToDos ? JSON.parse(savedToDos) : [];
  });

  useEffect(() => {
    const savedToDos = localStorage.getItem("toDos");
    if (savedToDos) {
      setToDos(JSON.parse(savedToDos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }, [toDos]);

  

  const onChange = (event) => setToDo(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") return;
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };

  const onDelete = (index) => {
    setToDos((currentArray) => currentArray.filter((_, i) => i !== index));
  };

  return (
    <div
      style={{
        maxWidth: 650,
        margin: "40px auto",
        fontFamily: "sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          marginBottom: 32,
        }}
      >
        My To Dos <span style={{ fontWeight: "normal" }}>({toDos.length})</span>
      </h1>
      <form
        onSubmit={onSubmit}
        style={{
          display: "flex",
          gap: 10,
          marginBottom: 20,
        }}
      >
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
          style={{
            flex: 1,
            padding: "12px",
            border: "1px solid #ccc",
            borderRadius: 4,
          }}
        />
        <button
          style={{
            background: "#000000",
            color: "white",
            border: "none",
            borderRadius: 4,
            padding: "0 20px",
          }}
        >
          Add To Do
        </button>
      </form>
      <hr />
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          marginTop: 20,
        }}
      >
        {toDos.map((item, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "14px 16px",
              borderBottom: "#f0f0f0",
              background: "#D3D3D3",
              marginBottom: 12,
              borderRadius: 4,
            }}
          >
            <span>{item}</span>
            <button
              onClick={() => onDelete(index)}
              style={{
                background: "none",
                border: "none",
                color: "#0000000",
                fontSize: "1.5rem",
                cursor: "pointer",
                marginLeft: 10,
                lineHeight: 1,
              }}
              aria-label="삭제"
            >
              ✖
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
