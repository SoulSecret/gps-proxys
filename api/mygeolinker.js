export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "POST only"
    });
  }

  try {

    const response = await fetch(
      "https://www.circuitdigest.cloud/api/v1/geolinker",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer cd_mar_110726_7vhUHh"
        },
        body: JSON.stringify(req.body)
      }
    );

    const text = await response.text();

    return res.status(response.status).send(text);

  } catch (error) {

    return res.status(500).json({
      success: false,
      error: error.message
    });

  }
}
