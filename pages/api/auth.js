import Cors from "cors";

const cors = Cors({
  methods: ["GET", "POST", "DELETE"],
});

const runMiddleware = (req, res, fn) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
};

export default async (req, res) => {
  await runMiddleware(req, res, cors);

  switch (req.method) {
    case "GET":
      res.status(200).json({ method: req.method });
      break;
    case "POST":
      res.status(200).json({ method: req.method });
      break;
    case "DELETE":
      res.status(200).json({ method: req.method });
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "DELETE"]);
      res.status(405).end(`Method ${req.method} not allowed`);
  }
};
