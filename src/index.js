import "./styles.css";
import axios from "axios";

function uploadProofOfIdentity(file, typeCode) {
  if (!file) {
    console.error("Cannot upload a null or undefined file");
    return;
  }

  const sprinthiveQAEndpoint =
    "https://22seven.qa00.sprinthive.tech/origination/v2";
  const productId = "level10";

  const formData = new FormData();
  formData.append("file", file);
  formData.append("typeCode", typeCode);
  axios
    .post(`${sprinthiveQAEndpoint}/application/${productId}/create`, formData)
    .then(res => {
      console.log("Got the data", res.data);
      console.log("boo");
    })
    .catch(err => console.error(err));
}

// find the file input and register an onChange handler
const fileInput = document.getElementById("fileUploadInput");
if (fileInput) {
  fileInput.onchange = () => {
    console.log("Hello world");
    const selectedFile = fileInput.files[0];
    uploadProofOfIdentity(selectedFile, "id-book");
  };
} else {
  console.error("I cannot find the file input!");
}

document.getElementById("resend").onclick = () => {
  const selectedFile = fileInput.files[0];
  uploadProofOfIdentity(selectedFile, "id-book");
};
