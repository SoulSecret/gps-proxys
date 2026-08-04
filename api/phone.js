export default function handler(req, res) {
  return res.status(200).json({
    phone: "+639665596546",
    sms_enabled: true
  });
}
