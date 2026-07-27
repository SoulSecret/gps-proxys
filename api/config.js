import config from "../config.json";


export default function handler(req,res)
{

    res.status(200).json({

        phone:config.phone,

        sms_enabled:config.sms_enabled

    });

}
