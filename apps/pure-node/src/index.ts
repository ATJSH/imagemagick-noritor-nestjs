import { createServer } from "http";

const images = [
  "https://i.imgur.com/hMaUI7T.jpeg",
  "https://i.imgur.com/7ABlfkU.jpeg",
  "https://i.imgur.com/mfMceX4.jpeg",
  "https://i.imgur.com/NlljEHl.jpeg",
  "https://i.imgur.com/Yau7iz9_d.webp?maxwidth=520&shape=thumb&fidelity=high",
  "https://i.imgur.com/ex6iJ7O_d.webp?maxwidth=520&shape=thumb&fidelity=high",
  "https://i.imgur.com/VcNd9kh_d.webp?maxwidth=520&shape=thumb&fidelity=high",
  "https://i.imgur.com/7damLhv_d.webp?maxwidth=520&shape=thumb&fidelity=high",
  "https://i.imgur.com/ihfCJrs_d.webp?maxwidth=520&shape=thumb&fidelity=high",
];

function layout9images() {}

const server = createServer(async (req, res) => {
  const image = await fetch(images[0]);

  console.log(await image.text());

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ message: "Hello World" }));
});

server.listen(3009, () => {
  console.log("Server is running on port 3009");
});
