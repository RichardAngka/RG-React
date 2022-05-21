// TODO: answer here
import axios from "axios";
import { useState } from "react";
import { API_URL } from "../api/config";

export default function UploadForm() {
  // TODO: answer here
  const [dataForm, setDataForm] = useState({});

  const handleSubmit = async (event) => {
    let formData = new FormData();
    formData.append("caption", dataForm.caption);
    formData.append("image", new File(dataForm.image));
    event.preventDefault();
    await axios.post(`${API_URL}/post/create`, formData, {
      withCredentials: true,
    });
  };

  return (
    <div aria-label="Upload Form">
      <form onSubmit={handleSubmit}>
        <input
          aria-label="Caption Input"
          onChange={(e) =>
            setDataForm((curr) => ({
              ...curr,
              caption: e.target.value,
            }))
          }
        />
        <input
          type="file"
          accept="image/png, image/jpg, image/gif"
          aria-label="Image Input"
          onChange={(e) =>
            setDataForm((curr) => ({
              ...curr,
              image: e.target.files,
            }))
          }
        />
        <input aria-label="Submit Button" type="submit" value="Submit" />
      </form>
    </div>
  );
}
