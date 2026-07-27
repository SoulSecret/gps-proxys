import data from '../number.json';

export default function handler(req, res) {
  try {
    return res.status(200).json({
      phone: data.phone,
      sms_enabled: data.sms_enabled
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      error: err.message
    });
  }
}
