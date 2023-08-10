import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

type SheetForm = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "only POST method are allowed" });
  }

  const body = req.body as SheetForm;

  try {
    //prepare auth
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: procces.env.GOOGLE_CLIENT_EMAIL,
        private_key: procces.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: procces.env.GOOGLE_SHEET_ID,
      range: "A1:D1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [body.name, body.email, body.phone, body.message],
      },
    });

    return res.status(200).json({ data: response.data });
  } catch (e) {
    return res.status(500).send({ message: "Something went wrong" });
  }
}
