import express from "express";
const router = express.Router();
import cors from "cors";
import nodemailer from "nodemailer";
import { config } from "dotenv";
config();

// server used to send send emails
const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use("/", router);

// console.log(process.env.EMAIL_USER);
// console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  port: 465,
  auth: {
    user: process.env.AUTHUSER,
    pass: process.env.AUTHPASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.get("/contact", (req, res) => {
  res.send("contact");
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const receiverMail = {
    from: name,
    to: process.env.RECIEVER_EMAIL,
    subject: "More Informaion for Tour Packages",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(receiverMail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});

app.listen(process.env.PORT, () =>
  console.log(`Server Running at port ${process.env.PORT}`)
);
