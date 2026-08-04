export default function handler(req, res) {
  return res.status(200).json({
    phone: "+639925281339",
    sms_enabled: true
  });
}
