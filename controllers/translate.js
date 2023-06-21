import axios from "axios";

export const getLang = async (req,res) =>{
    try{
        const options = {
            method: 'GET',
            url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages',
            headers: {
              'Accept-Encoding': 'application/gzip',
              'X-RapidAPI-Key': 'eccd6d6feemsh2a777da29beaf15p14fe1ajsncb2464e044e6',
              'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
            }
        };
        const response = await axios.request(options);
        return res.send(response.data);
    }catch(err){
        return res.send(err);
    }
}

export const detectLang = async (req,res) =>{
    try{
        const { input } = req.body;
        const encodedParams = new URLSearchParams();
        encodedParams.set('q', `${input}`);

        const options = {
        method: 'POST',
        url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': 'eccd6d6feemsh2a777da29beaf15p14fe1ajsncb2464e044e6',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        data: encodedParams,
        };

        const response = await axios.request(options);
        return res.send(response.data);
    }catch(err){
        return res.send(err);
    }
}

export const translateLang = async (req,res) =>{
    try{
        const {convertText, $source, $target} = req.body;

        const encodedParams = new URLSearchParams();
        encodedParams.set('q', `${convertText}`);
        encodedParams.set('target', `${$target}`);
        encodedParams.set('source', `${$source}`);
        const options = {
            method: 'POST',
            url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
            headers: {
              'content-type': 'application/x-www-form-urlencoded',
              'Accept-Encoding': 'application/gzip',
              'X-RapidAPI-Key': 'eccd6d6feemsh2a777da29beaf15p14fe1ajsncb2464e044e6',
              'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
            },
            data: encodedParams,
        };

        const response = await axios.request(options);
        return res.send(response.data);
    }catch(err){
        return res.send(err);
    }
}