export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "POST only"
    });
  }

  try {

    console.log("Incoming Data:");
    console.log(req.body);

    const response = await fetch(
      "https://www.circuitdigest.cloud/api/v1/geolinker",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization":
            "Bearer cd_bub_200726_pGeWmt"
        },
        body: JSON.stringify(req.body)
      }
    );

    const text = await response.text();

    console.log("CircuitDigest Response:");
    console.log(text);

    return res.status(200).json({
      success: true,
      circuitdigest_status: response.status,
      circuitdigest_response: text
    });

  }
  catch (err) {

    console.error(err);

    return res.status(500).json({
      success: false,
      error: err.message
    });

  }
}
