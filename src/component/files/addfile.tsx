import { ChangeEvent, SetStateAction, useState } from "react";

export default function FileUpload() {
    const [file, setFile] = useState<File | null>(null);
  const [deadline, setDeadline] = useState("");
  const [message, setMessage] = useState("");

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files?.[0] ?? null);
  };

  const handleDeadlineChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setDeadline(event.target.value);
  };

  const handleUpload = async () => {
    if (!file || !deadline) {
      setMessage("נא לבחור קובץ ולהגדיר דדליין.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("deadline", deadline);

    try {
      const response = await fetch("https://localhost:7234/upload", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3RyaW5nIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiY2xpZW50IiwiaWQiOiIxIiwiZXhwIjoxNzQyMjQ2NTUyLCJpc3MiOiJ5b3VyX2lzc3VlciIsImF1ZCI6InlvdXJfYXVkaWVuY2UifQ.FK1aAj886bNaJsQdKUCe0Ir5IHk_--fR9T6bHgo-O2k"}`, // טוקן מהלוקל סטורג'
        },
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("קובץ הועלה בהצלחה!");
      } else {
        setMessage(data.message || "שגיאה בהעלאת הקובץ.");
      }
    } catch (error) {
      setMessage("שגיאה ברשת. נסה שוב.");
    }
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-lg font-semibold mb-2">העלאת קובץ</h2>
      <input type="file" onChange={handleFileChange} className="mb-2" />
      <input
        type="datetime-local"
        value={deadline}
        onChange={handleDeadlineChange}
        className="border p-2 rounded mb-2 w-full"
      />
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        העלה קובץ
      </button>
      {message && <p className="mt-2 text-red-600">{message}</p>}
    </div>
  );
}
