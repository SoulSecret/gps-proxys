import data from '../number.json';
export default async function handler(req, res) {
  try {
    const phone = process.env.PHONE_NUMBER;

    return res.status(200).json({
      phone,
      sms_enabled: true
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      error: err.message
    });
  }
}
