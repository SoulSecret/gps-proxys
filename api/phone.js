export default function handler(req, res) {
  return res.status(200).json({
    phone: "+63992581339",
    sms_enabled: true
  });
}
