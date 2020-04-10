import Cors from "cors";
import bcrypt from "bcrypt";

const SALT_ROUND = 12;

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
      try {
        // create 4 digit number, this number send to number
        const digitNumber = Math.floor(1000 + Math.random() * 9000).toString();

        // hash digit number
        const data = bcrypt.hashSync(digitNumber, SALT_ROUND);

        // TODO: Send OTP code to req.body.tel using Nexmo

        res.status(200).json({ code: 200, status: "success", data });
      } catch (e) {
        console.log(e);
        res.end();
      }
      break;
    case "DELETE":
      res.status(200).json({ method: req.method });
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "DELETE"]);
      res.status(405).end(`Method ${req.method} not allowed`);
  }
};

export const config = {
  api: {
    bodyParser: true,
  },
};
