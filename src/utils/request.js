const axios = require('axios');

const url = "http://localhost:8899";

var getDialogflowResponse = (from, message) => {
    return axios.post(url,{
        from: from,
        message: message
    }).then((response)=> {
        return response.data;
    }).catch((err)=>{
        return `Error! ${err}`;
    });
};

var getBotResponse = async (from, message) => {
    var botResponse = await getDialogflowResponse(from, message);
    console.log(botResponse);
    return {
        from: "AT&T",
        text: botResponse.textResponse
    };
};

// getBotResponse("dl268k", "Howdy").then((message) =>{
//     console.log(message);
// });
//

export default getBotResponse;