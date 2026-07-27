import config from "../config.json";


export default async function handler(req, res) {

    if (req.method !== "POST") {
        return res.status(405).json({
            success: false,
            message: "POST only"
        });
    }


    try {

        const body = req.body;


        console.log("Received GPS:");
        console.log(body);



        // Get SMS settings from config.json
        const phone = config.phone;
        const sms_enabled = config.sms_enabled;



        const response = await fetch(
            "https://www.circuitdigest.cloud/api/v1/geolinker",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    "Authorization":
                    "Bearer cd_bub_200726_pGeWmt"
                },

                body: JSON.stringify(body)
            }
        );


        const text = await response.text();



        return res.status(200).json({

            success: true,


            // ESP32 can read this
            sms_config: {
                phone: phone,
                sms_enabled: sms_enabled
            },


            circuitdigest_status: response.status,

            circuitdigest_response: text

        });


    } catch (error) {


        console.error(error);


        return res.status(500).json({

            success:false,

            error:error.message

        });

    }

}
